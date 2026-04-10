window.siteData = {
  name: "Annicet Razafindratovolahy",
  role: "Researcher in Computer Vision and Robust Visual Modeling",
  institution: "University of Electronic Science and Technology of China",
  location: "Chengdu, China",
  email: "annicet.razafindratovolahy@std.uestc.edu.cn",
  heroSummary:
    "I work on robust visual modeling under degradation, noise, and distribution shift, with a focus on image enhancement, image restoration, adaptive learning, and trustworthy multimodal systems.",
  intro: [
    "My research focuses on building reliable visual systems when inputs are imperfect, degraded, noisy, or manipulated. I am especially interested in image enhancement and restoration methods that remain stable under real-world conditions rather than only controlled benchmarks.",
    "Across my work, I combine analytical formulations with learning-based methods to improve robustness, controllability, and generalization. This includes low-light image enhancement, exposure-aware learning, efficient model design, and structured approaches to multimodal image editing.",
    "More broadly, I am interested in trustworthy AI, adaptive learning, and multimodal systems that behave predictably under uncertainty and shift."
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  links: [
    { label: "Email", href: "mailto:annicet.razafindratovolahy@std.uestc.edu.cn", primary: true },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    { label: "CV", href: "#", disabled: true }
  ],
  stats: [
    { value: "6+", label: "Papers and manuscripts" },
    { value: "3", label: "Research themes" },
    { value: "4.0/4.0", label: "PhD GPA" },
    { value: "2026", label: "Expected defense" }
  ],
  researchThemes: [
    {
      title: "Reliable image enhancement and restoration",
      text:
        "I develop methods for low-light enhancement and restoration that improve degraded content while preserving reliable visual information, structure, and tonal consistency."
    },
    {
      title: "Adaptive learning under imperfect inputs",
      text:
        "A central goal in my work is to design objectives and formulations that remain effective when images are noisy, ambiguous, shifted, or only weakly supervised."
    },
    {
      title: "Trustworthy and controllable multimodal systems",
      text:
        "Beyond low-level vision, I am interested in structured multimodal systems where image transformation follows explicit intent, planning, and robust control rather than opaque generation alone."
    }
  ],
  publications: [
    {
      slug: "tovo",
      title: "TOVO: Tone-Oriented Vision Optimization for Efficient Low-Light Image Enhancement",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "Signal Processing, 2026",
      summary:
        "A tone-oriented formulation for efficient low-light image enhancement that links perceptual quality with computational practicality.",
      pdf: "papers/TOVO-paper.pdf",
      bibtex:
        "@article{razafindratovolahy2026tovo,\n  title={TOVO: Tone-Oriented Vision Optimization for Efficient Low-Light Image Enhancement},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  journal={Signal Processing},\n  year={2026},\n  doi={10.1016/j.sigpro.2026.110540}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "TOVO studies low-light enhancement through a tone-oriented optimization perspective. The work aims to improve visual quality while remaining computationally practical, reflecting a broader interest in efficient and dependable restoration methods."
        },
        {
          heading: "Contribution",
          body:
            "The paper develops an enhancement formulation that emphasizes tonal behavior rather than only raw brightness gain, helping the method remain more controlled and visually coherent."
        },
        {
          heading: "Context",
          body:
            "This work fits into my larger research direction on robust enhancement methods that balance image quality, stability, and efficiency."
        }
      ]
    },
    {
      slug: "nonlinear-function",
      title: "A Simple Yet Robust Nonlinear Function for Low-Light Image Enhancement",
      authors: "Razafindratovolahy, A., Rao, Y.",
      venue: "IEEE Signal Processing Letters, 2025",
      summary:
        "A compact analytical formulation showing how a carefully designed nonlinear function can provide strong and stable enhancement behavior.",
      pdf: "papers/A_Simple_Yet_Robust_Nonlinear_Function_for_Low-Light_Image_Enhancement_Task.pdf",
      bibtex:
        "@article{razafindratovolahy2025nonlinear,\n  title={A Simple Yet Robust Nonlinear Function for Low-Light Image Enhancement},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo},\n  journal={IEEE Signal Processing Letters},\n  year={2025},\n  doi={10.1109/LSP.2025.3602001}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "This paper asks whether a carefully structured analytical function can deliver robust enhancement without unnecessary complexity. It reflects my interest in combining mathematical formulation with practical visual modeling."
        },
        {
          heading: "Contribution",
          body:
            "The work introduces a simple nonlinear function tailored to low-light enhancement and shows that compact formulations can still achieve dependable performance."
        },
        {
          heading: "Context",
          body:
            "The paper represents a core part of my research style: using explicit structure to improve robustness, efficiency, and interpretability."
        }
      ]
    },
    {
      slug: "smile",
      title: "SMILE: Enhancing Low-Light Images in Lightweight Networks via Exposure-Aware Non-Reference Losses",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "Multimedia Systems, 2026",
      summary:
        "A lightweight low-light enhancement framework driven by exposure-aware non-reference losses for robust learning without heavy supervision.",
      pdf: "papers/s00530-026-02295-w.pdf",
      bibtex:
        "@article{razafindratovolahy2026smile,\n  title={SMILE: Enhancing Low-Light Images in Lightweight Networks via Exposure-Aware Non-Reference Losses},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  journal={Multimedia Systems},\n  year={2026},\n  doi={10.1007/s00530-026-02295-w}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "SMILE explores low-light enhancement with lightweight models and non-reference supervision, aiming to remain practical without sacrificing robustness."
        },
        {
          heading: "Contribution",
          body:
            "The paper introduces exposure-aware non-reference losses that strengthen learning signals in efficient enhancement networks."
        },
        {
          heading: "Context",
          body:
            "This work sits at the intersection of efficiency, robust optimization, and deployment-aware computer vision."
        }
      ]
    },
    {
      slug: "prompt2edit",
      title: "Prompt2Edit: Symbolic Planning for Vision-Language Image Editing",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "IEEE PRAI Conference, 2026",
      summary:
        "A multimodal editing framework that uses symbolic planning to make image edits more structured, interpretable, and controllable.",
      pdf: "papers/prompt2edit-paper.pdf",
      bibtex:
        "@inproceedings{razafindratovolahy2026prompt2edit,\n  title={Prompt2Edit: Symbolic Planning for Vision-Language Image Editing},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  booktitle={IEEE PRAI Conference},\n  year={2026}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "Prompt2Edit extends my research beyond restoration into multimodal editing, with a focus on making transformations interpretable and structured."
        },
        {
          heading: "Contribution",
          body:
            "The work introduces symbolic planning into vision-language image editing so that complex edits can be organized as explicit steps rather than a single opaque generation process."
        },
        {
          heading: "Context",
          body:
            "This direction connects robust vision with trustworthy multimodal systems and controllable image transformation."
        }
      ]
    },
    {
      slug: "daw-fa",
      title: "DAW-FA: Domain-Aware Adaptive Weighting with Fine-Grain Attention for Unsupervised MRI Harmonization",
      authors:
        "Delali Fiasam, L., Rao, Y., Sey, C., Aggrey, S. E. B., Kodjiku, S. L., Agyekum, K. O. B. O., Razafindratovolahy, A., Adjei-Mensah, I., Ukwuoma, C. C., Sam, F.",
      venue: "Journal of King Saud University: Computer and Information Sciences, 2025",
      summary:
        "A contribution to unsupervised MRI harmonization through domain-aware weighting and fine-grain attention under cross-domain variability.",
      pdf: "",
      bibtex:
        "@article{fiasam2025dawfa,\n  title={DAW-FA: Domain-Aware Adaptive Weighting with Fine-Grain Attention for Unsupervised MRI Harmonization},\n  author={Fiasam, L. Delali and Rao, Yunbo and Sey, C. and Aggrey, S. E. B. and Kodjiku, S. L. and Agyekum, K. O. B. O. and Razafindratovolahy, Annicet and Adjei-Mensah, I. and Ukwuoma, C. C. and Sam, F.},\n  journal={Journal of King Saud University: Computer and Information Sciences},\n  year={2025}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "DAW-FA addresses unsupervised MRI harmonization under domain variability, extending my research interests toward robustness in medical imaging."
        },
        {
          heading: "Contribution",
          body:
            "The paper studies domain-aware adaptive weighting and fine-grain attention for stronger harmonization across heterogeneous imaging distributions."
        },
        {
          heading: "Context",
          body:
            "It reflects a broader interest in adaptation under shift, beyond standard image enhancement scenarios."
        }
      ]
    }
  ],
  experience: {
    education: [
      "PhD in Software Engineering, University of Electronic Science and Technology of China, 2021-2026",
      "MSc in Computer Science and Industrial Electronics, Universite d'Antsiranana, 2016-2019",
      "BSc in Computer Science and Industrial Electronics, Universite d'Antsiranana, 2013-2016"
    ],
    research: [
      "PhD researcher in applied computer vision at UESTC, developing region-adaptive methods that enhance degraded content while preserving reliable information.",
      "Designed training objectives and loss functions for spatially targeted learning, lightweight models, and robust behavior across diverse imaging conditions.",
      "Explored control-based modeling strategies for adaptable solutions spanning enhancement, noise handling, medical imaging, remote sensing, and robotics."
    ],
    professional: [
      "Software Engineer at Ambatovy, building real-world data acquisition and tracking systems integrated with enterprise infrastructure.",
      "Software Engineer at Ingenosya, working on secure banking platforms, deployment, and mission-critical production systems.",
      "Software Engineer at Lemurriia, developing high-concurrency services, data pipelines, and secure production systems."
    ],
    leadership: [
      "President of Malagasy Students in China, coordinating a multi-university student community.",
      "Helped secure the release of a significant portion of government student funding allocations for Malagasy students in China.",
      "Honorable Mention in the national competition 'Chinese Digital Development in My Eyes'.",
      "First Place in the UESTC basketball competition."
    ]
  },
  contact:
    "For research conversations, collaborations, invited talks, or academic networking, feel free to get in touch by email.",
  footer: "Annicet Razafindratovolahy"
};
