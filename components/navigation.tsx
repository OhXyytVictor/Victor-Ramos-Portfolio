"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageSquare } from "lucide-react"

export default function Navigation() {
  const [activeLang, setActiveLang] = useState("pt")

  return (
    <nav className="p-4 md:p-6 border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="bg-red-600 text-white font-extrabold text-lg px-3 py-1 rounded-lg shadow-lg shadow-red-600/30">
            VR
          </span>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:inline">Victor Ramos</span>
        </div>

        {/* Language Selector Flags */}
        <div className="flex items-center space-x-1.5 bg-black/60 border border-white/15 px-3 py-1.5 rounded-full">
          <button
            onClick={() => setActiveLang("pt")}
            className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
              activeLang === "pt"
                ? "bg-red-500/20 border border-red-500/80 text-white shadow-md shadow-red-500/20"
                : "opacity-60 hover:opacity-100 text-slate-300"
            }`}
            title="Português (Brasil)"
          >
            <span className="text-sm">🇧🇷</span>
            <span className="text-[11px]">PT</span>
          </button>
          <button
            onClick={() => setActiveLang("en")}
            className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
              activeLang === "en"
                ? "bg-red-500/20 border border-red-500/80 text-white shadow-md shadow-red-500/20"
                : "opacity-60 hover:opacity-100 text-slate-300"
            }`}
            title="English"
          >
            <span className="text-sm">🇺🇸</span>
            <span className="text-[11px]">EN</span>
          </button>
          <button
            onClick={() => setActiveLang("es")}
            className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
              activeLang === "es"
                ? "bg-red-500/20 border border-red-500/80 text-white shadow-md shadow-red-500/20"
                : "opacity-60 hover:opacity-100 text-slate-300"
            }`}
            title="Español"
          >
            <span className="text-sm">🇪🇸</span>
            <span className="text-[11px]">ES</span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-2">
          <a href="https://github.com/OhXyytVictor" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-white/10">
              <Github className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/victorramosbraga" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-blue-400 hover:bg-white/10">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://wa.me/5511943789274" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-green-400 hover:bg-white/10">
              <MessageSquare className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
