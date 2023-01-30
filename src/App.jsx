import "./app.scss"
import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/Intro/Intro"
import Protfolio from "./components/Protfolio/Protfolio"
import Works from "./components/Works/Works"
import Languages from "./components/Languages/Languages"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
import Menu from "./components/Menu/Menu"

function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Protfolio/>
        <Works/>
        <Languages/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
