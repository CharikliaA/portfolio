import { useState } from "react"

const Navbar = () => {
const [isOpen, setIsOpen] = useState (false)

  return (
    <nav className="navbar">
        <span className="logo">Chariklia Sait</span>
        <button 
        className="menu-button" 
        aria-label={!isOpen ? "Stäng meny" : "Öppna meny" }
        aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "x" : "☰"}
        </button>
        <div className={isOpen ? "nav-links open" : "nav-links"}>
        <a href="#hem" onClick={() => setIsOpen(false)}>Hem</a>
        <a href="#ommig" onClick={() => setIsOpen(false)}>Om mig</a>
        <a href="#projekt" onClick={() => setIsOpen(false)}>Projekt</a>
        <a href="#kontakt" onClick={() => setIsOpen(false)}>Kontakt</a>
        </div>
    </nav>
  )
}

export default Navbar
