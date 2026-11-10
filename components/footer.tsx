"use client"

import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full p-6 md:p-8 bg-slate-950 border-t border-white/10 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">{t.footerText}</p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
          <a href="https://github.com/OhXyytVictor" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/victorramosbraga" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://ohxytvictor.itch.io/hopeless" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-400 transition-colors">
            itch.io
          </a>
          <a href="https://wa.me/5511918224456" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
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
