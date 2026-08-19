import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export default function SpcineSection() {
  return (
    <Card className="bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-slate-950 border-purple-500/30 p-6 md:p-8 rounded-2xl my-12">
      <CardContent className="p-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/40 px-3 py-1 text-xs">
            <Award className="w-4 h-4 mr-1 inline" />
            Reconhecimento & Atuação na Indústria
          </Badge>
          <h2 className="text-3xl font-extrabold text-white">Jurado SPCine - Projeto Futuro Gamer</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Atuei como <strong>Jurado Oficial de Games em 2 edições consecutivas do Projeto Futuro Gamer</strong>, programa promovido pela <strong>SPCine</strong> focado no desenvolvimento e aceleração de novos talentos e estúdios de jogos.
          </p>
          <p className="text-slate-400 text-sm">
            Avaliação técnica de mecânicas de jogos, game design, jogabilidade, originalidade e execução de projetos apresentados no programa.
          </p>
        </div>
        <div className="bg-purple-900/40 border border-purple-500/40 rounded-2xl p-6 text-center min-w-[180px] self-stretch md:self-auto flex flex-col justify-center">
          <span class="text-4xl font-black text-purple-400">2x</span>
          <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">Edições como Jurado</span>
          <span className="text-xs text-purple-300 mt-2 font-bold">SPCine • Futuro Gamer</span>
        </div>
      </CardContent>
    </Card>
  )
}
