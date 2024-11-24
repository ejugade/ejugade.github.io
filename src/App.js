import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills2 from './components/skills/Skills2';
// import Projects from './components/portfolio/ProjectsPublications';
import Projects from './components/portfolio/ProjectsPublications';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Qualification/>
      <Services/>
      <Skills/>
      <Skills2/>
      <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
