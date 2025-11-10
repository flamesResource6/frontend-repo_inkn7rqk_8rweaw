import { Brain, Activity, Droplets } from 'lucide-react';

export default function AboutHeart() {
  return (
    <section id="about" className="relative bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-cyan-500/5" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About the Human Heart</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Your heart is a powerful muscle that pumps blood around your body, delivering oxygen and nutrients to every cell. It works nonstop—beating about 100,000 times a day—to keep you energized and healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg shadow-fuchsia-500/5 hover:shadow-fuchsia-500/10 transition">
            <div className="h-10 w-10 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center ring-1 ring-inset ring-fuchsia-500/30">
              <Droplets className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">Structure</h3>
            <p className="mt-2 text-sm text-slate-300">
              The heart has four chambers—two atria and two ventricles—separated by valves that keep blood moving in the right direction.
            </p>
          </div>

          <div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 transition">
            <div className="h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center ring-1 ring-inset ring-cyan-500/30">
              <Activity className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">Function</h3>
            <p className="mt-2 text-sm text-slate-300">
              With each beat, your heart sends oxygen-rich blood through arteries and returns oxygen-poor blood through veins for re-oxygenation.
            </p>
          </div>

          <div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg shadow-violet-500/5 hover:shadow-violet-500/10 transition">
            <div className="h-10 w-10 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center ring-1 ring-inset ring-violet-500/30">
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">Why It Matters</h3>
            <p className="mt-2 text-sm text-slate-300">
              A healthy heart supports strong thinking, stable moods, and long-term well-being. Caring for it improves quality of life at every age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
