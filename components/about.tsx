"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Sobre <span className="text-accent">Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Soy María Rodríguez, una corredora inmobiliaria apasionada por ayudar a las personas a encontrar no solo
              una casa, sino un verdadero hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Mi Experiencia</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Con más de una década en el mercado inmobiliario, he desarrollado una comprensión profunda de las
                  necesidades únicas de cada cliente. Mi enfoque personalizado y atención al detalle me han permitido
                  construir relaciones duraderas basadas en la confianza y los resultados excepcionales.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Mi Filosofía</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Creo que cada propiedad tiene una historia que contar y cada cliente tiene sueños únicos que cumplir.
                  Mi trabajo es conectar estas historias de manera perfecta, asegurándome de que cada transacción sea
                  transparente, eficiente y satisfactoria.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Negociación Experta</Badge>
                <Badge variant="secondary">Análisis de Mercado</Badge>
                <Badge variant="secondary">Propiedades Premium</Badge>
                <Badge variant="secondary">Servicio Personalizado</Badge>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-foreground font-bold text-xl">MR</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">María Rodríguez</h3>
                    <p className="text-muted-foreground">Corredora Inmobiliaria Certificada</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    +54 11 1234-5678
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    maria@inmobiliaria.com
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Buenos Aires, Argentina
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Calificación</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-200">
                  <div className="text-2xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Propiedades Vendidas</div>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-200">
                  <div className="text-2xl font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
