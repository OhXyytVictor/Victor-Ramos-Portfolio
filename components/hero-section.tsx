import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="text-center md:text-left mb-16">
      <h1 className="text-6xl md:text-8xl font-black text-red-500 mb-8 tracking-tight">CREATIVE</h1>

      <div className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl">
        <p>
          Sou um desenvolvedor criativo especializado em criar experiências digitais únicas e envolventes. Minha paixão
          está em transformar ideias complexas em soluções elegantes e funcionais.
        </p>

        <p>
          Com experiência em desenvolvimento web moderno, design de interfaces e tecnologias emergentes, trabalho para
          criar produtos que não apenas funcionam perfeitamente, mas também inspiram e encantam os usuários.
        </p>

        <p>
          Cada projeto é uma oportunidade de explorar novas possibilidades e superar limites criativos, sempre mantendo
          o foco na qualidade e na experiência do usuário.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full">
          Ver Projetos
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full"
        >
          Contato
        </Button>
      </div>
    </div>
  )
}
