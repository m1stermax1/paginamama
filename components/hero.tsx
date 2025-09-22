"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, Award, Users } from "lucide-react"

export function Hero() {
  const scrollToProperties = () => {
    const element = document.getElementById("propiedades")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6">
              <span className="text-foreground">Alejandra</span> <span className="text-accent">Gayoso</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2">Corredora Inmobiliaria</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Especialista en propiedades premium con más de 10 años de experiencia ayudando a familias a encontrar su
              hogar ideal en las mejores ubicaciones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            <Button
              size="lg"
              onClick={scrollToProperties}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              Ver Propiedades
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              Contactar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-200">
              <MapPin className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Zona Premium</h3>
              <p className="text-muted-foreground text-center text-sm">
                Especializada en las mejores ubicaciones de la ciudad
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-200">
              <Award className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">10+ Años</h3>
              <p className="text-muted-foreground text-center text-sm">De experiencia en el mercado inmobiliario</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-200">
              <Users className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">500+ Familias</h3>
              <p className="text-muted-foreground text-center text-sm">Han encontrado su hogar ideal conmigo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
