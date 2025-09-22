"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Eye } from "lucide-react"
import type { Property } from "@/types/property"

interface PropertiesProps {
  onPropertySelect: (property: Property) => void
}

export function Properties({ onPropertySelect }: PropertiesProps) {
  const [filter, setFilter] = useState<"all" | "venta" | "alquiler">("all")

  const properties: Property[] = [
    {
      id: 1,
      title: "Departamento Moderno en Palermo",
      price: 350000,
      type: "venta",
      location: "Palermo, CABA",
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      image: "/modern-apartment-palermo-buenos-aires.jpg",
      description:
        "Hermoso departamento de 2 ambientes en el corazón de Palermo. Completamente renovado con terminaciones de primera calidad. Cocina integrada, balcón con vista panorámica y amenities completos.",
      features: ["Balcón", "Cocina Integrada", "Amenities", "Seguridad 24hs", "Gimnasio", "Terraza"],
      gallery: ["/modern-living-room-palermo.jpg", "/modern-kitchen-palermo.jpg", "/modern-bedroom-palermo.jpg"],
    },
    {
      id: 2,
      title: "Casa Familiar en San Isidro",
      price: 4500,
      type: "alquiler",
      location: "San Isidro, GBA Norte",
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      image: "/family-house-san-isidro-garden.jpg",
      description:
        "Amplia casa familiar en zona residencial de San Isidro. Jardín con piscina, garage para 2 autos y excelente ubicación cerca de colegios y centros comerciales.",
      features: ["Jardín", "Piscina", "Garage", "Parrilla", "Lavadero", "Seguridad"],
      gallery: ["/family-house-exterior-san-isidro.jpg", "/house-garden-pool-san-isidro.jpg", "/house-interior-living-san-isidro.jpg"],
    },
    {
      id: 3,
      title: "Loft Industrial en Puerto Madero",
      price: 280000,
      type: "venta",
      location: "Puerto Madero, CABA",
      bedrooms: 1,
      bathrooms: 1,
      area: 65,
      image: "/industrial-loft-puerto-madero-brick.jpg",
      description:
        "Exclusivo loft de estilo industrial en Puerto Madero. Techos altos, ventanales panorámicos y diseño único. Ideal para profesionales jóvenes.",
      features: ["Techos Altos", "Ventanales", "Diseño Único", "Ubicación Premium", "Vista al Río"],
      gallery: ["/industrial-loft-interior-puerto-madero.jpg", "/loft-kitchen-industrial-puerto-madero.jpg", "/loft-bedroom-industrial-puerto-madero.jpg"],
    },
    {
      id: 4,
      title: "Penthouse en Belgrano",
      price: 650000,
      type: "venta",
      location: "Belgrano, CABA",
      bedrooms: 3,
      bathrooms: 3,
      area: 150,
      image: "/penthouse-belgrano-terrace-city-view.jpg",
      description:
        "Espectacular penthouse con terraza privada de 50m². Vista panorámica de la ciudad, terminaciones de lujo y ubicación privilegiada en Belgrano.",
      features: ["Terraza Privada", "Vista Panorámica", "Terminaciones de Lujo", "Cochera", "Baulera"],
      gallery: ["/penthouse-terrace-belgrano-city-view.jpg", "/luxury-penthouse-interior-belgrano.jpg", "/placeholder.svg?height=400&width=600"],
    },
    {
      id: 5,
      title: "Departamento en Recoleta",
      price: 3200,
      type: "alquiler",
      location: "Recoleta, CABA",
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Clásico departamento en Recoleta con balcón francés. Ubicación inmejorable cerca de museos, cafés y el cementerio de Recoleta.",
      features: ["Balcón Francés", "Ubicación Central", "Cerca de Museos", "Transporte Público"],
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 6,
      title: "Casa Quinta en Tigre",
      price: 420000,
      type: "venta",
      location: "Tigre, GBA Norte",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Hermosa casa quinta sobre el río en Tigre. Muelle privado, jardín amplio y tranquilidad absoluta. Perfecta para escapar de la ciudad.",
      features: ["Muelle Privado", "Sobre el Río", "Jardín Amplio", "Tranquilidad", "Naturaleza"],
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  const filteredProperties = properties.filter((property) => filter === "all" || property.type === filter)

  const formatPrice = (price: number, type: string) => {
    if (type === "venta") {
      return `USD ${price.toLocaleString()}`
    } else {
      return `$${price.toLocaleString()}/mes`
    }
  }

  return (
    <section id="propiedades" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Propiedades <span className="text-accent">Disponibles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Descubre nuestra selección exclusiva de propiedades premium en las mejores ubicaciones.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => setFilter("all")}
                className="transition-all duration-200"
              >
                Todas
              </Button>
              <Button
                variant={filter === "venta" ? "default" : "ghost"}
                onClick={() => setFilter("venta")}
                className="transition-all duration-200"
              >
                Venta
              </Button>
              <Button
                variant={filter === "alquiler" ? "default" : "ghost"}
                onClick={() => setFilter("alquiler")}
                className="transition-all duration-200"
              >
                Alquiler
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={property.type === "venta" ? "default" : "secondary"} className="capitalize">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="font-bold text-sm">{formatPrice(property.price, property.type)}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-balance">{property.title}</h3>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area}m²</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => onPropertySelect(property)}
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200"
                    variant="outline"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
