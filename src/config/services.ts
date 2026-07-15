export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  metrics: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "data-generation",
    title: "Data Generation",
    subtitle: "High-fidelity synthetic dataset engineering",
    description: "Engineering synthetic datasets to solve data scarcity, simulate rare edge cases, and enforce privacy controls across vision, language, and structured tabular systems.",
    features: [
      "Rule-based patterns & heuristics",
      "GAN & diffusion architectures",
      "Differential privacy controls",
      "Downstream task validation"
    ],
    metrics: "10x dataset scale expansion",
    icon: "Database"
  },
  {
    id: "data-annotation",
    title: "Data Annotation",
    subtitle: "Structure, ontologies, and consensus design",
    description: "Designing domain-specific guidelines, custom classification ontologies, and double-blind consensus workflows before labeling execution begins.",
    features: [
      "Exhaustive ontology design",
      "Inter-annotator agreement tracking",
      "Gold-standard validation checks",
      "Expert-in-the-loop review"
    ],
    metrics: "Cohen's Kappa > 0.91 target",
    icon: "Tag"
  },
  {
    id: "labeling",
    title: "Labeling",
    subtitle: "Consensus-verified annotation at scale",
    description: "Scaling high-fidelity annotation workloads using model-assisted acceleration, expert workgroups, and multi-pass validation runs.",
    features: [
      "Model-assisted pre-labeling",
      "Modality-optimized tooling",
      "Multi-pass validation runs",
      "Edge-case adjudication"
    ],
    metrics: "60% speed acceleration",
    icon: "Tags"
  },
  {
    id: "auditing",
    title: "Auditing",
    subtitle: "Eight-dimension quality gate verification",
    description: "Measuring dataset quality across accuracy, completeness, consistency, timeliness, and consensus reliability before model training.",
    features: [
      "Multi-stage QA matrix",
      "Statistical drift checks",
      "Discrepancy resolution panels",
      "Downstream validation loops"
    ],
    metrics: "F1 > 0.94 score achieved",
    icon: "ShieldCheck"
  },
  {
    id: "ai-implementation",
    title: "AI Implementation",
    subtitle: "Production-grade ML pipeline construction",
    description: "Engineering production-ready machine learning pipelines, custom RAG integrations, domain-specific models, and explainable systems.",
    features: [
      "End-to-end pipeline coding",
      "SHAP explainability mapping",
      "Real-time drift telemetry",
      "Three-phase A.I.M. framework"
    ],
    metrics: "2 to 6 week MVP cycle",
    icon: "BrainCircuit"
  }
];
