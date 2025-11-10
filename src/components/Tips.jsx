import { Leaf, Sun, Utensils, Moon } from 'lucide-react';

const tips = [
  { icon: Sun, text: 'Begin your day with 10 minutes of light movement to wake up your heart.' },
  { icon: Utensils, text: 'Fill half your plate with colorful vegetables and fruit at most meals.' },
  { icon: Leaf, text: 'Choose whole grains, beans, nuts, and lean proteins for sustained energy.' },
  { icon: Moon, text: 'Prioritize 7–9 hours of sleep—your heart recovers while you rest.' },
];

export default function Tips() {
  return (
    <section id="tips" className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Healthy Lifestyle Tips</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">Simple daily actions add up. Try one new habit this week and build from there.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tips.map(({ icon: Icon, text }) => (
            <div key={text} className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center ring-1 ring-inset ring-emerald-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm text-slate-200">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
