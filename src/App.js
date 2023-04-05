
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Statistics from './Components/Statistics';
import TechStack from './Components/TechStack';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
       <About/>
      <TechStack/> 
       <Projects/>
      <Statistics/>
      <Contact/>
    </div>
  );
}

export default App;
