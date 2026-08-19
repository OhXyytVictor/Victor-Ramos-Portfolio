"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Code2, Award } from "lucide-react"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: Gamepad2,
      title: t.skillGameDevTitle,
      description: t.skillGameDevDesc,
      color: "text-red-500",
    },
    {
      icon: Code2,
      title: t.skillSoftwareTitle,
      description: t.skillSoftwareDesc,
      color: "text-red-500",
    },
    {
      icon: Award,
      title: t.skillSupportTitle,
      description: t.skillSupportDesc,
      color: "text-red-500",
    },
  ]

  return (
    <div className="space-y-8 my-16">
      <div className="text-center border-b border-white/10 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.skillsTitle}</h2>
        <p className="text-slate-400 text-sm mt-1">{t.skillsSubtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-2xl p-6 text-center"
          >
            <CardContent className="p-0">
              <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
              <h3 className="text-white font-bold text-xl mb-2">{skill.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
