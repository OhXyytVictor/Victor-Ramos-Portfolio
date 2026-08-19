import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/60 text-sm mb-4 md:mb-0">© 2024 Portfolio. Criado com paixão e dedicação.</p>
        <div className="flex space-x-6">
          <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
            Sobre
          </Link>
          <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
            Projetos
          </Link>
          <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}
