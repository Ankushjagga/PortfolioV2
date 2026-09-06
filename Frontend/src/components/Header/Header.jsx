import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import Resume from "../../assests/AnkushKumarJagga.pdf"

const SECTIONS = [
  { id: "home", label: "Home", icon: "fa-solid fa-house" },
  { id: "about", label: "About Me", icon: "fa-solid fa-address-card" },
  { id: "projects", label: "Projects", icon: "fa-solid fa-diagram-project" },
  { id: "experience", label: "Experience", icon: "fa-solid fa-brain" },
  { id: "skills", label: "Skills", icon: "fa-solid fa-user" },
  { id: "education", label: "Education", icon: "fa-solid fa-graduation-cap" },
  { id: "contactss", label: "Contact", icon: "fa-solid fa-phone" },
]

const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  // Highlight whichever section is currently in view, not just the last one
  // that was clicked.
  useEffect(() => {
    const targets = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  // Stop the page behind the drawer from scrolling, and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e) => { if (e.key === "Escape") setMenuOpen(false) }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [menuOpen])

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setMenuOpen(false)
  }

  const handleDownload = () => {
    window.open(Resume, "_blank", "noopener")
    setMenuOpen(false)
  }

  return (
    <header className='navWrap'>
      <nav className='nav'>
        <NavLink to="/" className='logoLink' aria-label='Home'>
          <span className='logoNav'>AJ</span>
        </NavLink>

        {/* The bars are drawn in CSS on purpose: an icon-font glyph leaves an
            invisible button if the Font Awesome kit is slow or blocked. */}
        <button
          type='button'
          className={`navToggle ${menuOpen ? "isOpen" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls='primary-navigation'
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className='navToggleBars' aria-hidden='true'></span>
        </button>

        <ul
          id='primary-navigation'
          className={`navList ${menuOpen ? "isOpen" : ""}`}
        >
          {SECTIONS.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                type='button'
                className={`headerNav ${activeSection === id ? "active" : ""}`}
                onClick={() => handleScroll(id)}
              >
                <i className={icon} aria-hidden='true'></i> {label}
              </button>
            </li>
          ))}
          <li>
            <button type='button' className='headerNav' onClick={handleDownload}>
              <i className="fa-solid fa-download" aria-hidden='true'></i> Resume
            </button>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className='navBackdrop'
          onClick={() => setMenuOpen(false)}
          aria-hidden='true'
        />
      )}
    </header>
  )
}

export default Header
