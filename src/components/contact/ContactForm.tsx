import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/constants/site";
import { cn } from "@/utils/cn";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  type = "text",
  multiline = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const fieldClassName = cn(
    "peer w-full rounded-2xl border bg-background/50 px-4 pt-6 pb-3 text-text-primary outline-none transition",
    focused
      ? "border-cyan/50 shadow-[0_0_0_3px_rgba(6,182,212,0.12)]"
      : "border-white/10",
  );

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 transition-all duration-200",
          active
            ? "top-2 text-[11px] uppercase tracking-[0.18em] text-cyan"
            : "top-4 text-sm text-text-secondary",
        )}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={fieldClassName}
          required
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={fieldClassName}
          required
        />
      )}
    </div>
  );
}

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: fields.name,
            email: fields.email,
            message: fields.message,
            _subject: `Portfolio contact from ${fields.name}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send your message right now.");
        }
      } else {
        const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
          `Portfolio contact from ${fields.name}`,
        )}&body=${encodeURIComponent(
          `From: ${fields.name} (${fields.email})\n\n${fields.message}`,
        )}`;
        window.location.href = mailto;
      }

      setStatus("success");
      setFields({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 3200);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email directly.",
      );
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            className="flex min-h-[320px] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
          >
            <motion.div
              initial={{ scale: reduceMotion ? 1 : 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <CheckCircle2 className="size-14 text-success" aria-hidden />
            </motion.div>
            <h3 className="mt-5 text-2xl font-semibold">Message sent.</h3>
            <p className="mt-2 max-w-md text-text-secondary">
              Thanks for reaching out. I will get back to you soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <fieldset disabled={status === "loading"} className="space-y-4 border-0 p-0">
              <FloatingField
                id="contact-name"
                label="Name"
                value={fields.name}
                onChange={(name) => setFields((current) => ({ ...current, name }))}
              />
              <FloatingField
                id="contact-email"
                label="Email"
                type="email"
                value={fields.email}
                onChange={(email) => setFields((current) => ({ ...current, email }))}
              />
              <FloatingField
                id="contact-message"
                label="Message"
                value={fields.message}
                onChange={(message) => setFields((current) => ({ ...current, message }))}
                multiline
              />
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
                  <AlertCircle className="size-4 shrink-0" aria-hidden />
                  {errorMessage}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                loading={status === "loading"}
                disabled={status === "loading"}
                icon={Send}
                data-cursor-hover
              >
                Send message
              </Button>
            </fieldset>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
