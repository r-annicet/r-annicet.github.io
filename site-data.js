window.siteData = {
  name: "Annicet Razafindratovolahy",
  role: "PhD Candidate in Computer Vision",
  institution: "University of Electronic Science and Technology of China",
  location: "Chengdu, China",
  email: "annicet.razafindratovolahy@std.uestc.edu.cn",
  tagline:
    "Robust visual modeling under degradation, noise, and distribution shift.",
  summary:
    "I work on reliable and adaptive learning for image enhancement and restoration, with broader interests in trustworthy AI, multimodal systems, and robustness under imperfect or manipulated inputs. My research combines analytical formulations with learning-based methods to improve model stability, controllability, and generalization in real-world settings.",
  heroLinks: [
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    { label: "Email", href: "mailto:annicet.razafindratovolahy@std.uestc.edu.cn", primary: true },
    { label: "CV", href: "#", disabled: true }
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#background" },
    { label: "Contact", href: "#contact" }
  ],
  metrics: [
    { value: "6+", label: "Manuscripts and papers" },
    { value: "3", label: "Research themes" },
    { value: "4.0/4.0", label: "PhD GPA at UESTC" },
    { value: "2026", label: "Expected PhD defense" }
  ],
  about: [
    "My research focuses on robust visual modeling in the presence of degradation, noise, and distribution shifts. I am particularly interested in building enhancement and restoration systems that remain reliable when images are imperfect, ambiguous, or manipulated.",
    "Across my work, I study controllable enhancement, exposure-aware optimization, lightweight image restoration, and adaptive learning strategies that improve both visual quality and model robustness. I care about methods that are not only strong in benchmark settings, but also stable, interpretable, and useful under real deployment constraints.",
    "More broadly, I am interested in trustworthy AI, multimodal systems, and learning under imperfect inputs, especially when analytical structure can strengthen learned models."
  ],
  keywords: [
    "Image enhancement",
    "Image restoration",
    "Robust learning",
    "Distribution shift",
    "Trustworthy AI",
    "Multimodal systems",
    "Low-light vision",
    "Adaptive modeling"
  ],
  researchStories: [
    {
      slug: "robust-enhancement",
      title: "Robust enhancement under real-world degradation",
      subtitle: "Region-adaptive, exposure-aware, and reliable visual modeling",
      cardText:
        "A research thread on enhancement methods that selectively improve degraded content while preserving reliable information and structural consistency.",
      pdf: "papers/EA-NACFE-REVISED.pdf",
      year: "Research Theme",
      bibtex:
        "@misc{razafindratovolahy_robust_enhancement,\n  author = {Razafindratovolahy, Annicet},\n  title = {Robust enhancement under real-world degradation},\n  note = {Research theme across multiple manuscripts}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "A central theme in my work is that enhancement should not be uniformly aggressive. In real scenes, some regions are degraded while others already contain reliable visual evidence. My research therefore explores adaptive formulations that improve difficult content without disturbing stable structure, color, and detail."
        },
        {
          heading: "Methodological direction",
          body:
            "This line of work combines analytical nonlinear modeling, edge-aware refinement, exposure-sensitive objectives, and lightweight learning formulations. The goal is to make enhancement both effective and dependable, especially when illumination is poor and the signal is fragile."
        },
        {
          heading: "Why it matters",
          body:
            "Reliable enhancement is not only a perceptual problem. It directly affects downstream interpretation, robustness, and trust in visual systems used in practical environments such as robotics, sensing, and decision-support pipelines."
        }
      ]
    },
    {
      slug: "control-and-adaptation",
      title: "Control-based and adaptive image modeling",
      subtitle: "Treating image attributes as controllable signals",
      cardText:
        "A second thread focused on control-based modeling strategies for adaptable solutions across low-level vision and related domains.",
      pdf: "papers/LightCtrl-paper.pdf",
      year: "Research Theme",
      bibtex:
        "@misc{razafindratovolahy_control_adaptation,\n  author = {Razafindratovolahy, Annicet},\n  title = {Control-based and adaptive image modeling},\n  note = {Research theme across ongoing and completed work}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "I am interested in treating visual attributes as controllable signals rather than fixed side effects of enhancement models. This perspective helps create methods that are more adaptable across domains and more transparent in how visual change is produced."
        },
        {
          heading: "Applications",
          body:
            "The same modeling viewpoint can support work in medical imaging, remote sensing, robotics, and other settings where visual degradation and domain variability matter. It creates a bridge between image enhancement, adaptive learning, and trustworthy deployment."
        },
        {
          heading: "Outlook",
          body:
            "This theme naturally extends toward broader robust perception problems, especially when systems must remain stable under shifts in illumination, content, or acquisition conditions."
        }
      ]
    },
    {
      slug: "multimodal-editing",
      title: "From restoration to multimodal editing",
      subtitle: "Planning and control in vision-language image manipulation",
      cardText:
        "Recent work connects low-level visual reliability with more semantic and controllable image transformation through multimodal reasoning.",
      pdf: "papers/prompt2edit-paper.pdf",
      year: "Research Theme",
      bibtex:
        "@misc{razafindratovolahy_multimodal_editing,\n  author = {Razafindratovolahy, Annicet},\n  title = {From restoration to multimodal editing},\n  note = {Research theme connecting robust vision and multimodal control}\n}",
      sections: [
        {
          heading: "Overview",
          body:
            "My broader interests extend from restoration to multimodal image editing, especially when visual changes must follow structured goals rather than uncontrolled generation. This connects low-level reliability with higher-level user intent."
        },
        {
          heading: "Planning and reasoning",
          body:
            "Prompt-based editing becomes more useful when image transformations are broken into explicit, controllable steps. That perspective motivates work on symbolic planning and structured editing pipelines for vision-language systems."
        },
        {
          heading: "Longer-term interest",
          body:
            "This direction supports a larger research agenda on trustworthy multimodal systems: models that remain controllable, interpretable, and robust even when inputs or instructions are incomplete, manipulated, or imperfect."
        }
      ]
    }
  ],
  publications: [
    {
      slug: "tovo",
      title: "TOVO: Tone-Oriented Vision Optimization for Efficient Low-Light Image Enhancement",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "Signal Processing, 2026",
      year: "2026",
      doi: "10.1016/j.sigpro.2026.110540",
      pdf: "papers/TOVO-paper.pdf",
      cardText:
        "A tone-oriented formulation for efficient low-light image enhancement that links perceptual quality with computational practicality.",
      bibtex:
        "@article{razafindratovolahy2026tovo,\n  title={TOVO: Tone-Oriented Vision Optimization for Efficient Low-Light Image Enhancement},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  journal={Signal Processing},\n  year={2026},\n  doi={10.1016/j.sigpro.2026.110540}\n}",
      sections: [
        {
          heading: "Problem",
          body:
            "Low-light enhancement often improves brightness at the expense of tonal stability, structural fidelity, or computational efficiency. This paper addresses that tension by rethinking enhancement through a tone-oriented optimization view."
        },
        {
          heading: "Contribution",
          body:
            "TOVO introduces a formulation that emphasizes tone-aware optimization for efficient enhancement. The work is designed to improve visual quality while remaining practical for lightweight and deployment-minded settings."
        },
        {
          heading: "Why it matters",
          body:
            "The paper reflects a recurring goal in my research: building enhancement methods that are not only accurate, but also computationally grounded and stable enough for real-world use."
        }
      ]
    },
    {
      slug: "simple-nonlinear-function",
      title: "A Simple Yet Robust Nonlinear Function for Low-Light Image Enhancement",
      authors: "Razafindratovolahy, A., Rao, Y.",
      venue: "IEEE Signal Processing Letters, 2025",
      year: "2025",
      doi: "10.1109/LSP.2025.3602001",
      pdf: "papers/A_Simple_Yet_Robust_Nonlinear_Function_for_Low-Light_Image_Enhancement_Task.pdf",
      cardText:
        "A compact analytical formulation showing how a carefully designed nonlinear function can provide strong and stable enhancement behavior.",
      bibtex:
        "@article{razafindratovolahy2025nonlinear,\n  title={A Simple Yet Robust Nonlinear Function for Low-Light Image Enhancement},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo},\n  journal={IEEE Signal Processing Letters},\n  year={2025},\n  doi={10.1109/LSP.2025.3602001}\n}",
      sections: [
        {
          heading: "Problem",
          body:
            "Many enhancement pipelines become unnecessarily complex while still struggling to remain stable across diverse low-light cases. This work asks whether a more compact analytical design can still achieve robust behavior."
        },
        {
          heading: "Contribution",
          body:
            "The paper develops a simple nonlinear function tailored for low-light enhancement. Its value lies in showing that strong enhancement behavior can emerge from a carefully structured formulation rather than only from larger black-box designs."
        },
        {
          heading: "Why it matters",
          body:
            "This work captures an important aspect of my research style: using analytical structure to improve robustness, interpretability, and efficiency."
        }
      ]
    },
    {
      slug: "smile",
      title: "SMILE: Enhancing Low-Light Images in Lightweight Networks via Exposure-Aware Non-Reference Losses",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "Multimedia Systems, 2026",
      year: "2026",
      doi: "10.1007/s00530-026-02295-w",
      pdf: "papers/s00530-026-02295-w.pdf",
      cardText:
        "A lightweight low-light enhancement framework driven by exposure-aware non-reference losses for robust learning without heavy supervision.",
      bibtex:
        "@article{razafindratovolahy2026smile,\n  title={SMILE: Enhancing Low-Light Images in Lightweight Networks via Exposure-Aware Non-Reference Losses},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  journal={Multimedia Systems},\n  year={2026},\n  doi={10.1007/s00530-026-02295-w}\n}",
      sections: [
        {
          heading: "Problem",
          body:
            "Lightweight enhancement models are desirable in practice, but reducing model size often weakens training signals and harms restoration quality. This paper addresses that balance directly."
        },
        {
          heading: "Contribution",
          body:
            "SMILE proposes exposure-aware non-reference losses for lightweight low-light enhancement. The method strengthens learning without relying on heavy supervision, making the model more suitable for efficient deployment."
        },
        {
          heading: "Why it matters",
          body:
            "The paper connects efficiency, robustness, and practical learning objectives, which are central themes across my work."
        }
      ]
    },
    {
      slug: "prompt2edit",
      title: "Prompt2Edit: Symbolic Planning for Vision-Language Image Editing",
      authors: "Razafindratovolahy, A., Rao, Y., et al.",
      venue: "IEEE PRAI Conference, 2026",
      year: "2026",
      doi: "",
      pdf: "papers/prompt2edit-paper.pdf",
      cardText:
        "A multimodal editing framework that uses symbolic planning to make image edits more structured, interpretable, and controllable.",
      bibtex:
        "@inproceedings{razafindratovolahy2026prompt2edit,\n  title={Prompt2Edit: Symbolic Planning for Vision-Language Image Editing},\n  author={Razafindratovolahy, Annicet and Rao, Yunbo and others},\n  booktitle={IEEE PRAI Conference},\n  year={2026}\n}",
      sections: [
        {
          heading: "Problem",
          body:
            "Vision-language image editing is often flexible but under-structured, making it difficult to control how a requested transformation is carried out. This paper addresses editing through planning rather than treating it as a single opaque generation step."
        },
        {
          heading: "Contribution",
          body:
            "Prompt2Edit introduces symbolic planning into vision-language image editing. The central idea is to turn complex editing requests into a more organized, interpretable sequence of actions."
        },
        {
          heading: "Why it matters",
          body:
            "This paper extends my research toward multimodal systems while preserving the same emphasis on reliability, structure, and controllability."
        }
      ]
    },
    {
      slug: "daw-fa",
      title: "DAW-FA: Domain-Aware Adaptive Weighting with Fine-Grain Attention for Unsupervised MRI Harmonization",
      authors: "Delali Fiasam, L., Rao, Y., Sey, C., Aggrey, S. E. B., Kodjiku, S. L., Agyekum, K. O. B. O., Razafindratovolahy, A., Adjei-Mensah, I., Ukwuoma, C. C., Sam, F.",
      venue: "Journal of King Saud University: Computer and Information Sciences, 2025",
      year: "2025",
      doi: "",
      pdf: "",
      cardText:
        "A contribution to unsupervised MRI harmonization through domain-aware weighting and fine-grain attention under cross-domain variability.",
      bibtex:
        "@article{fiasam2025dawfa,\n  title={DAW-FA: Domain-Aware Adaptive Weighting with Fine-Grain Attention for Unsupervised MRI Harmonization},\n  author={Fiasam, L. Delali and Rao, Yunbo and Sey, C. and Aggrey, S. E. B. and Kodjiku, S. L. and Agyekum, K. O. B. O. and Razafindratovolahy, Annicet and Adjei-Mensah, I. and Ukwuoma, C. C. and Sam, F.},\n  journal={Journal of King Saud University: Computer and Information Sciences},\n  year={2025}\n}",
      sections: [
        {
          heading: "Problem",
          body:
            "Cross-domain variation is a central challenge in medical imaging. MRI harmonization requires methods that can adapt across acquisition differences without paired supervision."
        },
        {
          heading: "Contribution",
          body:
            "DAW-FA studies unsupervised MRI harmonization through domain-aware adaptive weighting and fine-grain attention, helping build stronger feature alignment under domain variability."
        },
        {
          heading: "Why it matters",
          body:
            "This work connects my low-level vision background with broader questions about robustness and adaptation under shifting data distributions."
        }
      ]
    }
  ],
  background: {
    education: [
      "PhD in Software Engineering, University of Electronic Science and Technology of China, 2021-2026",
      "MSc in Computer Science and Industrial Electronics, Universite d'Antsiranana, 2016-2019",
      "BSc in Computer Science and Industrial Electronics, Universite d'Antsiranana, 2013-2016"
    ],
    experience: [
      "PhD Researcher in applied computer vision at UESTC, developing robust methods for enhancement, restoration, and adaptive learning.",
      "Software Engineer at Ambatovy, Ingenosya, and Lemurriia, with experience in data systems, backend engineering, deployment, and production reliability."
    ],
    recognition: [
      "President of Malagasy Students in China, coordinating a multi-university student community.",
      "Honorable Mention in the national competition 'Chinese Digital Development in My Eyes'.",
      "First Place in the UESTC basketball competition."
    ]
  },
  contact:
    "For research conversations, collaborations, invited talks, or academic networking, feel free to get in touch by email.",
  footer:
    "Annicet Razafindratovolahy"
};
