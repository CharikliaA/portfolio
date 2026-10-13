import { useState } from "react"

const Navbar = () => {
const [isOpen, setIsOpen] = useState (false)
  return (
    <nav>
        <span>Chariklia Sait</span>
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        <div className={isOpen ? "nav-links open" : "nav-links"}>
        <a href="#hem">Hem</a>
        <a href="#ommig">Om mig</a>
        <a href="#projekt">Projekt</a>
        <a href="#kontakt">Kontakt</a>
        </div>
    </nav>
  )
}

export default Navbar
