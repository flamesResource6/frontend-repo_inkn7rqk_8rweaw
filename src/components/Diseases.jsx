import { ShieldAlert, Stethoscope, Pill } from 'lucide-react';

export default function Diseases() {
  return (
    <section id="diseases" className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Heart Diseases & Prevention</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Learn to recognize risks, symptoms, and everyday actions you can take to protect your heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Coronary Artery Disease</h3>
            <p className="mt-2 text-sm text-slate-600">Caused by plaque buildup in arteries, which can reduce blood flow to the heart.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Symptoms: chest pain, shortness of breath, fatigue</li>
              <li>Prevention: no smoking, balanced diet, regular activity</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Hypertension (High Blood Pressure)</h3>
            <p className="mt-2 text-sm text-slate-600">Often silent but harmful over time, increasing risk of stroke and heart attack.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Symptoms: often none; headaches or dizziness in some</li>
              <li>Prevention: reduce salt, manage stress, regular check-ups</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Pill className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Other Conditions</h3>
            <p className="mt-2 text-sm text-slate-600">Heart failure, arrhythmias, and valve problems require medical care and ongoing monitoring.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Know your numbers: blood pressure, cholesterol, glucose</li>
              <li>Follow medical advice, take meds as prescribed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
