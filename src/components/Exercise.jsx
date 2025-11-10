import { Bike, Dumbbell, Footprints, Waves } from 'lucide-react';

const activities = [
  {
    icon: Footprints,
    title: 'Jogging / Brisk Walking',
    desc: 'Aim for 150 minutes per week. Builds endurance and supports blood pressure control.'
  },
  {
    icon: Waves,
    title: 'Swimming',
    desc: 'Gentle on joints and great for the heart. Try intervals for added cardio benefits.'
  },
  {
    icon: Bike,
    title: 'Cycling',
    desc: 'Outdoor or stationary biking strengthens the heart and legs while being low-impact.'
  },
  {
    icon: Dumbbell,
    title: 'Aerobic + Strength',
    desc: 'Combine cardio with 2 strength sessions weekly to improve overall fitness.'
  },
];

export default function Exercise() {
  return (
    <section id="exercise" className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Heart-Strengthening Exercises</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Consistency beats intensity. Start gently, increase gradually, and pick activities you enjoy to keep your heart healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg hover:shadow-cyan-500/10 transition">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center ring-1 ring-inset ring-cyan-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-400">Tip: If you have a heart condition or risk factors, speak with a healthcare professional before starting a new program.</p>
      </div>
    </section>
  );
}
