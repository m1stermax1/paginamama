"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, Clock, Award } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    const message = "Hola María! Me gustaría obtener más información sobre tus servicios inmobiliarios."
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+5491123456789"
  }

  const handleEmail = () => {
    window.location.href = "mailto:maria@inmobiliaria.com"
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Hablemos de tu <span className="text-accent">Próximo Hogar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Estoy aquí para ayudarte en cada paso del proceso. Contáctame y encontremos juntos la propiedad perfecta
              para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">¿Por qué elegirme?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Experiencia Comprobada</h4>
                      <p className="text-muted-foreground text-sm">
                        Más de 10 años ayudando a familias a encontrar su hogar ideal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Disponibilidad Total</h4>
                      <p className="text-muted-foreground text-sm">
                        Estoy disponible cuando me necesites, incluso fines de semana.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Conocimiento Local</h4>
                      <p className="text-muted-foreground text-sm">Conozco cada barrio y sus características únicas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="text-xl font-semibold mb-4">Consulta Gratuita</h3>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Agenda una consulta gratuita conmigo. Analizaremos tus necesidades y te ayudaré a encontrar la
                  propiedad perfecta sin compromiso.
                </p>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Agendar Consulta Gratuita
                </Button>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-200">
                <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-accent mr-4" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-muted-foreground">+54 11 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-accent mr-4" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">maria@inmobiliaria.com</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-accent mr-4" />
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={handleCall}
                  variant="outline"
                  className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>

              <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <div className="flex items-center mb-2">
                  <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800 dark:text-green-200">WhatsApp Disponible</span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Respuesta inmediata por WhatsApp. ¡La forma más rápida de contactarme!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
