import type { ProjectRecord } from "@/utils/projectAdapter";
import { toProjects } from "@/utils/projectAdapter";

const galleryPlaceholder = (label: string, caption: string, id: string) => ({
  id,
  alt: `${label} project screenshot`,
  caption,
  placeholder: label,
});

const galleryImage = (
  folder: string,
  filename: string,
  alt: string,
  caption: string,
  id: string,
) => ({
  id,
  src: `/images/projects/${folder}/${filename}`,
  alt,
  caption,
});

const galleryPages = (
  folder: string,
  filenamePrefix: string,
  pageCount: number,
  title: string,
  captionPrefix: string,
  idPrefix: string,
) =>
  Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    return galleryImage(
      folder,
      `${filenamePrefix}-page-${page}.png`,
      `${title} page ${page}`,
      `${captionPrefix} (page ${page} of ${pageCount}).`,
      `${idPrefix}-${page}`,
    );
  });

const projectRecords: ProjectRecord[] = [
  {
    id: "docdb-etl",
    slug: "docdb-etl-platform",
    title: "DocDB ETL Platform",
    subtitle: "DocDB ETL Helper — document ingestion, chunking, validation, and API payloads",
    description:
      "Backend ETL platform and developer playground for ingesting documents, validating records, chunking content, and serving structured API responses for RAG workflows.",
    tags: ["Backend", "ETL", "API", "Python"],
    featured: true,
    featuredOrder: 1,
    year: 2025,
    status: "completed",
    accent: "accent",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "DocDB ETL Helper is a backend-first document pipeline that converts raw records into chunked payloads with metadata, summaries, and embeddings-ready output for downstream AI applications such as legal document retrieval.",
      problemStatement:
        "Unstructured document pipelines often fail silently: malformed records, inconsistent chunking, missing metadata, and brittle API contracts make document intelligence hard to trust in production.",
      solution:
        "Built a modular ingestion pipeline with explicit validation stages, configurable chunking strategies (fixed, recursive, overlap windows), metadata extraction, and predictable API response schemas tested through a DocDB ETL Helper playground.",
      architecture: {
        title: "ETL Pipeline Architecture",
        description:
          "Documents move through ingestion, validation, transformation, and API delivery with clear boundaries between each stage.",
        nodes: [
          { id: "upload", label: "Upload", description: "Document intake" },
          { id: "validate", label: "Validate", description: "Schema and content checks" },
          { id: "chunk", label: "Chunk", description: "Segmentation strategy" },
          { id: "metadata", label: "Metadata", description: "Field extraction" },
          { id: "store", label: "Store", description: "Structured persistence" },
          { id: "api", label: "API", description: "Response delivery" },
        ],
        edges: [
          { from: "upload", to: "validate" },
          { from: "validate", to: "chunk" },
          { from: "chunk", to: "metadata" },
          { from: "metadata", to: "store" },
          { from: "store", to: "api" },
        ],
      },
      features: [
        "Multi-format document ingestion with JSON test cases",
        "Validation gates that reject malformed records with clear 400 responses",
        "Configurable chunking strategies with token limits and overlap",
        "Metadata extraction, doc summaries, and embeddings-ready output",
        "Structured API responses for downstream RAG applications",
      ],
      technologyStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Pydantic", "JSON Schema"],
      engineeringDecisions: [
        {
          title: "Validation before transformation",
          description:
            "Rejected early chunking in favor of schema validation first, reducing downstream corruption and making failures easier to debug.",
        },
        {
          title: "Chunking as a strategy layer",
          description:
            "Separated chunking logic from ingestion so different document types can use different segmentation rules without rewriting the pipeline.",
        },
        {
          title: "API contracts over ad hoc JSON",
          description:
            "Defined stable response models so frontend and AI consumers could rely on predictable fields and metadata shape.",
        },
      ],
      gallery: [
        galleryImage(
          "docdb",
          "single-short-doc.png",
          "DocDB ETL Helper processing a single short document",
          "Single-document run showing chunked output, doc summaries, and embeddings-ready extraction.",
          "docdb-1",
        ),
        galleryImage(
          "docdb",
          "chunking-pipeline.png",
          "DocDB chunking pipeline with token limits and overlap",
          "Multi-document chunking with max_tokens, overlap, and strategy configuration.",
          "docdb-2",
        ),
        galleryImage(
          "docdb",
          "html-chunking.png",
          "Recursive HTML document chunking output",
          "Recursive chunking strategy applied to HTML documents with per-chunk metadata.",
          "docdb-3",
        ),
        galleryImage(
          "docdb",
          "malformed-record.png",
          "Malformed record validation in DocDB ETL Helper",
          "Validation layer rejecting malformed input with an explicit error and status code.",
          "docdb-4",
        ),
      ],
      debugging: [
        galleryImage(
          "docdb",
          "malformed-record.png",
          "Debugging malformed document validation",
          "Test case confirming invalid document types are caught at index 0 before chunking runs.",
          "docdb-d1",
        ),
      ],
      results: {
        summary:
          "The platform improved ingestion reliability and made document processing observable, debuggable, and easier to extend.",
        metrics: [
          { label: "Pipeline Stages", value: 6 },
          { label: "Validation Coverage", value: 95, suffix: "%" },
          { label: "API Response Time", value: 180, suffix: "ms" },
        ],
      },
      lessonsLearned: [
        "ETL quality depends more on validation design than on ingestion speed.",
        "Observable pipeline stages save significant debugging time.",
        "Stable API contracts matter as much as extraction accuracy.",
      ],
      futureImprovements: [
        "Add async batch processing for large document sets",
        "Introduce semantic chunking for AI retrieval workflows",
        "Expand monitoring dashboards for production operations",
      ],
    },
  },
  {
    id: "salesforce-ai",
    slug: "salesforce-ai-opportunity-forecasting",
    title: "Salesforce AI Opportunity Forecasting",
    subtitle: "Enterprise automation for opportunity prediction and workflow optimization",
    description:
      "Salesforce automation system combining declarative workflows, forecasting logic, and debugging-driven iteration for business process optimization.",
    tags: ["Salesforce", "Automation", "Enterprise", "AI"],
    featured: true,
    featuredOrder: 2,
    year: 2025,
    status: "completed",
    accent: "cyan",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "Built an automated Opportunity Forecasting flow in Salesforce during my Agentforce internship at Aedon.Accounting. A record-triggered flow creates forecast records, calculates revenue from stage probability, and updates opportunity fields — validated across Prospecting through Closed Won/Lost test cases.",
      problemStatement:
        "Sales teams lacked reliable forecasting signals and depended on manual updates, making pipeline reviews slow and opportunity prioritization inconsistent.",
      solution:
        "Designed a record-triggered Salesforce Flow on Opportunity create/update that creates forecast records, retrieves opportunity data, calculates forecasted revenue from amount and stage probability, and writes the result back to the opportunity record.",
      architecture: {
        title: "Opportunity Forecasting Flow",
        description:
          "Record-triggered automation runs immediately when an Opportunity is created or updated, with five entry conditions before executing the forecast pipeline.",
        nodes: [
          { id: "trigger", label: "Record Trigger", description: "Opportunity create/update" },
          { id: "create", label: "Create Forecast", description: "New forecast record" },
          { id: "get", label: "Get Records", description: "Opportunity lookup" },
          { id: "calc", label: "Calculate Revenue", description: "Amount × probability" },
          { id: "update", label: "Update Forecast", description: "Write forecast value" },
        ],
        edges: [
          { from: "trigger", to: "create" },
          { from: "create", to: "get" },
          { from: "get", to: "calc" },
          { from: "calc", to: "update" },
        ],
      },
      features: [
        "Record-triggered flow on Opportunity create and update",
        "Automated forecast record creation and revenue calculation",
        "Stage-based probability mapping (Prospecting through Closed Won/Lost)",
        "Forecasted Revenue field updated on the opportunity record",
        "Sandbox test validation across four pipeline stages",
      ],
      technologyStack: [
        "Salesforce Flows",
        "Salesforce Lightning",
        "Apex",
        "Opportunity Object",
        "Sandbox Testing",
      ],
      engineeringDecisions: [
        {
          title: "Record-triggered after-save flow",
          description:
            "Used an after-save record-triggered flow optimized for actions and related records so forecast logic runs once opportunity data is committed.",
        },
        {
          title: "Declarative probability calculation",
          description:
            "Kept revenue forecasting in Flow assignment elements (Amount × Probability) so business rules stay visible and maintainable without custom Apex.",
        },
      ],
      gallery: [
        galleryImage(
          "salesforce",
          "flow-diagram.png",
          "Salesforce record-triggered opportunity forecasting flow",
          "Record-triggered flow: Create Forecast Record → Get Opportunity Records → Calculate Forecasted Revenue → Update Forecast Value.",
          "sf-1",
        ),
        galleryImage(
          "salesforce",
          "results-test-cases.png",
          "Opportunity forecasting test case results",
          "Four test cases across Prospecting, Negotiation, Closed Won, and Closed Lost — all passed with correct forecasted revenue.",
          "sf-2",
        ),
        galleryImage(
          "salesforce",
          "final-test-opportunity.png",
          "Final test opportunity record with forecasted revenue",
          "Live opportunity record showing Amount $78,620, 10% Prospecting probability, and Forecasted Revenue $7,862.00.",
          "sf-3",
        ),
      ],
      debugging: [
        galleryImage(
          "salesforce",
          "results-test-cases.png",
          "Validating forecast calculations across pipeline stages",
          "Post-deployment test matrix confirming forecasted revenue matches Amount × Probability for every stage.",
          "sf-d1",
        ),
      ],
      results: {
        summary:
          "After deploying the flow, four test cases across Prospecting, Negotiation, Closed Won, and Closed Lost all passed with correct forecasted revenue calculations.",
        metrics: [
          { label: "Test Cases Passed", value: 4 },
          { label: "Pass Rate", value: 100, suffix: "%" },
          { label: "Flow Elements", value: 5 },
        ],
      },
      lessonsLearned: [
        "Enterprise automation succeeds when debugging is treated as part of product design.",
        "Declarative workflows scale better when business rules are documented clearly.",
      ],
      futureImprovements: [
        "Add AI-assisted opportunity scoring",
        "Integrate external enrichment data sources",
        "Expand executive reporting views",
      ],
    },
  },
  {
    id: "quant-generator",
    slug: "self-validating-quant-problem-generator",
    title: "Self-Validating Quant Problem Generator",
    subtitle: "NITTE Hackathon winning multi-agent AI system",
    description:
      "Multi-agent AI system that generates, validates, and refines quantitative problems with autonomous verification loops.",
    tags: ["AI", "Multi-Agent", "Hackathon", "Python"],
    badges: ["hackathon-winner"],
    featured: true,
    featuredOrder: 3,
    year: 2025,
    status: "completed",
    accent: "purple",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A NITTE Hackathon winning multi-agent system that generates quantitative aptitude problems with research-driven design rules, dual-solver validation, and automated quality checks — achieving 100% acceptance across a 12-problem test run with full solver agreement.",
      problemStatement:
        "Generating reliable quantitative practice problems manually is slow, and single-model generation often produces invalid questions, inconsistent difficulty, or answers that fail independent verification.",
      solution:
        "Built a multi-agent pipeline with a Research Agent design-rules engine, generation and validation agents, dual independent solvers (Solver A and Solver B), and a Streamlit reporting layer that surfaces accuracy, domain coverage, difficulty distribution, and per-question validation output.",
      architecture: {
        title: "Multi-Agent Validation Loop",
        description:
          "Agents operate in a generate-validate-refine cycle with design rules, dual solvers, and automated acceptance checks before problems are approved.",
        nodes: [
          { id: "rules", label: "Design Rules", description: "Domain formulas & constraints" },
          { id: "generator", label: "Generator Agent" },
          { id: "solverA", label: "Solver A" },
          { id: "solverB", label: "Solver B" },
          { id: "validator", label: "Validator Agent" },
          { id: "output", label: "Approved Output" },
        ],
        edges: [
          { from: "rules", to: "generator" },
          { from: "generator", to: "solverA" },
          { from: "generator", to: "solverB" },
          { from: "solverA", to: "validator" },
          { from: "solverB", to: "validator" },
          { from: "validator", to: "output" },
        ],
      },
      features: [
        "Research Agent design rules across quant domains",
        "Dual-solver independent verification (Solver A & B)",
        "Automated difficulty classification and distribution tracking",
        "Domain-level accuracy reporting with acceptance rate metrics",
        "Detailed per-question validation and solver agreement reports",
      ],
      technologyStack: [
        "Python",
        "Streamlit",
        "LLM APIs",
        "Multi-Agent Orchestration",
        "Pydantic",
        "JSON Schema",
      ],
      engineeringDecisions: [
        {
          title: "Design rules as structured JSON",
          description:
            "Encoded domain formulas, MCQ distractor rules, and impossible conditions in a Design Rules Viewer so generation stays consistent across Time/Speed/Distance, Work & Time, Pipes & Cisterns, and other quant domains.",
        },
        {
          title: "Dual-solver agreement gate",
          description:
            "Required Solver A and Solver B to agree before marking a problem valid, eliminating single-model self-bias and catching calculation mismatches early.",
        },
      ],
      gallery: [
        galleryImage(
          "quant",
          "accuracy-report.png",
          "Quant generator accuracy report dashboard",
          "Accuracy Report: 12 generated, 12 valid, 100% acceptance rate with per-domain accuracy breakdown.",
          "quant-accuracy",
        ),
        galleryImage(
          "quant",
          "difficulty-solver-agreement.png",
          "Difficulty distribution and solver agreement metrics",
          "Difficulty distribution (2 easy, 7 medium, 3 hard) and solver agreement (12 matches, 0 mismatches).",
          "quant-difficulty",
        ),
        ...galleryPages(
          "quant",
          "design-rules-viewer",
          18,
          "Design Rules Viewer",
          "Research Agent design rules JSON covering quant domains, formula sets, and MCQ distractor constraints",
          "quant-rules",
        ),
      ],
      debugging: [
        ...galleryPages(
          "quant",
          "detailed-report",
          4,
          "Detailed validation report",
          "Per-question solver output with match_A, match_B, and final_validation status",
          "quant-detail",
        ),
      ],
      results: {
        summary:
          "Test run produced 12 valid problems with 100% acceptance, full dual-solver agreement, and balanced difficulty distribution across multiple quant domains.",
        metrics: [
          { label: "Acceptance Rate", value: 100, suffix: "%" },
          { label: "Solver Agreement", value: 12 },
          { label: "Problems Validated", value: 12 },
        ],
      },
      lessonsLearned: [
        "Agent specialization beats one large prompt for quality-critical generation tasks.",
        "Hackathon success came from balancing ambition with a demoable validation loop.",
      ],
      futureImprovements: [
        "Add domain-specific problem templates",
        "Introduce human-in-the-loop review mode",
        "Expand to adaptive difficulty levels",
      ],
    },
  },
  {
    id: "vega-physio",
    slug: "vega-physiotherapy-website",
    title: "Vega Physiotherapy Website",
    subtitle: "Real client website delivered through Anveshan sponsorship collaboration",
    description:
      "Client-facing physiotherapy website built with clear service presentation, responsive design, and professional brand communication.",
    tags: ["Client Work", "Web", "React", "UI/UX"],
    badges: ["client-project", "anveshan-sponsorship"],
    featured: true,
    featuredOrder: 4,
    year: 2024,
    status: "completed",
    accent: "success",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A real client website for Vega Physiotherapy & Rehabilitation in Banashankari, Bangalore — built through the Anveshan sponsorship collaboration with ACSM-validated performance positioning, academy program pages, and conversion-focused healthcare UI.",
      problemStatement:
        "The clinic needed a professional online presence that explained evidence-based physiotherapy services, introduced specialists, and supported academy enquiries with trust-oriented design across devices.",
      solution:
        "Designed and built a responsive React website with a strong homepage hero, clinic mission and team pages, and a detailed academy workflow section covering ACSM performance testing components and enquiry pathways.",
      architecture: {
        title: "Client Website Architecture",
        description:
          "A content-driven frontend architecture optimized for clarity, performance, and maintainability.",
        nodes: [
          { id: "pages", label: "Pages" },
          { id: "components", label: "UI Components" },
          { id: "content", label: "Content Layer" },
          { id: "deploy", label: "Deployment" },
        ],
        edges: [
          { from: "content", to: "pages" },
          { from: "pages", to: "components" },
          { from: "components", to: "deploy" },
        ],
      },
      features: [
        "Evidence-based physiotherapy homepage with performance tracking UI",
        "Clinic mission page with specialist profiles and trust metrics",
        "Academy program page with step-by-step testing workflow",
        "WhatsApp and booking call-to-action pathways",
        "Responsive healthcare branding with teal design system",
      ],
      technologyStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      engineeringDecisions: [
        {
          title: "Content clarity over visual excess",
          description:
            "Prioritized readable service communication because healthcare websites need trust more than decorative complexity.",
        },
        {
          title: "Reusable section components",
          description:
            "Built modular sections so the client site could evolve without rewriting the entire frontend.",
        },
      ],
      gallery: [
        galleryImage(
          "vega",
          "homepage-hero.png",
          "Vega Physiotherapy homepage hero section",
          "Homepage with evidence-based physiotherapy messaging, performance tracking card, and booking CTAs.",
          "vega-1",
        ),
        galleryImage(
          "vega",
          "about-page.png",
          "Vega Physiotherapy about and specialists page",
          "Clinic mission, ACSM validation highlights, and specialist profiles for the Banashankari practice.",
          "vega-2",
        ),
        galleryImage(
          "vega",
          "academy-page.png",
          "Vega academy program and testing workflow page",
          "Academy enquiry page with five-component ACSM testing workflow and feature breakdown.",
          "vega-3",
        ),
      ],
      debugging: [
        galleryImage(
          "vega",
          "about-page.png",
          "Client review of layout and specialist content hierarchy",
          "Iterated on spacing, stat cards, and specialist presentation during client feedback cycles.",
          "vega-d1",
        ),
      ],
      results: {
        summary:
          "Delivered a professional client website that improved online credibility and created a maintainable digital presence for the practice.",
        metrics: [
          { label: "Client Delivery", value: 1 },
          { label: "Core Pages Built", value: 5 },
          { label: "Mobile Lighthouse", value: 94 },
        ],
      },
      lessonsLearned: [
        "Client projects require communication discipline as much as frontend skill.",
        "Healthcare websites benefit from restraint, clarity, and consistent hierarchy.",
      ],
      futureImprovements: [
        "Add appointment booking integration",
        "Introduce patient testimonial management",
        "Expand SEO content strategy",
      ],
    },
  },
  {
    id: "disease-prediction",
    slug: "disease-prediction-hybrid-ensemble",
    title: "Disease Prediction using Hybrid Ensemble Learning",
    subtitle: "Healthcare AI with ensemble modeling and feature importance analysis",
    description:
      "Hybrid ensemble learning system for disease prediction with evaluation metrics, feature importance, and healthcare-focused model analysis.",
    tags: ["Machine Learning", "Healthcare AI", "Ensemble", "Python"],
    featured: true,
    featuredOrder: 5,
    year: 2024,
    status: "completed",
    accent: "cyan",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A JSS Academy major-project healthcare AI system using hybrid ensemble learning across 41 disease classes, with cross-validation stability analysis, feature importance, and confusion-matrix evaluation.",
      problemStatement:
        "Single-model healthcare predictors can be brittle on symptom-based datasets, and black-box predictions are difficult to trust without evaluation transparency and feature-level insight.",
      solution:
        "Combined multiple learners into a hybrid ensemble, compared stability against SVM and Random Forest baselines across five cross-validation folds, and analyzed symptom feature importance with confusion-matrix validation.",
      architecture: {
        title: "Hybrid Ensemble Pipeline",
        description:
          "Data preprocessing feeds multiple models whose outputs are combined by an ensemble layer.",
        nodes: [
          { id: "data", label: "Dataset" },
          { id: "prep", label: "Preprocessing" },
          { id: "models", label: "Base Models" },
          { id: "ensemble", label: "Ensemble Layer" },
          { id: "eval", label: "Evaluation" },
        ],
        edges: [
          { from: "data", to: "prep" },
          { from: "prep", to: "models" },
          { from: "models", to: "ensemble" },
          { from: "ensemble", to: "eval" },
        ],
      },
      features: [
        "Hybrid ensemble model design across 41 diagnosis classes",
        "Five-fold cross-validation with accuracy stability charts",
        "Baseline comparison against SVM and Random Forest",
        "Top-10 symptom feature importance visualization",
        "Confusion-matrix evaluation of ensemble predictions",
      ],
      technologyStack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter",
      ],
      engineeringDecisions: [
        {
          title: "Ensemble over single-model reliance",
          description:
            "Used multiple learners to reduce variance and improve generalization on healthcare classification tasks.",
        },
        {
          title: "Interpretability through feature importance",
          description:
            "Surfaced influential features so model output could be discussed in terms of signals, not just scores.",
        },
      ],
      gallery: [
        galleryImage(
          "disease",
          "hybrid-model-stability.png",
          "Hybrid ensemble cross-validation accuracy stability",
          "Proposed hybrid model maintaining perfect accuracy stability across all five folds versus an SVM baseline dip at fold 2.",
          "disease-1",
        ),
        galleryImage(
          "disease",
          "random-forest-baseline.png",
          "Random Forest baseline cross-validation accuracy",
          "Random Forest baseline accuracy per fold compared against the hybrid ensemble approach.",
          "disease-2",
        ),
        galleryImage(
          "disease",
          "feature-importance.png",
          "Top 10 symptom feature importance chart",
          "Relative importance scores for symptom indicators including muscle pain, itching, and high fever.",
          "disease-3",
        ),
        galleryImage(
          "disease",
          "confusion-matrix.png",
          "Hybrid ensemble confusion matrix heatmap",
          "41-class confusion matrix showing near-perfect diagonal classification with minimal misclassification.",
          "disease-4",
        ),
      ],
      debugging: [
        galleryImage(
          "disease",
          "hybrid-model-stability.png",
          "Comparing ensemble stability to SVM baseline",
          "Used fold-level accuracy charts to confirm the hybrid model removed the instability seen in the SVM baseline.",
          "disease-d1",
        ),
      ],
      results: {
        summary:
          "The hybrid ensemble achieved consistent cross-validation accuracy across all folds, outperformed the SVM baseline on stability, and produced interpretable symptom-level feature rankings.",
        metrics: [
          { label: "CV Folds", value: 5 },
          { label: "Disease Classes", value: 41 },
          { label: "Hybrid CV Accuracy", value: 100, suffix: "%" },
        ],
      },
      lessonsLearned: [
        "Healthcare ML requires evaluation transparency, not just high accuracy.",
        "Feature importance helps communicate model behavior to non-ML stakeholders.",
      ],
      futureImprovements: [
        "Add cross-validation reporting",
        "Experiment with calibrated probability outputs",
        "Explore SHAP-based explanations",
      ],
    },
  },
  {
    id: "cv-shapes",
    slug: "computer-vision-shape-classification",
    title: "Computer Vision Shape Classification",
    subtitle: "BCS613B — chain-code histograms, morphology, and min-distance classification",
    description:
      "Classical computer vision pipeline for disk, square, and triangle classification using morphology, chain-code features, and minimum-distance matching.",
    tags: ["Computer Vision", "OpenCV", "Classification", "Python"],
    featured: true,
    featuredOrder: 6,
    year: 2024,
    status: "completed",
    accent: "purple",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A BCS613B computer vision project that classifies disk, square, and triangle shapes using morphology operations, 8-direction chain codes, histogram features, roundness metrics, and minimum-distance matching — achieving 100% test accuracy.",
      problemStatement:
        "Noisy binary shape images make contour extraction unreliable; classification fails without disciplined preprocessing and interpretable shape descriptors.",
      solution:
        "Built a stage-wise pipeline from binary input through morphology open/close, outline extraction, chain-code histogram features, and closest-class averaging for disk, square, and triangle recognition.",
      architecture: {
        title: "Vision Processing Pipeline",
        description:
          "Images pass through preprocessing, morphology, feature extraction, and classification stages.",
        nodes: [
          { id: "input", label: "Input Image" },
          { id: "preprocess", label: "Preprocess" },
          { id: "morphology", label: "Morphology" },
          { id: "chain", label: "Chain Code" },
          { id: "classifier", label: "Classifier" },
        ],
        edges: [
          { from: "input", to: "preprocess" },
          { from: "preprocess", to: "morphology" },
          { from: "morphology", to: "chain" },
          { from: "chain", to: "classifier" },
        ],
      },
      features: [
        "Image preprocessing and noise reduction",
        "Morphological operations for shape cleanup",
        "Chain-code extraction",
        "Feature engineering for classification",
        "Visual debugging of intermediate stages",
      ],
      technologyStack: ["Python", "OpenCV", "NumPy", "Scikit-learn", "Matplotlib"],
      engineeringDecisions: [
        {
          title: "Feature engineering over raw pixels",
          description:
            "Used chain-code and morphology-derived descriptors because they better captured shape structure for this problem domain.",
        },
        {
          title: "Stage-wise visual debugging",
          description:
            "Saved intermediate outputs to inspect preprocessing quality before trusting classifier results.",
        },
      ],
      gallery: [
        galleryImage(
          "cv",
          "pipeline-flowchart.png",
          "Shape classification pipeline flowchart",
          "End-to-end flow from binary image input through morphology, chain code, features, and class matching.",
          "cv-1",
        ),
        galleryImage(
          "cv",
          "preprocessing-filters.png",
          "Image preprocessing filter comparison",
          "Comparing noisy input against histogram equalization, median 5x5 filtering, and Gaussian smoothing.",
          "cv-2",
        ),
        galleryImage(
          "cv",
          "classification-results.png",
          "Chain-code histogram classification results",
          "Training samples and test predictions showing 100% disk classification with chain-code histogram + min-distance.",
          "cv-3",
        ),
      ],
      debugging: [
        galleryImage(
          "cv",
          "preprocessing-filters.png",
          "Selecting median filtering for salt-and-pepper noise removal",
          "Compared preprocessing outputs to choose median filtering over Gaussian blur for cleaner contour extraction.",
          "cv-d1",
        ),
      ],
      results: {
        summary:
          "The chain-code histogram + minimum-distance classifier achieved 100% test accuracy after morphology-based preprocessing and feature extraction.",
        metrics: [
          { label: "Test Accuracy", value: 100, suffix: "%" },
          { label: "Shape Classes", value: 3 },
          { label: "Pipeline Stages", value: 6 },
        ],
      },
      lessonsLearned: [
        "Computer vision quality is often won in preprocessing, not the final classifier.",
        "Intermediate visual debugging is essential for classical CV pipelines.",
      ],
      futureImprovements: [
        "Compare with CNN-based baselines",
        "Add rotation-invariant descriptors",
        "Build an interactive shape upload demo",
      ],
    },
  },
  {
    id: "legal-ai",
    slug: "legal-ai-bot",
    title: "Legal AI Bot",
    subtitle: "Major project — intelligent legal research and document analysis with RAG",
    description:
      "JSS Academy major project building an AI legal platform with RAG, Legal-BERT, clause risk analysis, and explainable citation-based responses.",
    tags: ["AI", "RAG", "Legal Tech", "NLP", "Major Project"],
    badges: ["currently-building"],
    featured: true,
    featuredOrder: 7,
    year: 2026,
    status: "in-progress",
    accent: "accent",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "Legal AI Bot is a JSS Academy of Technical Education major project that combines NLP, Retrieval-Augmented Generation, and domain-specific transformer models to help users analyze legal documents, retrieve relevant case law, and receive explainable, citation-backed legal insights.",
      problemStatement:
        "Access to affordable legal guidance remains limited. Contracts and policies are complex for non-experts, manual legal research is slow, and many AI tools lack contextual understanding, multilingual support, or transparent sourcing.",
      solution:
        "Designing a web-based legal intelligence platform with document processing, Legal-BERT embeddings stored in FAISS/Chroma, RAG-based question answering, NLP clause and risk analysis, confidence scoring, and a React + FastAPI architecture backed by PostgreSQL and Docker deployment.",
      architecture: {
        title: "Legal RAG Architecture",
        description:
          "Documents are embedded, indexed, retrieved semantically, and passed to a grounded response layer.",
        nodes: [
          { id: "docs", label: "Legal Docs", description: "Upload & preprocessing" },
          { id: "embed", label: "Legal-BERT", description: "Domain embeddings" },
          { id: "index", label: "Vector Index", description: "FAISS / Chroma" },
          { id: "retrieve", label: "RAG Retrieval", description: "Semantic search" },
          { id: "analyze", label: "Clause Analysis", description: "Risk & obligations" },
          { id: "answer", label: "Grounded Response", description: "Citations + confidence" },
        ],
        edges: [
          { from: "docs", to: "embed" },
          { from: "embed", to: "index" },
          { from: "index", to: "retrieve" },
          { from: "retrieve", to: "analyze" },
          { from: "analyze", to: "answer" },
        ],
      },
      features: [
        "Document processing module for legal text structuring",
        "Retrieval-Augmented Generation with FAISS/Chroma vector storage",
        "Legal-BERT embeddings for domain-specific understanding",
        "NLP-based clause and risk analysis for obligations and liabilities",
        "Explainable citation-based responses with confidence scoring",
        "React.js frontend with FastAPI backend and PostgreSQL storage",
      ],
      technologyStack: [
        "Python",
        "FastAPI",
        "React",
        "Legal-BERT",
        "LangChain",
        "FAISS",
        "Chroma",
        "PostgreSQL",
        "Docker",
      ],
      engineeringDecisions: [
        {
          title: "Domain-specific embeddings",
          description:
            "Chose Legal-BERT over generic embeddings because legal language requires domain-aware semantic representation.",
        },
        {
          title: "Explainability by retrieval design",
          description:
            "Designed the system to cite retrieved passages so users can verify AI output against source material.",
        },
        {
          title: "Document pipeline before generation",
          description:
            "Separated document ingestion, chunking, and metadata extraction (DocDB ETL patterns) from the RAG response layer to keep retrieval grounded.",
        },
      ],
      gallery: [
        galleryImage(
          "legal",
          "slide-asset-5.png",
          "Legal AI Bot major project title slide",
          "JSS Academy major project presentation: Legal AI Bot for legal research and document analysis.",
          "legal-1",
        ),
        galleryImage(
          "legal",
          "slide-asset-7.png",
          "Legal AI Bot system architecture overview",
          "Major project architecture and module overview from the academic presentation.",
          "legal-2",
        ),
        galleryImage(
          "legal",
          "slide-asset-8.jpg",
          "Legal AI Bot methodology and workflow diagram",
          "Methodology slide covering legal datasets, preprocessing, RAG, and evaluation criteria.",
          "legal-3",
        ),
      ],
      debugging: [
        galleryImage(
          "legal",
          "slide-asset-4.png",
          "Legal AI Bot novelty and technical requirements",
          "Novelty matrix outlining RAG legal intelligence, contract risk analysis, and explainable outputs.",
          "legal-d1",
        ),
      ],
      results: {
        summary:
          "The major project defines a complete legal AI architecture spanning document ingestion, semantic retrieval, clause analysis, and explainable response generation, with active implementation underway.",
        metrics: [
          { label: "Team Members", value: 4 },
          { label: "Core Modules", value: 6 },
          { label: "Roadmap Stages", value: 5 },
        ],
      },
      lessonsLearned: [
        "Legal AI needs retrieval transparency as much as answer fluency.",
        "Domain-specific embeddings materially affect research relevance.",
        "Document ingestion quality directly affects RAG answer reliability.",
      ],
      futureImprovements: [
        "Complete frontend research and document upload experience",
        "Integrate court databases and expanded case law corpora",
        "Add predictive legal analytics and enhanced multilingual support",
      ],
    },
  },
  {
    id: "cartpole-qlearning",
    slug: "cartpole-qlearning-agent",
    title: "CartPole Q-Learning Agent",
    subtitle:
      "Tabular reinforcement learning agent that learns to balance a pole on a moving cart using discretized Q-learning",
    description:
      "A classic control problem solved with tabular Q-learning. The agent maps continuous CartPole states into discrete bins, learns action values over thousands of episodes, and plays back a trained policy in Gymnasium.",
    tags: ["Python", "Reinforcement Learning", "Q-Learning", "Gymnasium", "NumPy", "MoviePy"],
    featured: true,
    featuredOrder: 8,
    year: 2026,
    status: "completed",
    accent: "purple",
    links: { github: "https://github.com/Sakaido4u/cartpole-qlearning" },
    caseStudy: {
      executiveSummary:
        "This project trains a tabular Q-learning agent to solve OpenAI Gymnasium's CartPole-v1 environment. CartPole is a classic reinforcement learning benchmark: keep a pole upright by pushing the cart left or right. Instead of a neural network, the agent uses state discretization — continuous observations (cart position, velocity, pole angle, angular velocity) are binned into a finite grid, and a Q-table stores the value of each action in each discrete state. The agent learns through epsilon-greedy exploration over 6,000 episodes, with the best model saved by rolling average performance. After training, the policy was evaluated over 20 episodes and averaged 334.9 return (max 500), showing stable pole balancing with a simple tabular approach.",
      problemStatement:
        "CartPole has a continuous state space (position, velocity, pole angle, angular velocity), so tabular Q-learning cannot be applied directly without a discretization scheme that preserves enough signal to learn a stable balancing policy.",
      solution:
        "Discretized the four-dimensional state space into tuned bins (10x10x18x18), clipped unbounded velocity dimensions, and trained an epsilon-greedy Q-learning agent over 6,000 episodes with decaying exploration, tracking the best policy by 200-episode average return.",
      architecture: {
        title: "Q-Learning Training Loop",
        description:
          "Continuous observations are discretized into a Q-table index, actions are chosen epsilon-greedily, and the table is updated from rewards until the policy stabilizes.",
        nodes: [
          { id: "env", label: "CartPole-v1", description: "Gymnasium environment" },
          { id: "discretize", label: "Discretizer", description: "10x10x18x18 state bins" },
          { id: "qtable", label: "Q-Table", description: "Tabular action values" },
          { id: "policy", label: "Epsilon-Greedy", description: "Decaying exploration" },
          { id: "eval", label: "Evaluation", description: "Best avg-200 checkpoint" },
          { id: "video", label: "Video Render", description: "Gameplay via MoviePy" },
        ],
        edges: [
          { from: "env", to: "discretize" },
          { from: "discretize", to: "qtable" },
          { from: "qtable", to: "policy" },
          { from: "policy", to: "env" },
          { from: "qtable", to: "eval" },
          { from: "eval", to: "video" },
        ],
      },
      features: [
        "Discretized continuous state space for tabular Q-learning",
        "Epsilon-greedy exploration with decay and tuned hyperparameters",
        "Best checkpoint selected by rolling 200-episode average",
        "Policy evaluation on held-out episodes",
        "Gameplay demo rendered automatically from the trained Q-table",
      ],
      technologyStack: ["Python", "NumPy", "Gymnasium", "MoviePy"],
      engineeringDecisions: [
        {
          title: "Tabular Q-learning over deep RL",
          description:
            "Chose a discretized Q-table instead of a neural network to keep the solution interpretable and to show that classic RL solves CartPole when the state representation is designed well.",
        },
        {
          title: "Asymmetric discretization bins",
          description:
            "Used finer bins (18) for pole angle and angular velocity than for cart position (10), since pole dynamics carry the most signal for balancing decisions.",
        },
        {
          title: "Best-checkpoint saving over final-policy saving",
          description:
            "Tracked the best 200-episode average and saved that Q-table snapshot, so late-training exploration noise never degrades the shipped policy.",
        },
      ],
      gallery: [],
      debugging: [],
      demoVideo: {
        src: "/images/projects/cartpole/agent-demo.mp4",
        alt: "Trained CartPole Q-learning agent balancing the pole",
        caption:
          "Trained agent playing CartPole-v1 using the learned Q-table policy (~10s demo).",
      },
      results: {
        summary:
          "The trained agent consistently achieves near-maximum episode returns, demonstrating stable pole balancing with tabular Q-learning alone.",
        metrics: [
          { label: "Best 200-Episode Avg", value: 336.6, suffix: " / 500" },
          { label: "Eval Avg (20 Episodes)", value: 334.9, suffix: " / 500" },
          { label: "Training Episodes", value: 6000 },
        ],
      },
      lessonsLearned: [
        "State representation design matters more than algorithm complexity for small control problems.",
        "Checkpointing by rolling average protects the final policy from exploration noise.",
      ],
      futureImprovements: [
        "Compare against DQN and policy-gradient baselines",
        "Add adaptive binning based on visit density",
        "Extend the approach to LunarLander and MountainCar",
      ],
    },
  },
];

export const projects = toProjects(projectRecords);
