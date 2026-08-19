import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "React, Next.js, TypeScript, Node.js e tecnologias modernas",
    color: "text-red-500",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX Design, Figma, Adobe Creative Suite",
    color: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "React Native, Flutter, desenvolvimento responsivo",
    color: "text-red-500",
  },
]

export default function SkillsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <CardContent className="p-6 text-center">
            <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
            <h3 className="text-white font-semibold text-xl mb-2">{skill.title}</h3>
            <p className="text-white/80 text-sm">{skill.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
