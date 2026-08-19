"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <div className="text-center mb-16 pt-4 flex flex-col items-center">
      <h1 className="hero-title text-6xl md:text-8xl font-black text-red-500 mb-4 tracking-tight text-center">
        Victor Ramos
      </h1>
      
      <p className="text-xl md:text-2xl font-bold text-white mb-8 tracking-wide text-center">
        {t.heroSubtitle}
      </p>

      <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl text-center mx-auto">
        <p>{t.heroBio1}</p>
        <p>{t.heroBio2}</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
        <a href="https://wa.me/5511943789274" target="_blank" rel="noreferrer">
          <Button size="lg" className="bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-3 rounded-full transition-all shadow-lg shadow-red-600/30">
            {t.btnWhatsapp}
          </Button>
        </a>
        <a href="https://store.steampowered.com/app/1850930/Camp_Wars/" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border border-white/20 bg-slate-900/80 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full transition-all"
          >
            {t.btnSteam}
          </Button>
        </a>
        <a href="https://ohxytvictor.itch.io/hopeless" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border border-white/20 bg-slate-900/80 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full transition-all"
          >
            {t.btnItch}
          </Button>
        </a>
      </div>
    </div>
  )
}
