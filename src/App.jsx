import { Element } from 'react-scroll';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
// import Cursor from './components/Cursor';
import Snowfall from './components/Snowfall';
import { lazy, Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader';

const Certification = lazy(() => import('./components/Certification/Certification'));

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust for navbar height

      const sections = document.querySelectorAll('[data-section]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-[#050414] h-auto w-full overflow-hidden'>
      <div className='relative'>
        {/* <Cursor /> */}
        <Snowfall />
        <Navbar activeSection={activeSection} />
        
        <Element name="home" data-section id="home">
          <Home />
        </Element>
        
        <Element name="about" data-section id="about">
          <About />
        </Element>
        
        <Element name="skills" data-section id="skills">
          <Skills />
        </Element>
        
        <Element name="project" data-section id="project">
          <Project />
        </Element>
        
        <Element name="education" data-section id="education">
          <Education />
        </Element>
        
        <Suspense fallback={<Loader />}>
          <Element name="certification" data-section id="certification">
            <Certification />
          </Element>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
}

export default App;