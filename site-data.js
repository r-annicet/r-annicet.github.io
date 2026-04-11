window.siteData = {
  name: "Annicet Razafindratovolahy",
  role: "PhD Candidate in Software Engineering",
  institution: "University of Electronic Science and Technology of China",
  institutionUrl: "https://en.uestc.edu.cn/",
  location: "Chengdu, China",
  email: "annicet.razafindratovolahy@std.uestc.edu.cn",
  supervisor: {
    name: "Professor Rao Yunbo",
    href: "http://www.raoyunbo.cn/"
  },
  heroSummary:
    "I work on robust visual modeling for computer vision, with a particular focus on enhancement, restoration, and multimodal visual understanding under challenging real-world conditions.",
  intro: [
    "I am a PhD candidate at the University of Electronic Science and Technology of China, working under the supervision of Professor Rao Yunbo on robust visual modeling under degradation, noise, and distribution shift. My research is motivated by a simple question: how can visual systems remain reliable when real data is imperfect, unstable, or manipulated?",
    "Most of my recent work has focused on image enhancement and restoration, especially low-light vision, exposure-aware learning, lightweight modeling, and controllable formulations that improve degraded content while preserving reliable information. I combine analytical ideas with learning-based methods to improve stability, interpretability, and generalization.",
    "Beyond enhancement, I am broadly interested in computer vision, multimodal systems, image and video analysis, and trustworthy AI. I am especially drawn to problems where robustness, controllability, and real-world deployment constraints matter as much as raw benchmark performance."
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  links: [
    { label: "Email", href: "mailto:annicet.razafindratovolahy@std.uestc.edu.cn", primary: true },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=AYeYpwYAAAAJ&hl=fr" },
    { label: "CV", href: "#", disabled: true }
  ],
  stats: [
    { value: "6+", label: "Papers and manuscripts" },
    { value: "4.0/4.0", label: "PhD GPA" },
    { value: "June 2026", label: "Expected graduation" },
    { value: "UESTC", label: "PhD institution" }
  ],
  focusAreas: [
    "Computer vision",
    "Multimodal systems",
    "Image analysis",
    "Video analysis",
    "Image enhancement",
    "Image restoration",
    "Robust learning",
    "Trustworthy AI"
  ],
  selectedPublications: ["tovo", "nonlinear-function", "smile", "prompt2edit"],
  publications: [
    {
      slug: "tovo",
      title: "TOVO: Tone-Oriented Vision Optimization for Efficient Low-Light Image Enhancement",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "Signal Processing, 2026",
      figure: "assets/figures/tovo-figure.png",
      figureCaption:
        "Conceptual illustration of the TOVO paper: a progression from dark input to tone-guided enhancement with an emphasis on controlled visual correction.",
      summary:
        "A tone-oriented formulation for efficient low-light image enhancement that links perceptual quality with computational practicality.",
      pdf: "papers/TOVO-paper.pdf",
      bibtex:
        "@article{razafindratovolahy2026tovo,\n  title={TOVO: Tone-Oriented Vision Optimization for Efficient Low-Light Image Enhancement},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  journal={Signal Processing},\n  year={2026},\n  doi={10.1016/j.sigpro.2026.110540}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "TOVO explores low-light image enhancement through the lens of tone-oriented optimization. Instead of treating enhancement as a simple increase in brightness, the paper pays attention to how tonal structure should evolve across the image so that the result remains visually balanced and computationally efficient."
        },
        {
          heading: "Key idea",
          body:
            "The central contribution is a formulation that emphasizes tone behavior rather than raw intensity amplification alone. This makes the enhancement process more controlled, helping the model improve dark scenes without drifting too far from visually coherent outputs."
        },
        {
          heading: "Why it matters",
          body:
            "This paper reflects a broader direction in my work: designing enhancement methods that are not only effective on benchmark images, but also stable, efficient, and suitable for realistic deployment settings where computational cost matters."
        }
      ]
    },
    {
      slug: "nonlinear-function",
      title: "A Simple Yet Robust Nonlinear Function for Low-Light Image Enhancement",
      authors: "Razafindratovolahy, A., Rao, Y.",
      venue: "IEEE Signal Processing Letters, 2025",
      figure: "assets/figures/nonlinear-figure.png",
      figureCaption:
        "An abstract view of the paper's central idea: a compact monotonic nonlinear mapping that balances simplicity with stable enhancement behavior.",
      summary:
        "A compact analytical formulation showing how a carefully designed nonlinear function can provide strong and stable enhancement behavior.",
      pdf: "papers/A_Simple_Yet_Robust_Nonlinear_Function_for_Low-Light_Image_Enhancement_Task.pdf",
      bibtex:
        "@article{razafindratovolahy2025nonlinear,\n  title={A Simple Yet Robust Nonlinear Function for Low-Light Image Enhancement},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo},\n  journal={IEEE Signal Processing Letters},\n  year={2025},\n  doi={10.1109/LSP.2025.3602001}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "This paper asks a focused question: how much can a well-designed nonlinear function do on its own for low-light enhancement? Rather than increasing architectural complexity, the work investigates whether a compact analytical formulation can already provide reliable visual improvement."
        },
        {
          heading: "Key idea",
          body:
            "The contribution is a simple yet robust nonlinear mapping tailored to low-light enhancement. The paper shows that carefully structured mathematical design can still produce dependable enhancement behavior without requiring unnecessarily heavy models."
        },
        {
          heading: "Why it matters",
          body:
            "The work represents an important aspect of my research style: using explicit analytical structure to improve robustness, interpretability, and efficiency in vision models."
        }
      ]
    },
    {
      slug: "smile",
      title: "SMILE: Enhancing Low-Light Images in Lightweight Networks via Exposure-Aware Non-Reference Losses",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "Multimedia Systems, 2026",
      figure: "assets/figures/smile-figure.png",
      figureCaption:
        "Illustration of the SMILE framework: lightweight enhancement supported by exposure-aware non-reference losses rather than heavy supervision.",
      summary:
        "A lightweight low-light enhancement framework driven by exposure-aware non-reference losses for robust learning without heavy supervision.",
      pdf: "papers/s00530-026-02295-w.pdf",
      bibtex:
        "@article{razafindratovolahy2026smile,\n  title={SMILE: Enhancing Low-Light Images in Lightweight Networks via Exposure-Aware Non-Reference Losses},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  journal={Multimedia Systems},\n  year={2026},\n  doi={10.1007/s00530-026-02295-w}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "SMILE addresses a practical challenge in low-light vision: how to build lightweight enhancement models that remain effective without relying on expensive supervision. The paper is motivated by the need for methods that are both deployable and visually reliable."
        },
        {
          heading: "Key idea",
          body:
            "The main contribution is a set of exposure-aware non-reference losses that provide stronger learning signals for efficient enhancement networks. This makes it possible to train lightweight systems that still respond well to difficult illumination conditions."
        },
        {
          heading: "Why it matters",
          body:
            "The paper sits at the intersection of efficient model design, practical optimization, and robust computer vision, which is a recurring theme across my research."
        }
      ]
    },
    {
      slug: "prompt2edit",
      title: "Prompt2Edit: Symbolic Planning for Vision-Language Image Editing",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "IEEE PRAI Conference, 2026",
      figure: "assets/figures/prompt2edit-figure.png",
      figureCaption:
        "Conceptual illustration of Prompt2Edit: transforming an instruction into an explicit edit plan before carrying out the image transformation.",
      summary:
        "A multimodal editing framework that uses symbolic planning to make image edits more structured, interpretable, and controllable.",
      pdf: "papers/prompt2edit-paper.pdf",
      bibtex:
        "@inproceedings{razafindratovolahy2026prompt2edit,\n  title={Prompt2Edit: Symbolic Planning for Vision-Language Image Editing},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  booktitle={IEEE PRAI Conference},\n  year={2026}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "Prompt2Edit extends my work beyond restoration and enhancement into multimodal image editing. The paper is motivated by the idea that vision-language editing becomes more trustworthy when transformations are organized rather than left entirely implicit."
        },
        {
          heading: "Key idea",
          body:
            "The central idea is to introduce symbolic planning into the editing process, turning complex instructions into explicit intermediate steps. This improves interpretability and makes the overall transformation pipeline more structured and controllable."
        },
        {
          heading: "Why it matters",
          body:
            "This direction connects robust visual modeling with trustworthy multimodal systems and reflects my broader interest in controllable, interpretable image understanding and generation."
        }
      ]
    },
    {
      slug: "daw-fa",
      title: "DAW-FA: Domain-Aware Adaptive Weighting with Fine-Grain Attention for Unsupervised MRI Harmonization",
      authors:
        "Delali Fiasam, L., Rao, Y., Sey, C., Aggrey, S. E. B., Kodjiku, S. L., Agyekum, K. O. B. O., Razafindratovolahy, A., Adjei-Mensah, I., Ukwuoma, C. C., Sam, F.",
      venue: "Journal of King Saud University: Computer and Information Sciences, 2025",
      figure: "assets/figures/dawfa-figure.png",
      figureCaption:
        "A conceptual depiction of DAW-FA: adapting across domains through weighting and attention to support more consistent MRI harmonization.",
      summary:
        "A contribution to unsupervised MRI harmonization through domain-aware weighting and fine-grain attention under cross-domain variability.",
      pdf: "",
      bibtex:
        "@article{fiasam2025dawfa,\n  title={DAW-FA: Domain-Aware Adaptive Weighting with Fine-Grain Attention for Unsupervised MRI Harmonization},\n  author={Fiasam, L. Delali and Rao, Yunbo and Sey, C. and Aggrey, S. E. B. and Kodjiku, S. L. and Agyekum, K. O. B. O. and Razafindratovolahy, Annicet and Adjei-Mensah, I. and Ukwuoma, C. C. and Sam, F.},\n  journal={Journal of King Saud University: Computer and Information Sciences},\n  year={2025}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "DAW-FA addresses unsupervised MRI harmonization under strong domain variability. The work extends my research interests toward robustness in medical imaging, where distribution shift and acquisition variability are central challenges."
        },
        {
          heading: "Key idea",
          body:
            "The paper studies domain-aware adaptive weighting together with fine-grain attention, allowing the method to better align heterogeneous imaging distributions without relying on paired supervision."
        },
        {
          heading: "Why it matters",
          body:
            "It reflects a broader interest in adaptive learning under shift, showing how the same robustness questions that motivate my enhancement work also matter in medically relevant imaging settings."
        }
      ]
    },
    {
      slug: "under-review",
      title: "Additional manuscripts under review",
      authors: "Including submissions to IEEE TPAMI, IEEE Sensors Journal, and Signal Processing",
      venue: "Under review",
      figure: "assets/figures/under-review-figure.svg",
      figureCaption:
        "A placeholder visual representing current manuscript activity across robustness, enhancement, and related vision problems.",
      summary:
        "Ongoing work on robust visual modeling, enhancement, and related perception problems is currently under review in several venues.",
      pdf: "",
      bibtex:
        "@misc{razafindratovolahy_under_review,\n  author={Razafindratovolahy, Annicet and collaborators},\n  title={Additional manuscripts under review},\n  note={Including submissions to IEEE TPAMI, IEEE Sensors Journal, and Signal Processing}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "In addition to the listed papers, I have ongoing manuscripts under review in major venues. These extend the same broader agenda around robustness, adaptive modeling, and reliable visual systems."
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
