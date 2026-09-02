export interface Paper {
  slug: string;
  title: string;
  venue: string;
  status: "Published" | "Accepted" | "Under Review" | "Submitted";
  authorPosition: string;
  year: string;
  domain: string;
  description: string;
  tags: string[];
  doi?: string;
  award?: string;
  coverImage?: string;
}

export const papers: Paper[] = [
  {
    slug: "spectral-separable-self-attention-eeg",
    title: "Spectral-Separable Self-Attention for EEG Decoding",
    venue: "28th International DSPA Conference, Russia (IEEE)",
    status: "Published",
    authorPosition: "First author",
    year: "2026",
    domain: "EEG Signal Processing",
    description:
      "Splits the EEG signal into learnable frequency bands in the Fourier domain and attends within each band separately, removing almost all of the attention cost of a standard transformer at 32K parameters. Works from three electrodes across three motor-imagery datasets, and the learned bands settle onto the mu, beta, and gamma motor rhythms without being told to.",
    tags: ["Transformers", "Attention Mechanism", "EEG", "Efficiency"],
    doi: "https://doi.org/10.1109/DSPA69176.2026.11476789",
    award: "Best Paper Award",
    coverImage: "/research-works/s3a_mechanism.pdf",
  },
  {
    slug: "contrastive-pretraining-eeg",
    title: "Contrastive pretraining across EEG datasets, and why it failed",
    venue: "IEEE Transactions on Biomedical Engineering (TBME)",
    status: "Under Review",
    authorPosition: "First and corresponding author",
    year: "2026",
    domain: "EEG Signal Processing",
    description:
      "A large apparent gain from pretraining on five datasets disappeared under a matched control — the datasets were still separable by recording site after alignment, meaning the model had learned which laboratory the data came from rather than anything about the signal. Fixed with a label-free alignment step that adds no parameters and no inference cost, taking held-out accuracy from 67% to 75%. Moving augmentation onto the GPU cut a pretraining run from around twenty hours to five.",
    tags: ["Contrastive Learning", "EEG", "Domain Adaptation", "Negative Result"],
  },
  {
    slug: "region-quality-attention-nsfw",
    title: "Region-quality attention for lightweight NSFW detection",
    venue: "IEEE Transactions on Multimedia (TMM)",
    status: "Under Review",
    authorPosition: "First author",
    year: "2026",
    domain: "Computer Vision",
    description:
      "Feeds region quality into the attention gate rather than into the loss alone, so a 2.6M-parameter model scores above ViT and ConvNeXt baselines more than ten times its size. An audit of the benchmark found most evaluation positives duplicated from training images, and the two classes separable from file metadata alone — every result was re-measured on a clean, rebuilt split.",
    tags: ["Attention Mechanism", "Model Compression", "Content Moderation", "Benchmark Auditing"],
  },
  {
    slug: "diversity-aware-electrode-selection-eeg",
    title: "Diversity-aware electrode selection for EEG",
    venue: "Journal of Neuroscience Methods",
    status: "Under Review",
    authorPosition: "First and corresponding author",
    year: "2026",
    domain: "EEG Signal Processing",
    description:
      "Picks electrodes for complementary coverage rather than individual strength, keeping six of sixty-four without losing accuracy. Brings the model to a fifth of its parameters and inference to five milliseconds; the one comparison that did not reach statistical significance is reported as such.",
    tags: ["Electrode Selection", "EEG", "Model Compression", "Statistical Rigor"],
  },
  {
    slug: "learned-electrode-gating-gcn",
    title: "Learned electrode gating in a graph convolutional network",
    venue: "Journal of the Franklin Institute",
    status: "Under Review",
    authorPosition: "First and corresponding author",
    year: "2026",
    domain: "EEG Signal Processing",
    description:
      "Learns which electrodes matter during training instead of searching subsets afterwards, over a learned adjacency rather than one built from electrode distances. Drops 84% of electrodes with no measurable accuracy cost, and beats two competing selection strategies at the same reduction.",
    tags: ["Graph Neural Networks", "EEG", "Electrode Selection", "Deep Learning"],
    coverImage: "/research-works/GCN_Gating_mechanism.png",
  },
  {
    slug: "focal-cortical-dysplasia-benchmark",
    title: "Focal cortical dysplasia: a controlled benchmark and a false-positive stage",
    venue: "Biomedical Signal Processing and Control (BSPC)",
    status: "Under Review",
    authorPosition: "Third author",
    year: "2026",
    domain: "Medical Imaging",
    description:
      "Four volumetric segmentation networks performed the same under one leakage-free protocol, pointing to specificity rather than architecture as the limit at this data scale. A light re-scoring stage that attaches to any detector removed most false alarms while keeping nearly all lesions, bringing the burden from about seven per patient to under three.",
    tags: ["Medical Imaging", "Segmentation", "Benchmark Auditing"],
  },
  {
    slug: "inceptionwavenet-seizure-detection",
    title: "InceptionWaveNet for epileptic seizure detection",
    venue: "ICMVAI 2026 (Springer LNEE)",
    status: "Accepted",
    authorPosition: "Second and corresponding author",
    year: "2026",
    domain: "EEG Signal Processing",
    description:
      "Replaces a fixed convolution block in EEGWaveNet with parallel branches and channel attention, improving cross-patient seizure detection by eight points and holding up on an unseen cohort at 103K parameters.",
    tags: ["CNN", "Seizure Detection", "EEG", "Cross-Patient Generalisation"],
  },
  {
    slug: "remaining-useful-life-prediction",
    title: "Deep learning gradient boosting for remaining useful life prediction",
    venue: "MECO 2026",
    status: "Accepted",
    authorPosition: "Second author",
    year: "2026",
    domain: "Predictive Maintenance",
    description:
      "Four heterogeneous base learners corrected in sequence and combined through a stacking meta-learner on out-of-fold predictions, reaching an RMSE of 13.64 on the NASA C-MAPSS benchmark.",
    tags: ["Gradient Boosting", "Stacking", "Predictive Maintenance"],
  },
  {
    slug: "hierarchical-multiscale-fusion-remote-sensing",
    title: "Hierarchical multi-scale fusion for remote sensing scene classification",
    venue: "ICVGIP",
    status: "Submitted",
    authorPosition: "Third author",
    year: "2026",
    domain: "Remote Sensing",
    description:
      "A top-down pathway spreads high-level meaning across every resolution of one backbone, and a small head fuses three pyramid levels into a single descriptor — multi-scale reasoning without an image pyramid or parallel streams. Improves on single-scale baselines across three backbones on AID and NWPU-RESISC45, with activation maps confirming that coarse and fine levels attend to different things.",
    tags: ["Feature Pyramid Networks", "Remote Sensing", "Scene Classification"],
  },
];

export function getPaper(slug: string) {
  return papers.find((p) => p.slug === slug);
}
