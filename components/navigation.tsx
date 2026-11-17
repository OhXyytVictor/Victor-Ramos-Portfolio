"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageSquare, Phone } from "lucide-react"

export default function Navigation() {
  const { lang, setLang } = useLanguage()

  return (
    <nav className="px-4 py-3 md:px-6 md:py-4 border-b border-cyan-500/20 bg-[#050811]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      {/* Top thin neon accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-cyan-400/70 to-red-600 opacity-80" />

      <div className="max-w-5xl mx-auto flex justify-between items-center gap-3">
        {/* Brand Emblem */}
        <div className="flex items-center space-x-3">
          <div className="hud-chamfer-sm bg-gradient-to-br from-red-600 to-red-700 text-white font-display font-black text-base md:text-lg px-3.5 py-1.5 shadow-[0_0_18px_rgba(239,68,68,0.45)] border border-red-400/40">
            VR
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-display font-bold text-base tracking-wider uppercase">
              Victor Ramos
            </span>
            <span className="font-tech-mono text-[10px] text-cyan-400/90 flex items-center gap-1.5 mt-1 tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              SYS // ONLINE
            </span>
          </div>
        </div>

        {/* Language Selector Switches */}
        <div className="flex items-center space-x-1 bg-slate-950/90 border border-white/15 px-2 py-1 hud-chamfer-sm">
          <button
            onClick={() => setLang("pt")}
            className={`flex items-center space-x-1 px-2.5 py-1 text-xs font-tech-mono font-bold transition-all hud-chamfer-sm ${
              lang === "pt"
                ? "bg-red-600/25 border border-red-500/80 text-white shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                : "opacity-60 hover:opacity-100 text-slate-300 border border-transparent"
            }`}
            title="Português (Brasil)"
          >
            <span className="text-xs">🇧🇷</span>
            <span className="text-[11px]">PT</span>
          </button>
          <button
            onClick={() => setLang("en")}
            className={`flex items-center space-x-1 px-2.5 py-1 text-xs font-tech-mono font-bold transition-all hud-chamfer-sm ${
              lang === "en"
                ? "bg-red-600/25 border border-red-500/80 text-white shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                : "opacity-60 hover:opacity-100 text-slate-300 border border-transparent"
            }`}
            title="English"
          >
            <span className="text-xs">🇺🇸</span>
            <span className="text-[11px]">EN</span>
          </button>
          <button
            onClick={() => setLang("es")}
            className={`flex items-center space-x-1 px-2.5 py-1 text-xs font-tech-mono font-bold transition-all hud-chamfer-sm ${
              lang === "es"
                ? "bg-red-600/25 border border-red-500/80 text-white shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                : "opacity-60 hover:opacity-100 text-slate-300 border border-transparent"
            }`}
            title="Español"
          >
            <span className="text-xs">🇪🇸</span>
            <span className="text-[11px]">ES</span>
          </button>
        </div>

        {/* Social & Contact Icons */}
        <div className="flex items-center space-x-1.5">
          <a href="https://github.com/OhXyytVictor" target="_blank" rel="noreferrer" title="GitHub">
            <Button
              variant="ghost"
              size="icon"
              className="hud-chamfer-sm border border-white/10 bg-slate-900/60 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
            >
              <Github className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/victorramosbraga" target="_blank" rel="noreferrer" title="LinkedIn">
            <Button
              variant="ghost"
              size="icon"
              className="hud-chamfer-sm border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://wa.me/5511918224456" target="_blank" rel="noreferrer" title="WhatsApp: (11) 91822-4456">
            <Button
              variant="ghost"
              size="icon"
              className="hud-chamfer-sm border border-white/10 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
          </a>
          <a href="tel:+5511943789274" title="Ligações e demais contatos: (11) 94378-9274">
            <Button
              variant="ghost"
              size="icon"
              className="hud-chamfer-sm border border-white/10 bg-slate-900/60 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all"
            >
              <Phone className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
