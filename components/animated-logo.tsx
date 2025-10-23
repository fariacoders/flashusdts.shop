"use client"

export function AnimatedLogo() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Outer rotating ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-spin"
        style={{ animationDuration: "3s" }}
      ></div>

      {/* Middle pulsing ring */}
      <div className="absolute inset-1 rounded-full border border-primary/50 animate-pulse"></div>

      {/* Inner logo */}
      <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-primary/50">
        T
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg animate-pulse"></div>
    </div>
  )
}
