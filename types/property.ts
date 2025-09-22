export interface Property {
  id: number
  title: string
  price: number
  type: "venta" | "alquiler"
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  description: string
  features: string[]
  gallery: string[]
}
