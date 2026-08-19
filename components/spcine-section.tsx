import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export default function SpcineSection() {
  return (
    <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl my-12 transition-all duration-300">
      <CardContent className="p-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <Badge className="bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 text-xs font-semibold">
            <Award className="w-4 h-4 mr-1.5 inline" />
            Reconhecimento & Atuação na Indústria
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Jurado SPCine - Projeto Futuro Gamer</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Atuei como <strong>Jurado Oficial de Games em 2 edições consecutivas do Projeto Futuro Gamer</strong>, programa promovido pela <strong>SPCine</strong> focado no desenvolvimento e aceleração de novos talentos e estúdios de jogos.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Avaliação técnica de mecânicas de jogos, game design, jogabilidade, originalidade e execução de projetos apresentados no programa.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center min-w-[160px] self-stretch md:self-auto flex flex-col justify-center">
          <span className="text-4xl font-black text-red-500">2x</span>
          <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">Edições como Jurado</span>
          <span className="text-xs text-slate-400 mt-1">SPCine • Futuro Gamer</span>
        </div>
      </CardContent>
    </Card>
  )
}
