import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Design System",
    description: "Sistema de design completo com componentes reutilizáveis e documentação interativa.",
    technologies: ["Storybook", "Figma", "TypeScript"],
  },
  {
    title: "Mobile App",
    description: "Aplicativo mobile para gestão de tarefas com sincronização em tempo real e interface intuitiva.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Data Visualization",
    description:
      "Dashboard interativo para visualização de dados complexos com gráficos dinâmicos e filtros avançados.",
    technologies: ["D3.js", "Next.js", "Python"],
  },
]

export default function ProjectsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-8">Projetos em Destaque</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-red-500 transition-colors" />
              </div>
              <p className="text-white/80 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30">
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
