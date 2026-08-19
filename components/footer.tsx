export default function Footer() {
  return (
    <footer className="w-full p-6 md:p-8 bg-slate-950 border-t border-white/10 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-400 text-sm">© 2026 Victor Ramos — Game Programmer & Developer.</p>
        <div className="flex space-x-6">
          <a href="https://github.com/OhXyytVictor" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-white text-sm transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/victorramosbraga" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">
            LinkedIn
          </a>
          <a href="https://ohxytvictor.itch.io/hopeless" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-red-400 text-sm transition-colors">
            itch.io
          </a>
          <a href="https://wa.me/5511943789274" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-green-400 text-sm transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
