import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="p-6 md:p-8 border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="bg-red-600 text-white font-extrabold text-lg px-3 py-1 rounded-lg shadow-lg shadow-red-600/30">
            VR
          </span>
          <span className="text-white font-bold text-xl tracking-tight">Victor Ramos</span>
        </div>
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
