import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DevJourney from './components/DevJourney';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation should happen every time the user scrolls
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DevJourney />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
