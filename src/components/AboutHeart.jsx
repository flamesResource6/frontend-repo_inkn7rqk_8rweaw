import { Brain, Activity, Droplets } from 'lucide-react';

export default function AboutHeart() {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About the Human Heart</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Your heart is a powerful muscle that pumps blood around your body, delivering oxygen and nutrients to every cell. It works nonstop—beating about 100,000 times a day—to keep you energized and healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
              <Droplets className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Structure</h3>
            <p className="mt-2 text-sm text-slate-600">
              The heart has four chambers—two atria and two ventricles—separated by valves that keep blood moving in the right direction.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Activity className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Function</h3>
            <p className="mt-2 text-sm text-slate-600">
              With each beat, your heart sends oxygen-rich blood through arteries and returns oxygen-poor blood through veins for re-oxygenation.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Why It Matters</h3>
            <p className="mt-2 text-sm text-slate-600">
              A healthy heart supports strong thinking, stable moods, and long-term well-being. Caring for it improves quality of life at every age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
