import Hero from './components/Hero';
import AboutHeart from './components/AboutHeart';
import Diseases from './components/Diseases';
import Exercise from './components/Exercise';
import Tips from './components/Tips';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <AboutHeart />
      <Diseases />
      <Exercise />
      <Tips />

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} HeartWise — Educational content only.</p>
          <nav className="text-sm text-slate-300">
            <a href="#home" className="hover:text-cyan-300">Home</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#about" className="hover:text-cyan-300">About the Heart</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#diseases" className="hover:text-cyan-300">Diseases & Prevention</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#exercise" className="hover:text-cyan-300">Exercise</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#tips" className="hover:text-cyan-300">Tips</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
