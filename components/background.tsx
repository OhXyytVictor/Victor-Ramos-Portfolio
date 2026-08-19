export default function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Geometric shapes for minimal design */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
