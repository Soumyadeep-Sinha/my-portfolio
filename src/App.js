import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import About from './components/about'
import Footer from './components/footer';
import Languages from './components/languages';
import Projects from './components/projects'
import projectList from './components/projects_list';
import Contact from './components/contact';

const createcard = (projects) => {
  return (
    <Projects
      key={projects.id}
      name={projects.name}
      link={projects.link}
      image={projects.image}
      about={projects.about}
    />
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <div className='selfclosingdiv' id="About" />
      <About />
      <div className='selfclosingdiv' id='skills' />
      <Languages />
      <div className='selfclosingdiv' />
      <h2 className='ProjectsHeader' id='project'>Some of My Projects</h2>
      <div className='projectSection'>
        {projectList.map(createcard)}
      </div>
      <div className='viewMore'>
        <a href="https://github.com/Soumyadeep-Sinha" target="_blank" rel="noopener noreferrer">view more</a>
      </div>
      <div className='selfclosingdiv' />
      <Contact />
      <div className='selfclosingdiv' />
      <Footer />
    </div>
  );
}

export default App;
