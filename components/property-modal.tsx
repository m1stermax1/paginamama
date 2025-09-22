"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import type { Property } from "@/types/property"

interface PropertyModalProps {
  property: Property
  onClose: () => void
}

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const formatPrice = (price: number, type: string) => {
    if (type === "venta") {
      return `USD ${price.toLocaleString()}`
    } else {
      return `$${price.toLocaleString()}/mes`
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.gallery.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.gallery.length - 1 : prev - 1))
  }

  const handleWhatsApp = () => {
    const message = `Hola María! Me interesa la propiedad: ${property.title} en ${property.location}. ¿Podrías darme más información?`
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-balance pr-8">{property.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src={property.gallery[currentImageIndex] || "/placeholder.svg"}
                alt={`${property.title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {property.gallery.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              <div className="absolute top-4 left-4">
                <Badge variant={property.type === "venta" ? "default" : "secondary"} className="capitalize">
                  {property.type}
                </Badge>
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="font-bold text-lg">{formatPrice(property.price, property.type)}</span>
                </div>
              </div>
            </div>

            {/* Image indicators */}
            {property.gallery.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {property.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location}</span>
              </div>

              <div className="flex items-center justify-between bg-muted rounded-lg p-4">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-accent" />
                  <span className="font-medium">{property.bedrooms} Dormitorios</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-accent" />
                  <span className="font-medium">{property.bathrooms} Baños</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 mr-2 text-accent" />
                  <span className="font-medium">{property.area}m²</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Descripción</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{property.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">Características</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-2 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3">Contactar por WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  ¿Te interesa esta propiedad? Contáctame directamente por WhatsApp para más información y coordinar una
                  visita.
                </p>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
