"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ShieldCheck } from "lucide-react"

export default function SpcineSection() {
  const { t } = useLanguage()

  return (
    <section className="relative my-14 group">
      <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-red-500/80 z-10 pointer-events-none" />
      <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80 z-10 pointer-events-none" />

      <Card className="hud-panel hud-chamfer p-6 md:p-8 transition-all duration-300 border-0">
        <CardContent className="p-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <Badge className="hud-chamfer-sm bg-red-500/15 text-red-300 border border-red-500/40 px-3 py-1 text-xs font-tech-mono font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 mr-1.5 inline text-cyan-400" />
              {t.spcineTag}
            </Badge>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
              {t.spcineTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{t.spcineDesc1}</p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{t.spcineDesc2}</p>
          </div>

          <div className="hud-chamfer-sm bg-slate-950/90 border border-cyan-400/35 p-5 text-center min-w-[175px] self-stretch md:self-auto flex flex-col justify-center shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <ShieldCheck className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
            <span className="font-display text-4xl font-black text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">
              2x
            </span>
            <span className="font-tech-mono text-[11px] text-cyan-300 uppercase tracking-widest font-bold mt-1.5">
              {t.spcineCountLabel}
            </span>
            <span className="font-tech-mono text-[10px] text-slate-400 mt-1">SPCine • Futuro Gamer</span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
