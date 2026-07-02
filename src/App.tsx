import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { EasterEggs } from "@/components/animations/EasterEggs";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { Toast } from "@/components/common/Toast";
import { RootLayout } from "@/components/layout/RootLayout";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SiteAnalytics } from "@/components/seo/SiteAnalytics";
import { PageMotionProvider } from "@/context/PageMotionContext";
import { ToastProvider } from "@/context/ToastContext";
import { HomePage } from "@/pages/HomePage";

const ProjectPage = lazy(() =>
  import("@/pages/ProjectPage").then((module) => ({ default: module.ProjectPage })),
);

export function App() {
  return (
    <PageMotionProvider>
      <ToastProvider>
        <BrowserRouter>
          <SiteAnalytics />
          <LoadingScreen />
          <CustomCursor />
          <EasterEggs />
          <Toast />
          <SmoothScroll>
            <RootLayout>
              <Suspense
                fallback={
                  <div className="flex min-h-[50vh] items-center justify-center">
                    <p className="text-sm text-text-secondary">Loading project…</p>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects/:slug" element={<ProjectPage />} />
                </Routes>
              </Suspense>
            </RootLayout>
          </SmoothScroll>
        </BrowserRouter>
      </ToastProvider>
    </PageMotionProvider>
  );
}
