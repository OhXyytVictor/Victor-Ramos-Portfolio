"use client"

import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative w-full p-6 md:p-8 bg-[#04060d]/95 border-t border-cyan-500/20 mt-auto">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-tech-mono text-slate-400 text-xs sm:text-sm">{t.footerText}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-tech-mono text-xs sm:text-sm">
          <a href="https://github.com/OhXyytVictor" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/victorramosbraga" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://simiandivision.itch.io/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-400 transition-colors">
            itch.io
          </a>
          <a href="https://wa.me/5511918224456" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
            WhatsApp: (11) 91822-4456
          </a>
          <a href="tel:+5511943789274" className="text-slate-400 hover:text-amber-400 transition-colors" title="Ligações e demais contatos">
            Ligações: (11) 94378-9274
          </a>
        </div>
      </div>
    </footer>
  )
}
