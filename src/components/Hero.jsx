import Spline from '@splinetool/react-spline';
import { Heart, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden bg-slate-950 text-slate-100">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient overlay to enhance contrast and vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-fuchsia-600/10 to-cyan-500/10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top navigation */}
        <nav aria-label="Primary" className="flex items-center justify-between py-5">
          <a href="#home" className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30">
              <Heart className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">HeartWise</span>
          </a>

          <ul className="hidden md:flex items-center gap-6 text-sm/relaxed">
            <li><a className="hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 py-1" href="#about">About the Heart</a></li>
            <li><a className="hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 py-1" href="#diseases">Diseases &amp; Prevention</a></li>
            <li><a className="hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 py-1" href="#exercise">Exercise</a></li>
            <li><a className="hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 py-1" href="#tips">Tips</a></li>
          </ul>
        </nav>

        {/* Hero copy */}
        <div className="py-12 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md ring-1 ring-white/20">
              <Rocket className="h-4 w-4 text-cyan-300" />
              <span className="text-slate-100">Future-forward health education</span>
            </div>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Elevate Your Heart Health
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300">with an Elegant, Futuristic Approach</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300">
              Explore interactive visuals and concise guides to understand your heart, prevent disease, and build habits that last.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-slate-950">
                Explore the Heart
              </a>
              <a href="#tips" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow backdrop-blur-md ring-1 ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-slate-950">
                Daily Tips
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
