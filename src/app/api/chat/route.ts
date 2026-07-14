import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    if (!query) {
      return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
    }

    const lowerQuery = query.toLowerCase().trim();
    let answer = "";
    let sources: string[] = [];

    if (lowerQuery === "pricing" || lowerQuery === "price" || lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("budget") || lowerQuery.includes("rate") || lowerQuery.includes("fee")) {
      answer = "Our pricing is structured based on the specific operational pillar:\n\n" +
               "- Outsourcing & Skill Hiring: Fixed monthly or fractional hourly rates based on seniority.\n" +
               "- AI Projects & Data Annotations: Milestone-based pricing after the discovery phase.\n\n" +
               "Please submit an inquiry via our contact form with your budget range so our technical leads can provide a detailed proposal.";
      sources = ["Avora_Commercial_Terms_2026.pdf"];
    } else if (lowerQuery.includes("founder") || lowerQuery.includes("ceo") || lowerQuery.includes("who is")) {
      answer = "Avora Ventures was founded by a team of seasoned technology leaders, including Stanford (MBA + MS Environment & Resources) and IIT Kanpur alumni. The leadership team's professional history includes key engineering and strategic leadership roles at McKinsey & Co., Mitsubishi Heavy Industries, NextEra Energy, and AutoGrid.";
      sources = ["Avora_Capabilities_2026.pdf"];
    } else if (lowerQuery.includes("synthetic") || lowerQuery.includes("data generation") || lowerQuery.includes("rare data") || lowerQuery.includes("privacy data") || lowerQuery.includes("generated data")) {
      answer = "Synthetic data generation turns data scarcity into a strategic capability. We use five core methodologies depending on the data type: rule-based generators for structured patterns, statistical modeling with copulas and Markov chains, ML-based generation using GANs and diffusion models, agent-based simulation for complex emergent behaviour, and hybrid privacy-preserving methods with differential privacy guarantees.\n\n" +
               "The core tension is fidelity versus privacy — higher resemblance to real data can increase memorization risk. We validate on statistical similarity, downstream task performance, and adversarial real-versus-fake testing.\n\n" +
               "In one medical imaging engagement, we scaled a rare disease training library from 87 real cases to 50,000 synthetic volumes, improving diagnostic AUC from 0.72 to 0.91.";
      sources = ["AI_Delivery_Playbook_Stage01.pdf"];
    } else if (lowerQuery.includes("quality") || lowerQuery.includes("qa") || lowerQuery.includes("quality assurance") || lowerQuery.includes("accuracy") || lowerQuery.includes("kappa") || lowerQuery.includes("validation")) {
      answer = "Data quality is measured across eight dimensions: accuracy, completeness, consistency, timeliness, validity, uniqueness, integrity, and inter-annotator agreement. Inconsistent labels do not just add noise — they create dangerous overconfidence when test data shares the same annotation bias as training data.\n\n" +
               "Our QA framework runs statistical tests, downstream task performance checks, expert benchmarking, and formal sign-off against defined quality thresholds. Datasets are versioned like software releases and regenerated when source distributions drift. We target inter-annotator Kappa of 0.91 or above before any dataset is certified.";
      sources = ["AI_Delivery_Playbook_Stage04.pdf"];
    } else if (lowerQuery.includes("case study") || lowerQuery.includes("results") || lowerQuery.includes("proof") || lowerQuery.includes("evidence") || lowerQuery.includes("metrics") || lowerQuery.includes("numbers") || lowerQuery.includes("roi")) {
      answer = "Delivered client outcomes across our practice areas:\n\n" +
               "- Medical AI (Rare Disease): Scaled training library from 87 real cases to 50,000 synthetic volumes. Diagnostic AUC improved from 0.72 to 0.91. Three research groups grew to seventeen in six months.\n" +
               "- AgTech (500 Farms): 800,000 drone images annotated. Field scouting time reduced from 3 hours to 25 minutes. Estimated annual saving of $120,000 per 1,000 acres.\n" +
               "- Pharma (Clinical Trials): 2.1 million pages processed across 35 trials with 47 extracted data points. Entity-level F1 of 0.94 achieved. $8.3 million annual saving delivered.\n" +
               "- Retail (Demand Forecasting): Ensemble model with SHAP-based explainability. 680% ROI at 36 months. Planner productivity increased by 40%.";
      sources = ["AI_Delivery_Playbook_CaseStudies.pdf"];
    } else if (lowerQuery.includes("annotation workflow") || lowerQuery.includes("labeling process") || lowerQuery.includes("how does labeling") || lowerQuery.includes("annotation process") || lowerQuery.includes("how do you label")) {
      answer = "Our annotation workflow runs through five stages:\n\n" +
               "1. Requirement and ontology: Defining exactly what the model must learn and building a consistent classification system before any labeling begins.\n" +
               "2. Guidelines and training: Exhaustive annotator instructions with visual examples, edge-case handling, and quality standards — fully internalised before work starts.\n" +
               "3. Execution with tooling: Modality-specific platforms — CVAT for vision, Prodigy for NLP — with model-assisted pre-labeling reducing total annotation time by up to 60%.\n" +
               "4. QA and refinement: Inter-annotator agreement scoring, senior expert review of low-confidence items, and third-expert adjudication on disagreements.\n" +
               "5. Delivery: Certified dataset with standard metadata, version control, and formal sign-off against quality thresholds.";
      sources = ["AI_Delivery_Playbook_Stage02.pdf"];
    } else if (lowerQuery.includes("service") || lowerQuery.includes("what do you do") || lowerQuery.includes("capability") || lowerQuery.includes("what you offer")) {
      answer = "Avora Ventures provides specialized enterprise infrastructure and talent under four pillars:\n\n" +
               "1. Specialized Outsourcing: Vetted remote senior software engineers and architects.\n" +
               "2. Specialized Skill Hiring: On-demand fractional ML leads, security experts, and data architects.\n" +
               "3. AI Solutions & Automation: Custom end-to-end ML integration (RAG pipelines, custom LLMs).\n" +
               "4. Data Annotation & Labeling: High-fidelity data processing, named entity recognition, and semantic segmentation.";
      sources = ["Avora_Capabilities_2026.pdf"];
    } else if (lowerQuery.includes("outsourcing") || lowerQuery.includes("remote") || lowerQuery.includes("engineer") || lowerQuery.includes("hire developer")) {
      answer = "Our Specialized Outsourcing program gives you direct access to 500+ pre-vetted senior remote software developers and system architects. We handle all recruitment, validation, management, and compliance so you can scale your engineering velocity without overhead. Fixed hiring costs convert to variable operating expense — active placement in under 10 days.";
      sources = ["Avora_Capabilities_2026.pdf"];
    } else if (/\b(ai|ml|rag|llm|automation|machine learning|models|model)\b/i.test(lowerQuery)) {
      answer = "We design, deploy, and scale custom machine learning solutions. We start with the business problem — not a preferred algorithm. From retrieval-augmented generation pipelines to bespoke predictive models, our teams build enterprise infrastructure with SHAP-based explainability, human-in-the-loop design, and full production monitoring from day one.";
      sources = ["ML_Pipeline_Specs.docx"];
    } else if (lowerQuery.includes("data") || lowerQuery.includes("annotation") || lowerQuery.includes("labeling") || lowerQuery.includes("dataset")) {
      answer = "Avora processes high-fidelity labeling workloads at scale. We have labeled over 10M+ data points across specialized domains, including medical imaging, clinical trial document extraction, agricultural stress detection, and custom image segmentation pipelines. Inter-annotator Kappa targets 0.91 or above on every engagement.";
      sources = ["Data_Annotation_Standards.pdf"];
    } else if (lowerQuery.includes("process") || lowerQuery.includes("methodology") || lowerQuery.includes("aim") || lowerQuery.includes("a.i.m.") || lowerQuery.includes("phase")) {
      answer = "Avora operates under the A.I.M. (Discovery, Implementation, Scaling) framework:\n\n" +
               "- Phase 01 (Discovery): Architectural Bottleneck Audits producing a Technical Integration Specification.\n" +
               "- Phase 02 (Implementation): Core systems engineering and pipeline code construction verified via Consensus Logs.\n" +
               "- Phase 03 (Scaling): Direct private cloud deployment, establishing telemetry dashboards and latency drift guards.";
      sources = ["Avora_Capabilities_2026.pdf"];
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("hire") || lowerQuery.includes("call") || lowerQuery.includes("schedule") || lowerQuery.includes("talk") || lowerQuery.includes("email")) {
      answer = "To start a conversation or schedule a strategic call, please fill out the contact form at the bottom of the page, or email us directly at partnerships@avora.io. Our team will get back to you within 24 hours.";
      sources = ["Avora_Capabilities_2026.pdf"];
    } else if (lowerQuery.includes("portfolio") || lowerQuery.includes("project") || lowerQuery.includes("case study") || lowerQuery.includes("nexus") || lowerQuery.includes("work")) {
      answer = "Avora Ventures co-develops next-generation infrastructure. Some of our key projects include:\n\n" +
               "- NexusAI: Generative support routing handling 140k queries/hr.\n" +
               "- HealthSync: Secure HIPAA-compliant medical data warehouse scaling to 85k records/sec.\n" +
               "- NexusBuild: Decentralized CI/CD pipeline executing 12k daily builds.\n\n" +
               "Details can be found in the Avora Ventures Studio section of our homepage.";
      sources = ["Avora_Ventures_Studio_Specs.pdf"];
    } else if (lowerQuery.includes("avora") || lowerQuery.includes("who are you") || lowerQuery.includes("what is avora") || lowerQuery.includes("company")) {
      answer = "Avora Ventures is an institutional Venture Studio & Infrastructure provider. We deliver elite remote engineering talent, custom AI and automation systems, and high-fidelity data operations under one integrated roof.\n\nCould you please clarify if you are interested in software outsourcing, custom AI development, or data annotation services?";
      sources = ["Avora_Capabilities_2026.pdf"];
    } else {
      answer = "Avora Ventures is an institutional Venture Studio & Infrastructure provider. We deliver elite remote engineering talent, custom AI and automation systems, and high-fidelity data operations under one integrated roof.\n\nCould you please clarify if you are interested in software outsourcing, custom AI development, or data annotation services?";
      sources = ["Avora_Capabilities_2026.pdf"];
    }

    return NextResponse.json({ answer, sources });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
