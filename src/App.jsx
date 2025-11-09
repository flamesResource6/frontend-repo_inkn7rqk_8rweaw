import Hero from './components/Hero';
import AboutHeart from './components/AboutHeart';
import Diseases from './components/Diseases';
import Exercise from './components/Exercise';
import Tips from './components/Tips';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <AboutHeart />
      <Diseases />
      <Exercise />
      <Tips />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} HeartWise — Educational content only.</p>
          <nav className="text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#about" className="hover:text-white">About the Heart</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#diseases" className="hover:text-white">Diseases & Prevention</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#exercise" className="hover:text-white">Exercise</a>
            <span className="mx-3 opacity-40">•</span>
            <a href="#tips" className="hover:text-white">Tips</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
