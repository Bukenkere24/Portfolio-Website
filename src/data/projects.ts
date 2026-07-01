import type { ProjectRecord } from "@/utils/projectAdapter";
import { toProjects } from "@/utils/projectAdapter";

const galleryPlaceholder = (label: string, caption: string, id: string) => ({
  id,
  alt: `${label} project screenshot`,
  caption,
  placeholder: label,
});

const projectRecords: ProjectRecord[] = [
  {
    id: "docdb-etl",
    slug: "docdb-etl-platform",
    title: "DocDB ETL Platform",
    subtitle: "Document ingestion, validation, and metadata extraction pipeline",
    description:
      "Backend ETL platform for ingesting documents, validating structure, chunking content, and serving structured API responses.",
    tags: ["Backend", "ETL", "API", "Python"],
    featured: true,
    featuredOrder: 1,
    year: 2025,
    status: "completed",
    accent: "accent",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "DocDB is a backend-first ETL system designed to ingest heterogeneous documents, validate them reliably, extract metadata, and expose clean API responses for downstream applications.",
      problemStatement:
        "Unstructured document pipelines often fail silently: inconsistent formats, poor chunking, missing metadata, and brittle API contracts make document intelligence hard to trust in production.",
      solution:
        "Built a modular ingestion pipeline with explicit validation stages, configurable chunking, metadata extraction, and predictable API response schemas so consumers receive consistent, queryable document data.",
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
        "Multi-format document ingestion",
        "Validation gates before processing",
        "Configurable chunking strategies",
        "Metadata extraction and normalization",
        "Structured API responses for downstream apps",
      ],
      technologyStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Pydantic"],
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
        galleryPlaceholder("Pipeline Dashboard", "ETL pipeline overview with stage status indicators.", "docdb-1"),
        galleryPlaceholder("Validation Logs", "Validation output showing rejected and accepted document batches.", "docdb-2"),
        galleryPlaceholder("API Response", "Structured API payload with extracted metadata and chunks.", "docdb-3"),
      ],
      debugging: [
        galleryPlaceholder("Chunking Debug", "Debugging inconsistent chunk boundaries across PDF sections.", "docdb-d1"),
        galleryPlaceholder("Metadata Trace", "Tracing missing metadata fields through extraction stages.", "docdb-d2"),
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
        "An enterprise automation project focused on opportunity forecasting inside Salesforce, using declarative workflows and iterative debugging to improve sales process visibility.",
      problemStatement:
        "Sales teams lacked reliable forecasting signals and depended on manual updates, making pipeline reviews slow and opportunity prioritization inconsistent.",
      solution:
        "Designed Salesforce workflows, automation rules, and forecasting logic that surface opportunity health, reduce manual effort, and support better business decisions.",
      architecture: {
        title: "Salesforce Automation Flow",
        description:
          "Opportunity data flows through validation, enrichment, forecasting, and dashboard visibility layers.",
        nodes: [
          { id: "crm", label: "CRM Data", description: "Opportunity records" },
          { id: "rules", label: "Workflow Rules", description: "Declarative automation" },
          { id: "forecast", label: "Forecast Engine", description: "Prediction logic" },
          { id: "alerts", label: "Alerts", description: "Exception handling" },
          { id: "dashboard", label: "Dashboard", description: "Business visibility" },
        ],
        edges: [
          { from: "crm", to: "rules" },
          { from: "rules", to: "forecast" },
          { from: "forecast", to: "alerts" },
          { from: "forecast", to: "dashboard" },
        ],
      },
      features: [
        "Opportunity forecasting automation",
        "Declarative workflow design",
        "Business process optimization",
        "Exception alerts for stale opportunities",
        "Dashboard-ready sales signals",
      ],
      technologyStack: ["Salesforce", "Flows", "Apex", "SOQL", "Dashboards"],
      engineeringDecisions: [
        {
          title: "Declarative-first automation",
          description:
            "Prioritized Salesforce Flows where possible to keep business logic maintainable for non-engineering stakeholders.",
        },
        {
          title: "Debug-driven iteration",
          description:
            "Used sandbox debugging and workflow tracing to refine forecasting behavior instead of deploying opaque logic changes.",
        },
      ],
      gallery: [
        galleryPlaceholder("Opportunity Board", "Forecasting dashboard with opportunity health indicators.", "sf-1"),
        galleryPlaceholder("Workflow Builder", "Declarative automation flow for opportunity updates.", "sf-2"),
      ],
      debugging: [
        galleryPlaceholder("Flow Debugger", "Tracing a failed opportunity state transition in sandbox.", "sf-d1"),
        galleryPlaceholder("Field Mapping", "Resolving inconsistent custom field mappings during rollout.", "sf-d2"),
      ],
      results: {
        summary:
          "Improved forecasting consistency and reduced manual pipeline maintenance for the sales workflow.",
        metrics: [
          { label: "Manual Updates Reduced", value: 40, suffix: "%" },
          { label: "Workflow Automations", value: 12 },
          { label: "Forecast Accuracy Lift", value: 18, suffix: "%" },
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
        "A NITTE Hackathon winning system that uses multiple AI agents to generate quantitative problems, validate them, and iteratively improve output quality.",
      problemStatement:
        "Generating reliable quantitative practice problems manually is slow, and single-model generation often produces invalid or poorly structured questions.",
      solution:
        "Built a multi-agent pipeline where generation, validation, and refinement agents collaborate to produce self-checking problem sets with higher trustworthiness.",
      architecture: {
        title: "Multi-Agent Validation Loop",
        description:
          "Agents operate in a generate-validate-refine cycle until output passes quality checks.",
        nodes: [
          { id: "generator", label: "Generator Agent" },
          { id: "validator", label: "Validator Agent" },
          { id: "refiner", label: "Refiner Agent" },
          { id: "output", label: "Approved Output" },
        ],
        edges: [
          { from: "generator", to: "validator" },
          { from: "validator", to: "refiner" },
          { from: "refiner", to: "generator" },
          { from: "validator", to: "output" },
        ],
      },
      features: [
        "Multi-agent orchestration",
        "Self-validation loops",
        "Quant problem generation",
        "Quality scoring and rejection",
        "Hackathon-ready rapid iteration",
      ],
      technologyStack: ["Python", "LLM APIs", "FastAPI", "Pydantic", "Multi-Agent Orchestration"],
      engineeringDecisions: [
        {
          title: "Validation as a separate agent",
          description:
            "Split generation and validation into distinct roles to reduce model self-bias and improve output reliability.",
        },
        {
          title: "Iterative refinement over one-shot generation",
          description:
            "Chose a loop-based architecture so weak outputs could be corrected instead of discarded entirely.",
        },
      ],
      gallery: [
        galleryPlaceholder("Agent Orchestration", "Multi-agent workflow diagram from the hackathon build.", "quant-1"),
        galleryPlaceholder("Problem Output", "Validated quantitative problem set with quality flags.", "quant-2"),
      ],
      debugging: [
        galleryPlaceholder("Validator Failures", "Inspecting false positives from the validator agent.", "quant-d1"),
      ],
      results: {
        summary:
          "Won 1st place at NITTE Hackathon by combining fast execution with a credible self-validating AI architecture.",
        metrics: [
          { label: "Hackathon Placement", value: 1, suffix: "st" },
          { label: "Validation Pass Rate", value: 87, suffix: "%" },
          { label: "Agents Orchestrated", value: 3 },
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
    links: { live: "https://example.com", github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A real client project for Vega Physiotherapy, delivered through the Anveshan sponsorship collaboration with a focus on trust, clarity, and conversion-friendly web design.",
      problemStatement:
        "The client needed a professional online presence that explained services clearly, built patient trust, and worked reliably across devices.",
      solution:
        "Designed and built a responsive website with structured service pages, strong visual hierarchy, and a polished brand experience suitable for a healthcare client.",
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
        "Responsive service-focused layout",
        "Client branding and trust-oriented design",
        "Contact and appointment pathways",
        "Performance-conscious frontend structure",
        "Delivered as a real client engagement",
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
        galleryPlaceholder("Homepage", "Vega Physiotherapy homepage hero and service overview.", "vega-1"),
        galleryPlaceholder("Services Page", "Structured presentation of physiotherapy services.", "vega-2"),
        galleryPlaceholder("Mobile View", "Responsive layout optimized for patient browsing on mobile.", "vega-3"),
      ],
      debugging: [
        galleryPlaceholder("Layout QA", "Cross-device spacing and typography adjustments during client review.", "vega-d1"),
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
        "A healthcare AI project using hybrid ensemble learning to improve disease prediction while emphasizing interpretability through feature importance and rigorous evaluation.",
      problemStatement:
        "Single-model healthcare predictors can be brittle, and black-box predictions are difficult to trust without evaluation transparency and feature-level insight.",
      solution:
        "Combined multiple models into a hybrid ensemble, evaluated performance with robust metrics, and analyzed feature importance to make predictions more explainable.",
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
        "Hybrid ensemble model design",
        "Evaluation with accuracy, precision, recall, and F1",
        "Feature importance visualization",
        "Healthcare-oriented dataset handling",
        "Model comparison across base learners",
      ],
      technologyStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
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
        galleryPlaceholder("Evaluation Metrics", "Model performance comparison across ensemble configurations.", "disease-1"),
        galleryPlaceholder("Feature Importance", "Visualization of the most influential health indicators.", "disease-2"),
      ],
      debugging: [
        galleryPlaceholder("Class Imbalance", "Adjusting preprocessing after detecting skewed label distribution.", "disease-d1"),
      ],
      results: {
        summary:
          "The ensemble approach outperformed individual models and provided a more defensible healthcare AI analysis workflow.",
        metrics: [
          { label: "Ensemble Accuracy", value: 91, suffix: "%" },
          { label: "F1 Score", value: 0.89 },
          { label: "Base Models Combined", value: 4 },
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
    subtitle: "Preprocessing, morphology, chain-code extraction, and feature engineering",
    description:
      "Computer vision pipeline for shape classification using preprocessing, morphology, chain-code features, and engineered descriptors.",
    tags: ["Computer Vision", "OpenCV", "Classification", "Python"],
    featured: true,
    featuredOrder: 6,
    year: 2024,
    status: "completed",
    accent: "purple",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A classical computer vision project focused on shape classification through careful preprocessing, morphology operations, chain-code extraction, and handcrafted feature engineering.",
      problemStatement:
        "Raw image inputs are noisy and inconsistent; shape classification becomes unreliable without disciplined preprocessing and meaningful feature extraction.",
      solution:
        "Built a CV pipeline that cleans input images, extracts structural shape descriptors, and classifies shapes using engineered features rather than treating pixels alone as sufficient signal.",
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
        galleryPlaceholder("Preprocessing Stages", "Original, thresholded, and cleaned shape masks.", "cv-1"),
        galleryPlaceholder("Chain Code Output", "Extracted contour representation for shape analysis.", "cv-2"),
      ],
      debugging: [
        galleryPlaceholder("Morphology Tuning", "Testing kernel sizes to reduce contour breakage.", "cv-d1"),
      ],
      results: {
        summary:
          "Achieved reliable shape classification by investing in preprocessing quality and interpretable feature design.",
        metrics: [
          { label: "Classification Accuracy", value: 93, suffix: "%" },
          { label: "Shape Classes", value: 6 },
          { label: "Pipeline Stages", value: 5 },
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
    subtitle: "RAG-powered legal research and document intelligence platform",
    description:
      "Currently building an AI legal research platform with RAG, Legal-BERT, semantic retrieval, and explainable AI principles.",
    tags: ["AI", "RAG", "Legal Tech", "NLP"],
    badges: ["currently-building"],
    featured: true,
    featuredOrder: 7,
    year: 2026,
    status: "in-progress",
    accent: "accent",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "An in-progress legal AI platform focused on research acceleration, document intelligence, and explainable retrieval over legal knowledge bases.",
      problemStatement:
        "Legal research is time-consuming and document-heavy, while many AI tools provide answers without transparent sourcing or domain-aware retrieval.",
      solution:
        "Designing a RAG-based system with Legal-BERT embeddings, semantic retrieval, and explainable response generation for legal document workflows.",
      architecture: {
        title: "Legal RAG Architecture",
        description:
          "Documents are embedded, indexed, retrieved semantically, and passed to a grounded response layer.",
        nodes: [
          { id: "docs", label: "Legal Docs" },
          { id: "embed", label: "Legal-BERT" },
          { id: "index", label: "Vector Index" },
          { id: "retrieve", label: "Semantic Retrieval" },
          { id: "answer", label: "Grounded Response" },
        ],
        edges: [
          { from: "docs", to: "embed" },
          { from: "embed", to: "index" },
          { from: "index", to: "retrieve" },
          { from: "retrieve", to: "answer" },
        ],
      },
      features: [
        "Retrieval-augmented generation (RAG)",
        "Legal-BERT semantic embeddings",
        "Explainable source-backed answers",
        "Document intelligence workflows",
        "Roadmap-driven active development",
      ],
      technologyStack: ["Python", "FastAPI", "Legal-BERT", "Vector DB", "React", "RAG"],
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
      ],
      gallery: [
        galleryPlaceholder("Research UI", "Legal research interface with source-backed responses.", "legal-1"),
        galleryPlaceholder("Retrieval View", "Semantic retrieval results with ranked document passages.", "legal-2"),
      ],
      debugging: [
        galleryPlaceholder("Embedding QA", "Testing retrieval quality across legal document clusters.", "legal-d1"),
      ],
      results: {
        summary:
          "The project is actively evolving from research and architecture into backend and frontend implementation.",
        metrics: [
          { label: "Roadmap Stages", value: 5 },
          { label: "Retrieval Prototypes", value: 3 },
          { label: "Architecture Iterations", value: 4 },
        ],
      },
      lessonsLearned: [
        "Legal AI needs retrieval transparency as much as answer fluency.",
        "Domain-specific embeddings materially affect research relevance.",
      ],
      futureImprovements: [
        "Complete frontend research experience",
        "Add citation confidence scoring",
        "Expand document ingestion for case law datasets",
      ],
    },
  },
  {
    id: "stock-predictor",
    slug: "stock-market-trend-predictor",
    title: "Stock Market Trend Predictor",
    subtitle: "Time-series forecasting and trend analysis for market signals",
    description:
      "Machine learning project for stock trend prediction using feature engineering, model evaluation, and time-series analysis.",
    tags: ["Machine Learning", "Time Series", "Finance", "Python"],
    featured: true,
    featuredOrder: 8,
    year: 2024,
    status: "completed",
    accent: "purple",
    links: { github: "https://github.com/" },
    caseStudy: {
      executiveSummary:
        "A machine learning project exploring stock trend prediction through time-series feature engineering, model comparison, and evaluation discipline.",
      problemStatement:
        "Market data is noisy and non-stationary, making naive forecasting models unreliable without careful feature design and evaluation.",
      solution:
        "Built a forecasting workflow that engineers temporal features, compares models, and evaluates predictions with time-aware validation thinking.",
      architecture: {
        title: "Forecasting Workflow",
        description:
          "Market data is transformed into features, fed into models, and evaluated over time-based splits.",
        nodes: [
          { id: "market", label: "Market Data" },
          { id: "features", label: "Feature Engineering" },
          { id: "model", label: "Predictor" },
          { id: "backtest", label: "Backtest" },
        ],
        edges: [
          { from: "market", to: "features" },
          { from: "features", to: "model" },
          { from: "model", to: "backtest" },
        ],
      },
      features: [
        "Time-series feature engineering",
        "Trend prediction models",
        "Backtesting and evaluation",
        "Signal visualization",
        "Comparative model analysis",
      ],
      technologyStack: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib"],
      engineeringDecisions: [
        {
          title: "Time-aware evaluation",
          description:
            "Avoided random splits and emphasized temporal validation because future leakage invalidates financial forecasting experiments.",
        },
      ],
      gallery: [
        galleryPlaceholder("Trend Chart", "Predicted vs actual trend visualization over historical windows.", "stock-1"),
        galleryPlaceholder("Model Comparison", "Performance comparison across forecasting approaches.", "stock-2"),
      ],
      debugging: [
        galleryPlaceholder("Leakage Check", "Verifying that feature windows did not include future data.", "stock-d1"),
      ],
      results: {
        summary:
          "Produced a disciplined forecasting experiment that prioritized evaluation integrity over headline accuracy claims.",
        metrics: [
          { label: "Forecast Horizon", value: 5, suffix: " days" },
          { label: "Models Compared", value: 3 },
          { label: "Backtest Windows", value: 8 },
        ],
      },
      lessonsLearned: [
        "Financial ML projects fail when evaluation design is treated as an afterthought.",
        "Clear visual backtests communicate model behavior better than single accuracy numbers.",
      ],
      futureImprovements: [
        "Add sentiment feature ingestion",
        "Experiment with sequence models",
        "Build an interactive forecasting dashboard",
      ],
    },
  },
];

export const projects = toProjects(projectRecords);
