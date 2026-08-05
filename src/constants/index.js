// Selected research and independent work — real artifacts (papers, sites,
// notebooks), not descriptions of them. The first entry is the loud one on
// the page; the rest are given deliberately less room.
export const research = [
  {
    id: 1,
    weight: "loud",
    title: "Cross-View Topology-Aware Graph Representation Learning",
    shortTitle: "GraphTCL",
    venue: "arXiv:2512.02130 · co-first author",
    description:
      "A dual-view contrastive learning framework that aligns GNN structural embeddings with persistent homology via a cross-view InfoNCE loss for graph classification. State of the art on 6 of 7 TU benchmarks (98.42% on MUTAG, 93.86% on BZR), outperforming GIN, GAT, TopoGCL, and OT-GNN; +3.87% average over GCN across 5 OGB molecular graph benchmarks.",
    tags: ["PyTorch", "Graph Neural Networks", "Contrastive Learning", "Topological Data Analysis"],
    artifact: {
      type: "pdf",
      whatIsIt: "Research Paper",
      src: "/assets/research.pdf",
    },
  },
  {
    id: 2,
    weight: "quiet",
    title: "Attention Collapse in Knowledge Distillation",
    shortTitle: "STRIDE",
    venue: "Georgia Tech, SAIL Lab",
    description:
      "Identified that uniformity-constrained distillation is the only approach that prevents student-GNN attention collapse across ogbn-arxiv, ogbn-products, and ogbn-mag — baseline and column-balance constraints consistently collapse. 32.3x compression with +2.13% accuracy on OGBN-MAG.",
    tags: ["Graph Neural Networks", "Knowledge Distillation", "PyTorch"],
    artifact: {
      type: "link",
      whatIsIt: "SAIL Lab",
      src: "https://sail.coe.gatech.edu/",
      image: "/assets/knowledge-distillation.svg",
    },
  },
  {
    id: 3,
    weight: "quiet",
    title: "NFL Salary Predictor",
    shortTitle: "NFL Salary Predictor",
    venue: "UT Dallas, StARLing Lab",
    description:
      "A random-forest model predicting NFL player salaries from 2,000+ fantasy football records, built with the Statistical AI and Relational Learning Group.",
    tags: ["Jupyter Notebook", "scikit-learn", "Random Forest"],
    artifact: {
      type: "website",
      whatIsIt: "Notebook",
      src: "/assets/NFL_Salary_Predictor.html",
    },
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/16179915356",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/selim-coskunuzer-023ab9270/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/SelimC06",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/selim_c06/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Microsoft",
    job: "Machine Learning Engineer Intern, MS Teams",
    image: "/assets/microsoft.png",
    date: "2026-Present",
    contents: [
      "Build training and evaluation infrastructure for ML models running in MS Teams, at a scale of 300M+ monthly active users.",
      "Develop knowledge graph systems using graph-based ML techniques for the same product.",
    ],
    tags: ["Machine Learning", "Knowledge Graphs", "Production ML"],
    artifact: {
      type: "website",
      whatIsIt: "MS Teams Immersive",
      src: "https://www.microsoft.com/en-us/microsoft-teams/immersive"
    }
  },
  {
    title: "Georgia Tech",
    job: "Machine Learning Researcher",
    image: "/assets/gatech.png",
    date: "2026-Present",
    contents: [
      "Study why student GNNs collapse during knowledge distillation, under Prof. Payman Behnam's lab framework, STRIDE.",
      "Found that uniformity-constrained distillation is the only method that avoids attention collapse across ogbn-arxiv, ogbn-products, and ogbn-mag.",
      "Result: 32.3x compression with +2.13% accuracy on OGBN-MAG.",
    ],
    tags: ["Graph Neural Networks", "Knowledge Distillation", "PyTorch"],
    artifact: {
      type: "link",
      whatIsIt: "SAIL Lab",
      src: "https://sail.coe.gatech.edu/",
      image: "/assets/knowledge-distillation.svg"
    }
  },
  {
    title: "Virginia Tech",
    job: "Machine Learning Researcher",
    image: "/assets/vtech.png",
    date: "2025-2025",
    contents: [
      "Co-first author on GraphTCL (arXiv:2512.02130) — aligns GNN embeddings with persistent homology via a cross-view contrastive loss.",
      "State of the art on 6 of 7 TU benchmarks, including 98.42% on MUTAG; +3.87% average over GCN across 5 OGB benchmarks.",
    ],
    tags: ["PyTorch", "Graph Neural Networks", "Contrastive Learning", "Topological Data Analysis"],
    artifact: {
      type: "pdf",
      whatIsIt: "Research Paper",
      src: "/assets/research.pdf"
    }
  },
  {
    title: "University of Central Florida",
    job: "Machine Learning / Website Intern",
    image: "/assets/ucf.png",
    date: "2023-2024",
    contents: [
      "Developed a graph classification machine learning model leveraging topological data analysis techniques.",
      "Developed educational content and examples for a tutorial website on topological machine learning.",
      "Guided deployment of a website making topological ML resources accessible to researchers.",
    ],
    tags: ["PyTorch", "giotto-TDA", "NetworkX", "TensorFlow"],
    artifact: {
      type: "website",
      whatIsIt: "The Website",
      src: "https://selimc06.github.io/TDA-on-Graphs/Topological-Data-Analysis-Project.html"
    }
  },
  {
    title: "University of Texas Dallas",
    job: "Machine Learning Project",
    image:"/assets/utd.png",
    date: "2022-2023",
    contents: [
      "Collaborated with Ph.D. researchers in the Statistical AI and Relational Learning Group (StARLing Lab).",
      "Led development of a machine learning model predicting NFL player salaries from 2K+ fantasy football records.",
    ],
    tags: ["Jupyter Notebook", "Matplotlib", "scikit-learn", "Random Forest"],
    artifact: {
      type: "website",
      whatIsIt: "Code",
      src: "/assets/NFL_Salary_Predictor.html"
    }
  },
];