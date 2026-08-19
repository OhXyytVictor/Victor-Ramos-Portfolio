import Background from "@/components/background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import SpcineSection from "@/components/spcine-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-auto bg-slate-950 text-slate-100 selection:bg-red-500 selection:text-white">
      {/* Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-12 py-8">
          <div className="max-w-5xl w-full">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Projects */}
            <ProjectsSection />

            {/* SPCine Recognition */}
            <SpcineSection />

            {/* Skills Section */}
            <SkillsSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}