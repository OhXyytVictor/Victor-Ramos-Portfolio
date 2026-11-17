export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050811]">
      {/* Base radial depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15, 23, 42, 0.85) 0%, #050811 75%)",
        }}
      />

      {/* Crimson & Cyan ambient tactical glows */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-red-600/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -right-32 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 left-1/3 w-[440px] h-[440px] bg-red-600/10 rounded-full blur-[140px]" />

      {/* Tactical HUD grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Secondary finer grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Subtle scanlines */}
      <div className="absolute inset-0 hud-scanlines opacity-50" />

      {/* Top/Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04060d]/90" />
    </div>
  )
}
