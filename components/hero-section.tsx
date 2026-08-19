import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <div className="text-center md:text-left mb-16 pt-4">
      <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs font-semibold mb-6">
        <span>🎮 Game Programmer & Software Developer</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
        Victor Ramos <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">
          Game Programmer & Developer
        </span>
      </h1>

      <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
        <p>
          Formado em <strong>Programação de Jogos Digitais pela FIAP</strong>, atuo na criação e programação de sistemas de alta performance para jogos, com foco principal em <strong>Unreal Engine 5</strong> e <strong>Unity</strong>.
        </p>
        <p>
          Tenho experiência com programação de sistemas de combate, inteligência artificial, mecânicas de gameplay, otimização e interfaces. Além de desenvolver projetos comerciais como a nova versão de <em>Camp Wars</em> para a Steam, atuei como <strong>Jurado no Projeto Futuro Gamer (SPCine)</strong> em 2 edições.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
        <a href="https://wa.me/5511943789274" target="_blank" rel="noreferrer">
          <Button size="lg" className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-red-600/30">
            Contato via WhatsApp
          </Button>
        </a>
        <a href="https://store.steampowered.com/app/1850930/Camp_Wars/" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white px-6 py-3 rounded-xl"
          >
            Camp Wars na Steam
          </Button>
        </a>
        <a href="https://ohxytvictor.itch.io/hopeless" target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white px-6 py-3 rounded-xl"
          >
            HopeLess no itch.io
          </Button>
        </a>
      </div>
    </div>
  )
}
