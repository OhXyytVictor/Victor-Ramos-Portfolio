"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Camp Wars",
      subtitle: t.campWarsSubtitle,
      description: t.campWarsDesc,
      technologies: ["Steam", "Programação", "Multiplayer", "Ação"],
      link: "https://store.steampowered.com/app/1850930/Camp_Wars/",
    },
    {
      title: "HopeLess",
      subtitle: t.hopelessSubtitle,
      description: t.hopelessDesc,
      technologies: ["Unreal Engine 5", "Blueprints & IA", "Solo Dev", "FIAP"],
      link: "https://ohxytvictor.itch.io/hopeless",
    },
    {
      title: "Agiota BR Simulator",
      subtitle: t.agiotaSubtitle,
      description: t.agiotaDesc,
      technologies: ["Programação", "Gameplay", "Simulador", "Eventos"],
      link: null,
    },
    {
      title: "Runovável",
      subtitle: t.runovavelSubtitle,
      description: t.runovavelDesc,
      technologies: ["Unity", "Game Jam", "Sustentabilidade", "Pacto Global"],
      link: "https://ecoenergeek.itch.io/runovavel",
    },
  ]

  return (
    <div className="space-y-8 my-16">
      <div className="text-center border-b border-white/10 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.projectsTitle}</h2>
        <p className="text-slate-400 text-sm mt-1">{t.projectsSubtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-2xl p-6 group flex flex-col justify-between"
          >
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-white font-bold text-2xl group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-red-500 transition-colors" />
                  </a>
                )}
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-red-500/20 text-red-300 border border-red-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
