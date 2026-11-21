"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Terminal, Gamepad2 } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="text-center mb-16 pt-6 flex flex-col items-center">
      {/* HUD Top Identifier */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 hud-chamfer-sm bg-cyan-950/40 border border-cyan-400/35 text-cyan-300 font-tech-mono text-xs tracking-[0.18em] uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
        <Terminal className="w-3.5 h-3.5 text-red-400" />
        <span>PLAYER PROFILE // GAME DEV</span>
      </div>

      {/* Main Title */}
      <h1
        className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-center mb-4 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent"
        style={{
          filter: "drop-shadow(0 0 24px rgba(239, 68, 68, 0.35))",
        }}
      >
        Victor Ramos
      </h1>

      {/* Subtitle */}
      <p className="font-hud text-lg sm:text-2xl font-bold text-cyan-300/95 mb-8 tracking-wider uppercase text-center flex items-center justify-center gap-2">
        <Gamepad2 className="w-5 h-5 text-red-500 hidden sm:inline" />
        <span>{t.heroSubtitle}</span>
      </p>

      {/* Bio HUD Frame */}
      <div className="relative max-w-3xl mx-auto w-full">
        {/* Corner brackets */}
        <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80" />
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-red-500/80" />
        <span className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-red-500/80" />
        <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80" />

        <div className="hud-panel hud-chamfer p-6 md:p-8 space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed text-center border-l-2 border-l-red-500/70">
          <p>{t.heroBio1}</p>
          <p className="text-slate-300/90">{t.heroBio2}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap gap-3.5 justify-center items-center">
        <a href="https://wa.me/5511918224456" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            className="hud-chamfer-sm bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-hud font-bold tracking-wider uppercase px-7 py-3 transition-all shadow-[0_0_24px_rgba(239,68,68,0.45)] border border-red-400/40 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            {t.btnWhatsapp}
          </Button>
        </a>

        <a href="tel:+5511943789274">
          <Button
            size="lg"
            variant="outline"
            className="hud-chamfer-sm border border-cyan-400/40 bg-slate-950/80 text-slate-100 hover:bg-cyan-400/15 hover:border-cyan-300 hover:text-white font-hud font-bold tracking-wider uppercase px-6 py-3 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            {t.btnPhone}
          </Button>
        </a>

        <a href="https://store.steampowered.com/app/1850930/Camp_Wars/" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="hud-chamfer-sm border border-white/20 bg-slate-950/80 text-white hover:bg-red-600/20 hover:border-red-500/70 font-hud font-semibold tracking-wider uppercase px-6 py-3 transition-all"
          >
            {t.btnSteam}
          </Button>
        </a>

        <a href="https://simiandivision.itch.io/hopeless" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="hud-chamfer-sm border border-white/20 bg-slate-950/80 text-white hover:bg-red-600/20 hover:border-red-500/70 font-hud font-semibold tracking-wider uppercase px-6 py-3 transition-all"
          >
            {t.btnItch}
          </Button>
        </a>
      </div>
    </section>
  )
}
