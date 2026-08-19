import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Code2, Award } from "lucide-react"

const skills = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Unreal Engine 5 (Blueprints/C++), Unity (C#), IA de Inimigos, Sistemas de Combate, Otimização de Performance e UI/UX.",
    color: "text-red-500",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web & Software",
    description: "Python, JavaScript, TypeScript, React, Next.js, Node.js, automação com IA generativa (GPT API) e APIs RESTful.",
    color: "text-red-500",
  },
  {
    icon: Award,
    title: "Avaliação & Suporte Técnico",
    description: "Jurado de Games no Projeto Futuro Gamer (SPCine x2), Troubleshooting técnico, Prototipagem Ágil e Analytics.",
    color: "text-red-500",
  },
]

export default function SkillsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="bg-slate-900/60 backdrop-blur-md border-white/10 hover:border-red-500/40 hover:bg-slate-900/80 transition-all duration-300"
        >
          <CardContent className="p-6 text-center">
            <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
            <h3 className="text-white font-bold text-xl mb-2">{skill.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{skill.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
