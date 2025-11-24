export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow-delay" />
      <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-pink-500/8 rounded-full blur-3xl animate-pulse-slow-delay" />

      {/* Medium accent orbs */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow-delay" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-3xl animate-pulse-slow" />

      {/* Subtle ambient orbs */}
      <div className="absolute top-2/3 right-1/2 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/2 w-[320px] h-[320px] bg-purple-400/5 rounded-full blur-3xl" />
    </div>
  );
}
