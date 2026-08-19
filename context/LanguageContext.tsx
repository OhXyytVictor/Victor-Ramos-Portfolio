"use client"

import React, { createContext, useContext, useState } from "react"

export type Language = "pt" | "en" | "es"

export const translations = {
  pt: {
    navAbout: "Sobre",
    navProjects: "Projetos",
    navSpcine: "SPCine",
    navSkills: "Habilidades",
    heroSubtitle: "Desenvolvedor de Jogos Digitais & Game Programmer",
    heroBio1: "Formado em Programação de Jogos Digitais pela FIAP, atuo na criação e programação de sistemas de alta performance para jogos, com foco em Unreal Engine 5 e Unity.",
    heroBio2: "Tenho experiência com desenvolvimento de sistemas de combate, inteligência artificial, mecânicas de gameplay, otimização e interfaces. Além de desenvolver projetos comerciais como a nova versão de Camp Wars para a Steam, atuei como Jurado no Projeto Futuro Gamer (SPCine) em 2 edições.",
    btnWhatsapp: "Contato via WhatsApp",
    btnSteam: "Camp Wars na Steam",
    btnItch: "HopeLess no itch.io",
    projectsTitle: "Projetos em Destaque",
    projectsSubtitle: "Jogos no Steam, itch.io e produções ativas.",
    campWarsSubtitle: "Steam • Em Produção",
    campWarsDesc: "Atuação no desenvolvimento da programação da nova versão do jogo, atualmente em produção ativa para a Steam. Foco em mecânicas de combate, lógica de jogo e otimização.",
    hopelessSubtitle: "itch.io • TCC Solo Dev",
    hopelessDesc: "Jogo de sobrevivência e ação desenvolvido 100% por mim como Trabalho de Conclusão de Curso (TCC) na FIAP. Foco em IA de inimigos, combate fluido e otimização.",
    agiotaSubtitle: "Em Produção • Exposição em Eventos",
    agiotaDesc: "Simulador interativo em desenvolvimento ativo. Faço parte da equipe de programação, desenvolvendo mecânicas principais. Exposto em eventos da comunidade gamer.",
    runovavelSubtitle: "Game Jam • Global Solution 2",
    runovavelDesc: "Jogo desenvolvido para a Game Jam Global Solution 2 com apoio do Pacto Global, Ultragaz, Ultracargo, SAP e Formula-E. Focado em conscientização sobre energias renováveis.",
    spcineTag: "Reconhecimento & Atuação na Indústria",
    spcineTitle: "Jurado SPCine - Projeto Futuro Gamer",
    spcineDesc1: "Atuei como Jurado Oficial de Games em 2 edições consecutivas do Projeto Futuro Gamer, programa promovido pela SPCine focado no desenvolvimento e aceleração de novos talentos e estúdios de jogos.",
    spcineDesc2: "Avaliação técnica de mecânicas de jogos, game design, jogabilidade, originalidade e execução de projetos apresentados no programa.",
    spcineCountLabel: "Edições como Jurado",
    skillsTitle: "Habilidades & Especialidades",
    skillsSubtitle: "Conhecimentos técnicos focados no desenvolvimento de jogos e aplicações interativas.",
    skillGameDevTitle: "Game Development",
    skillGameDevDesc: "Unreal Engine 5 (Blueprints/C++), Unity (C#), IA de Inimigos, Sistemas de Combate, Otimização de Performance e UI/UX.",
    skillSoftwareTitle: "Desenvolvimento Web & Software",
    skillSoftwareDesc: "Python, JavaScript, TypeScript, React, Next.js, Node.js, automação com IA generativa (GPT API) e APIs RESTful.",
    skillSupportTitle: "Avaliação & Suporte Técnico",
    skillSupportDesc: "Jurado de Games no Projeto Futuro Gamer (SPCine x2), Troubleshooting técnico, Prototipagem Ágil e Analytics.",
    footerText: "© 2026 Victor Ramos — Game Programmer & Developer.",
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSpcine: "SPCine",
    navSkills: "Skills",
    heroSubtitle: "Digital Game Developer & Game Programmer",
    heroBio1: "Graduated in Digital Game Programming from FIAP, specializing in creating high-performance game systems focused on Unreal Engine 5 and Unity.",
    heroBio2: "I have experience developing combat systems, artificial intelligence, gameplay mechanics, optimization, and UI. In addition to commercial projects like the new version of Camp Wars on Steam, I served as an official Jury Member for Projeto Futuro Gamer (SPCine) in 2 editions.",
    btnWhatsapp: "Contact via WhatsApp",
    btnSteam: "Camp Wars on Steam",
    btnItch: "HopeLess on itch.io",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Games on Steam, itch.io, and active commercial productions.",
    campWarsSubtitle: "Steam • In Production",
    campWarsDesc: "Programming development for the new version of the game, currently in active production for Steam. Focus on combat mechanics, game logic, and performance optimization.",
    hopelessSubtitle: "itch.io • Solo Capstone TCC",
    hopelessDesc: "Action survival game 100% developed by me as a Capstone Project (TCC) at FIAP. Focus on enemy AI, smooth combat systems, and optimization.",
    agiotaSubtitle: "In Production • Event Exhibition",
    agiotaDesc: "Interactive simulator in active development. Part of the core programming team developing main gameplay mechanics. Exhibited at gaming events.",
    runovavelSubtitle: "Game Jam • Global Solution 2",
    runovavelDesc: "Game developed for the Global Solution 2 Game Jam with support from UN Global Compact, Ultragaz, Ultracargo, SAP, and Formula-E. Focused on renewable energy awareness.",
    spcineTag: "Industry Recognition & Experience",
    spcineTitle: "SPCine Jury Member - Futuro Gamer Project",
    spcineDesc1: "Served as an Official Game Jury Member in 2 consecutive editions of the Futuro Gamer Project, an accelerator program organized by SPCine for emerging game developers.",
    spcineDesc2: "Technical evaluation of game mechanics, game design, playability, originality, and project execution.",
    spcineCountLabel: "Editions as Jury",
    skillsTitle: "Skills & Specialties",
    skillsSubtitle: "Technical expertise focused on game development and interactive applications.",
    skillGameDevTitle: "Game Development",
    skillGameDevDesc: "Unreal Engine 5 (Blueprints/C++), Unity (C#), Enemy AI, Combat Systems, Performance Optimization, and Game UI/UX.",
    skillSoftwareTitle: "Software & Web Development",
    skillSoftwareDesc: "Python, JavaScript, TypeScript, React, Next.js, Node.js, generative AI automation (GPT API), and RESTful APIs.",
    skillSupportTitle: "Evaluation & Technical Support",
    skillSupportDesc: "SPCine Game Jury (Futuro Gamer x2), technical troubleshooting, agile prototyping, and data analytics.",
    footerText: "© 2026 Victor Ramos — Game Programmer & Developer.",
  },
  es: {
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navSpcine: "SPCine",
    navSkills: "Habilidades",
    heroSubtitle: "Desarrollador de Videojuegos & Game Programmer",
    heroBio1: "Graduado en Programación de Videojuegos por FIAP, me especializo en la creación y programación de sistemas de alto rendimiento para juegos en Unreal Engine 5 y Unity.",
    heroBio2: "Tengo experiencia en desarrollo de sistemas de combate, inteligencia artificial, mecánicas de juego, optimización e interfaces. Además de proyectos comerciales como la nueva versión de Camp Wars para Steam, me desempeñé como Jurado en el Proyecto Futuro Gamer (SPCine) en 2 ediciones.",
    btnWhatsapp: "Contacto por WhatsApp",
    btnSteam: "Camp Wars en Steam",
    btnItch: "HopeLess en itch.io",
    projectsTitle: "Proyectos Destacados",
    projectsSubtitle: "Juegos en Steam, itch.io y producciones activas.",
    campWarsSubtitle: "Steam • En Producción",
    campWarsDesc: "Programación de la nueva versión del juego, actualmente en producción activa para Steam. Enfoque en mecánicas de combate, lógica de juego y optimización.",
    hopelessSubtitle: "itch.io • TCC Solo Dev",
    hopelessDesc: "Juego de supervivencia y acción desarrollado 100% por mí como Trabajo Final de Grado (TCC) en FIAP. Enfoque en IA de enemigos, combate fluido y optimización.",
    agiotaSubtitle: "En Producción • Exposición en Eventos",
    agiotaDesc: "Simulador interactivo en desarrollo activo. Parte del equipo principal de programación. Expuesto en eventos de la comunidad de videojuegos.",
    runovavelSubtitle: "Game Jam • Global Solution 2",
    runovavelDesc: "Juego desarrollado para la Game Jam Global Solution 2 con el apoyo del Pacto Global de la ONU, Ultragaz, Ultracargo, SAP y Formula-E.",
    spcineTag: "Reconocimiento y Experiencia en la Industria",
    spcineTitle: "Jurado SPCine - Proyecto Futuro Gamer",
    spcineDesc1: "Me desempeñé como Jurado Oficial de Videojuegos en 2 ediciones consecutivas del Proyecto Futuro Gamer, programa promovido por SPCine.",
    spcineDesc2: "Evaluación técnica de mecánicas de juego, diseño de juegos, jugabilidad, originalidad y ejecución de proyectos.",
    spcineCountLabel: "Ediciones como Jurado",
    skillsTitle: "Habilidades y Especialidades",
    skillsSubtitle: "Conocimientos técnicos enfocados en el desarrollo de videojuegos y aplicaciones interactivas.",
    skillGameDevTitle: "Desarrollo de Juegos",
    skillGameDevDesc: "Unreal Engine 5 (Blueprints/C++), Unity (C#), IA de Enemigos, Sistemas de Combate, Optimización y UI/UX para juegos.",
    skillSoftwareTitle: "Desarrollo de Software & Web",
    skillSoftwareDesc: "Python, JavaScript, TypeScript, React, Next.js, Node.js, automatización con IA generativa (GPT API) y APIs RESTful.",
    skillSupportTitle: "Evaluación y Soporte Técnico",
    skillSupportDesc: "Jurado de Videojuegos SPCine (Futuro Gamer x2), resolución de problemas técnicos, prototipado ágil y analytics.",
    footerText: "© 2026 Victor Ramos — Game Programmer & Developer.",
  }
}

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations.pt
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
  t: translations.pt,
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("pt")
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
