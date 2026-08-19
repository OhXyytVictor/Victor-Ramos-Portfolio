import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Gamepad2, Hammer, Trophy } from "lucide-react"

const projects = [
  {
    title: "Camp Wars",
    subtitle: "Steam • Em Produção",
    description:
      "Atuação no desenvolvimento da programação da nova versão do jogo, atualmente em produção ativa para a Steam. Foco em mecânicas de combate, lógica de jogo e otimização.",
    technologies: ["Steam", "Programação", "Multiplayer", "Ação"],
    link: "https://store.steampowered.com/app/1850930/Camp_Wars/",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  },
  {
    title: "HopeLess",
    subtitle: "itch.io • TCC Solo Dev",
    description:
      "Jogo de sobrevivência e ação desenvolvido 100% por mim como Trabalho de Conclusão de Curso (TCC) na FIAP. Foco em IA de inimigos, combate fluido e otimização.",
    technologies: ["Unreal Engine 5", "Blueprints & IA", "Solo Dev", "FIAP"],
    link: "https://ohxytvictor.itch.io/hopeless",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
  },
  {
    title: "Agiota BR Simulator",
    subtitle: "Em Produção • Exposição em Eventos",
    description:
      "Simulador interativo em desenvolvimento ativo. Faço parte da equipe de programação, desenvolvendo mecânicas principais. Exposto em eventos da comunidade gamer.",
    technologies: ["Programação", "Gameplay", "Simulador", "Exposição em Eventos"],
    link: null,
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  },
  {
    title: "Runovável",
    subtitle: "Game Jam • Global Solution 2",
    description:
      "Jogo desenvolvido para a Game Jam Global Solution 2 com apoio do Pacto Global, Ultragaz, Ultracargo, SAP e Formula-E. Focado em conscientização sobre energias renováveis.",
    technologies: ["Unity", "Game Jam", "Sustentabilidade", "Pacto Global"],
    link: "https://ecoenergeek.itch.io/runovavel",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  },
]

export default function ProjectsSection() {
  return (
    <div className="space-y-8 my-16">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Jogos & Produções</h2>
          <p className="text-slate-400 text-sm mt-1">Projetos no Steam, itch.io e jogos em produção.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-slate-900/60 backdrop-blur-md border-white/10 hover:border-red-500/40 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <Badge variant="outline" className={`mb-2 ${project.badgeColor}`}>
                    {project.subtitle}
                  </Badge>
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
                  <Badge key={techIndex} variant="secondary" className="bg-red-500/10 text-red-300 border border-red-500/20">
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
