import { ShieldAlert, Stethoscope, Pill } from 'lucide-react';

export default function Diseases() {
  return (
    <section id="diseases" className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Heart Diseases & Prevention</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Learn to recognize risks, symptoms, and everyday actions you can take to protect your heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg">
            <div className="h-10 w-10 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center ring-1 ring-inset ring-fuchsia-500/30">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">Coronary Artery Disease</h3>
            <p className="mt-2 text-sm text-slate-300">Caused by plaque buildup in arteries, which can reduce blood flow to the heart.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>Symptoms: chest pain, shortness of breath, fatigue</li>
              <li>Prevention: no smoking, balanced diet, regular activity</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg">
            <div className="h-10 w-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center ring-1 ring-inset ring-amber-500/30">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">Hypertension (High Blood Pressure)</h3>
            <p className="mt-2 text-sm text-slate-300">Often silent but harmful over time, increasing risk of stroke and heart attack.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>Symptoms: often none; headaches or dizziness in some</li>
              <li>Prevention: reduce salt, manage stress, regular check-ups</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-lg">
            <div className="h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center ring-1 ring-inset ring-cyan-500/30">
              <Pill className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">Other Conditions</h3>
            <p className="mt-2 text-sm text-slate-300">Heart failure, arrhythmias, and valve problems require medical care and ongoing monitoring.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>Know your numbers: blood pressure, cholesterol, glucose</li>
              <li>Follow medical advice, take meds as prescribed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
