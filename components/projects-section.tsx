import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Camp Wars",
    subtitle: "Steam • Em Produção",
    description:
      "Atuação no desenvolvimento da programação da nova versão do jogo, atualmente em produção ativa para a Steam. Foco em mecânicas de combate, lógica de jogo e otimização.",
    technologies: ["Steam", "Programação", "Multiplayer", "Ação"],
    link: "https://store.steampowered.com/app/1850930/Camp_Wars/",
  },
  {
    title: "HopeLess",
    subtitle: "itch.io • TCC Solo Dev",
    description:
      "Jogo de sobrevivência e ação desenvolvido 100% por mim como Trabalho de Conclusão de Curso (TCC) na FIAP. Foco em IA de inimigos, combate fluido e otimização.",
    technologies: ["Unreal Engine 5", "Blueprints & IA", "Solo Dev", "FIAP"],
    link: "https://ohxytvictor.itch.io/hopeless",
  },
  {
    title: "Agiota BR Simulator",
    subtitle: "Em Produção • Exposição em Eventos",
    description:
      "Simulador interativo em desenvolvimento ativo. Faço parte da equipe de programação, desenvolvendo mecânicas principais. Exposto em eventos da comunidade gamer.",
    technologies: ["Programação", "Gameplay", "Simulador", "Eventos"],
    link: null,
  },
  {
    title: "Runovável",
    subtitle: "Game Jam • Global Solution 2",
    description:
      "Jogo desenvolvido para a Game Jam Global Solution 2 com apoio do Pacto Global, Ultragaz, Ultracargo, SAP e Formula-E. Focado em conscientização sobre energias renováveis.",
    technologies: ["Unity", "Game Jam", "Sustentabilidade", "Pacto Global"],
    link: "https://ecoenergeek.itch.io/runovavel",
  },
]

export default function ProjectsSection() {
  return (
    <div className="space-y-8 my-16">
      <div className="text-center border-b border-white/10 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projetos em Destaque</h2>
        <p className="text-slate-400 text-sm mt-1">Jogos no Steam, itch.io e produções ativas.</p>
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
