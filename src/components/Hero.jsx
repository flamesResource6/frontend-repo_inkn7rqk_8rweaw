import Spline from '@splinetool/react-spline';
import { Heart, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] overflow-hidden bg-slate-900 text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top navigation */}
        <nav aria-label="Primary" className="flex items-center justify-between py-5">
          <a href="#home" className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500/90 text-white shadow-lg">
              <Heart className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">HeartWise</span>
          </a>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1 py-1" href="#about">About the Heart</a></li>
            <li><a className="hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1 py-1" href="#diseases">Diseases &amp; Prevention</a></li>
            <li><a className="hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1 py-1" href="#exercise">Exercise</a></li>
            <li><a className="hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1 py-1" href="#tips">Tips</a></li>
          </ul>
        </nav>

        {/* Hero copy */}
        <div className="py-12 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Activity className="h-4 w-4" />
              <span>Promoting health education for everyone</span>
            </div>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              Promoting Health and Well-Being for All —
              <span className="text-sky-300"> Start with Your Heart.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-sky-100/90">
              Learn how your heart works, understand common conditions, and discover simple ways to stay active and strong.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm font-semibold text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400">
                Explore the Heart
              </a>
              <a href="#tips" className="inline-flex items-center justify-center rounded-md bg-white/15 hover:bg-white/25 px-5 py-2.5 text-sm font-semibold text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400">
                Daily Tips
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
