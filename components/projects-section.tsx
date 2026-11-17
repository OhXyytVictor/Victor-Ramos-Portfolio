"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Crosshair } from "lucide-react"

export default function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      code: "PRJ // 01",
      title: "Camp Wars",
      subtitle: t.campWarsSubtitle,
      description: t.campWarsDesc,
      technologies: ["Steam", "Programação", "Multiplayer", "Ação"],
      link: "https://store.steampowered.com/app/1850930/Camp_Wars/",
    },
    {
      code: "PRJ // 02",
      title: "HopeLess",
      subtitle: t.hopelessSubtitle,
      description: t.hopelessDesc,
      technologies: ["Unreal Engine 5", "Blueprints & IA", "Solo Dev", "FIAP"],
      link: "https://ohxytvictor.itch.io/hopeless",
    },
    {
      code: "PRJ // 03",
      title: "Agiota BR Simulator",
      subtitle: t.agiotaSubtitle,
      description: t.agiotaDesc,
      technologies: ["Programação", "Gameplay", "Simulador", "Eventos"],
      link: null,
    },
    {
      code: "PRJ // 04",
      title: "Runovável",
      subtitle: t.runovavelSubtitle,
      description: t.runovavelDesc,
      technologies: ["Unity", "Game Jam", "Sustentabilidade", "Pacto Global"],
      link: "https://ecoenergeek.itch.io/runovavel",
    },
    {
      code: "PRJ // 05",
      title: "Tycoon de Pesca / Fish Tycoon",
      subtitle: t.fishTycoonSubtitle,
      description: t.fishTycoonDesc,
      technologies: ["Roblox", "Luau", "DataStore", "Tycoon & Rebirth", "Multiplayer"],
      link: "https://www.roblox.com/pt/games/86985334533764/Tycoon-de-Pesca-Fish-Tycoon",
    },
  ]

  return (
    <section className="space-y-8 my-16">
      <div className="text-center border-b border-cyan-500/20 pb-6 relative">
        <span className="font-tech-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase block mb-2">
          ARCHIVE // MISSION DOSSIERS
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
          {t.projectsTitle}
        </h2>
        <p className="text-slate-400 text-sm mt-1.5">{t.projectsSubtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            {/* Tactical hover corner accents */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/90 transition-all duration-300 z-10 pointer-events-none" />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500/0 group-hover:border-red-500/90 transition-all duration-300 z-10 pointer-events-none" />

            <Card className="hud-panel hud-chamfer h-full transition-all duration-300 p-6 flex flex-col justify-between border-0">
              <CardContent className="p-0 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-tech-mono text-[11px] text-cyan-400 font-bold tracking-widest">
                        {project.code}
                      </span>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-tech-mono text-slate-300 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-cyan-400/40"
                      >
                        <span>OPEN</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <span className="text-xs font-tech-mono font-semibold text-red-400 uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="font-hud text-white font-bold text-2xl tracking-wide group-hover:text-red-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-5 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="hud-chamfer-sm bg-red-500/15 text-red-300 border border-red-500/35 font-tech-mono text-[11px] px-2.5 py-0.5 hover:bg-cyan-500/15 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
