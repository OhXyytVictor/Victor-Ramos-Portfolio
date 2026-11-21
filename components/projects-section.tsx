"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Crosshair, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsSection() {
  const { t } = useLanguage()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: "auto",
  })

  const [selected, setSelected] = useState(0)
  const [snapCount, setSnapCount] = useState(1)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const projects = [
    {
      code: "PRJ // 01",
      title: "Camp Wars",
      subtitle: t.campWarsSubtitle,
      description: t.campWarsDesc,
      technologies: ["Unreal Engine 5", "Blueprints", "C++", "Multiplayer"],
      link: "https://store.steampowered.com/app/1850930/Camp_Wars/",
    },
    {
      code: "PRJ // 02",
      title: "HopeLess",
      subtitle: t.hopelessSubtitle,
      description: t.hopelessDesc,
      technologies: ["Unreal Engine 5", "Blueprints & IA", "Solo Dev", "FIAP"],
      link: "https://simiandivision.itch.io/hopeless",
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
      title: "Bananarquia",
      subtitle: t.bananarquiaSubtitle,
      description: t.bananarquiaDesc,
      technologies: ["Unity", "C#", "WebGL", "2D / Estratégia"],
      link: "https://simiandivision.itch.io/bananarquia",
    },
    {
      code: "PRJ // 06",
      title: "Pagando Mico",
      subtitle: t.pagandoMicoSubtitle,
      description: t.pagandoMicoDesc,
      technologies: ["Unity", "C#", "WebGL", "Endless Runner"],
      link: "https://simiandivision.itch.io/pagando-mico",
    },
    {
      code: "PRJ // 07",
      title: "Monkeyco — Demo (5 Minutos)",
      subtitle: t.monkeycoSubtitle,
      description: t.monkeycoDesc,
      technologies: ["Unity", "C#", "Roguelite", "itch.io"],
      link: "https://simiandivision.itch.io/monkeyco-demo",
    },
    {
      code: "PRJ // 08",
      title: "Tycoon de Pesca / Fish Tycoon",
      subtitle: t.fishTycoonSubtitle,
      description: t.fishTycoonDesc,
      technologies: ["Roblox", "Luau", "DataStore", "Tycoon & Rebirth", "Multiplayer"],
      link: "https://www.roblox.com/pt/games/86985334533764/Tycoon-de-Pesca-Fish-Tycoon",
    },
  ]

  useEffect(() => {
    if (!emblaApi) return

    const update = () => {
      setSnapCount(emblaApi.scrollSnapList().length)
      setSelected(emblaApi.selectedScrollSnap())
      setCanPrev(emblaApi.canScrollPrev())
      setCanNext(emblaApi.canScrollNext())
    }

    update()
    emblaApi.on("select", update)
    emblaApi.on("reInit", update)

    return () => {
      emblaApi.off("select", update)
      emblaApi.off("reInit", update)
    }
  }, [emblaApi])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section className="space-y-6 my-16">
      {/* Header & Carousel Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-cyan-500/20 pb-5">
        <div className="text-center sm:text-left">
          <span className="font-tech-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase block mb-1.5">
            ARCHIVE // MISSION DOSSIERS ({pad(selected + 1)} / {pad(snapCount)})
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
            {t.projectsTitle}
          </h2>
          <p className="text-slate-400 text-sm mt-1">{t.projectsSubtitle}</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Página anterior"
            className="hud-chamfer-sm border border-cyan-400/35 bg-slate-950/80 text-cyan-300 hover:bg-cyan-500/15 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Próxima página"
            className="hud-chamfer-sm border border-red-500/45 bg-slate-950/80 text-red-300 hover:bg-red-500/20 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div ref={emblaRef} className="overflow-hidden py-1.5 px-1 -mx-1">
        <div className="flex -ml-6 touch-pan-y">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[75%] md:basis-1/2 pl-6 py-1"
            >
              <div className="relative group h-full">
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
            </div>
          ))}
        </div>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center items-center gap-2 pt-1">
        {Array.from({ length: snapCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir para página ${index + 1}`}
            aria-current={selected === index}
            className={`h-1.5 transition-all duration-300 ${
              selected === index
                ? "w-8 bg-gradient-to-r from-red-500 to-cyan-400"
                : "w-2 bg-white/20 hover:bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
