"use client"

import { useState } from "react"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface Product {
  id: number
  name: string
  price: number
  category: string
  rating: number
  image: string
}

interface ProductGridProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

const categories = [
  { id: "all", name: "Todos" },
  { id: "labios", name: "Labios" },
  { id: "ojos", name: "Ojos" },
  { id: "rostro", name: "Rostro" },
  { id: "piel", name: "Piel" },
]

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="productos" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explora nuestra selección de productos premium de maquillaje
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-6 transition-all duration-300",
                activeCategory === category.id && "shadow-lg"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product
  onAddToCart: (product: Product) => void
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay with Add to Cart */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            onClick={() => onAddToCart(product)}
            className="translate-y-4 rounded-xl px-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <ShoppingCart className="mr-2 size-4" />
            Añadir al Carrito
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < product.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              )}
            />
          ))}
          <span className="ml-1 text-sm text-muted-foreground">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Name & Price */}
        <h3 className="font-medium text-foreground">{product.name}</h3>
        <p className="mt-1 text-lg font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}
