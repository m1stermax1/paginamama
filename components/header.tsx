"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">AL</span>
            </div>
            <span className="font-bold text-xl text-foreground">Alejandra Gayoso</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("propiedades")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Propiedades
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contacto
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="transition-transform duration-200 hover:scale-110"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("propiedades")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Propiedades
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
