import './App.css';
import { Heading, Navbar, Projects, Contact, Galllery, Footer } from './components'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Projects />
      <Galllery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
