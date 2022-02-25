import Home from "./content/Home/Home";
import About from "./content/About/About";
import Contact from "./content/contactMe/Contact";
import Resume from './content/Resume/Resume';

import './App.css';

function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <Resume/>
      <Contact/>

      <div className='app-footer'>
        <span className="app-footer-line"></span>
        <p>
          Deepak Portfolio<em> -- DeepR2019</em>
        </p>
      </div>
    </div>
  );
}

export default App;
