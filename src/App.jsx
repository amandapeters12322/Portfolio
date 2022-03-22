import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import Blog from './components/blog/Blog'
import Modal from './components/modal/Modal'
import "./app.scss";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [menuOpen, setMenuOpen] = useState(false) //when we refresh the page, the menu will be 'false' -- not open
  
  
  return (
    <div className="app">
      <Modal/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> {/*calling the 'props' from upabove state const */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> {/*calling the 'props' from upabove state const */}
      <div className="sections"> 
        <Intro/>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </div>
    </div>

    
  );
}

export default App;
