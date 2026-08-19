import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="p-6 md:p-8">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">Portfolio</div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
