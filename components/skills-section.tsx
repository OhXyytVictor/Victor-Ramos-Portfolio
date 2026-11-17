"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Code2, Award } from "lucide-react"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skills = [
    {
      code: "MOD // 01",
      icon: Gamepad2,
      title: t.skillGameDevTitle,
      description: t.skillGameDevDesc,
      accent: "from-red-500 to-cyan-400",
    },
    {
      code: "MOD // 02",
      icon: Code2,
      title: t.skillSoftwareTitle,
      description: t.skillSoftwareDesc,
      accent: "from-cyan-400 to-red-500",
    },
    {
      code: "MOD // 03",
      icon: Award,
      title: t.skillSupportTitle,
      description: t.skillSupportDesc,
      accent: "from-red-500 to-amber-400",
    },
  ]

  return (
    <section className="space-y-8 my-16">
      <div className="text-center border-b border-cyan-500/20 pb-6">
        <span className="font-tech-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase block mb-2">
          SYSTEM // LOADOUT & SPECS
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
          {t.skillsTitle}
        </h2>
        <p className="text-slate-400 text-sm mt-1.5">{t.skillsSubtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="hud-panel hud-chamfer transition-all duration-300 p-6 text-center border-0 group flex flex-col justify-between"
          >
            <CardContent className="p-0 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
                  <span className="font-tech-mono text-[10px] text-cyan-400 tracking-widest font-bold">
                    {skill.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <div className="w-14 h-14 mx-auto mb-4 hud-chamfer-sm bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all">
                  <skill.icon className="w-7 h-7 text-red-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="font-hud text-white font-bold text-xl tracking-wide mb-2.5 uppercase">
                  {skill.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{skill.description}</p>
              </div>

              {/* Decorative HUD energy bar */}
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                <div className={`h-full w-4/5 bg-gradient-to-r ${skill.accent} group-hover:w-full transition-all duration-500`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
