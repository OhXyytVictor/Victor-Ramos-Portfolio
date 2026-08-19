import Background from "@/components/background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-auto">
      {/* Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10 min-h-[150vh] flex flex-col">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="max-w-4xl w-full">
            {/* Hero Section */}
            <HeroSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Featured Projects */}
            <ProjectsSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}