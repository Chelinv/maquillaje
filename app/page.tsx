"use client"

import { useState } from "react"
import { Navbar, type CartItem } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid, type Product } from "@/components/product-grid"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

const products: Product[] = [
  {
    id: 1,
    name: "Labial Velvet Rose",
    price: 29.99,
    category: "labios",
    rating: 5,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Labial Nude Perfecto",
    price: 27.99,
    category: "labios",
    rating: 4,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Paleta de Sombras Aurora",
    price: 49.99,
    category: "ojos",
    rating: 5,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Máscara de Pestañas Volumen",
    price: 24.99,
    category: "ojos",
    rating: 5,
    image: "/mascara-pestanas-volumen.png",
  },
  {
    id: 5,
    name: "Base Líquida Luminosa",
    price: 39.99,
    category: "rostro",
    rating: 5,
    image: "https://images.unsplash.com/photo-1557205465-f3762edea6d3?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Rubor en Polvo Coral",
    price: 32.99,
    category: "rostro",
    rating: 4,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Sérum Vitamina C",
    price: 54.99,
    category: "piel",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Crema Hidratante Premium",
    price: 44.99,
    category: "piel",
    rating: 5,
    image: "/crema-hidratante-premium.png",
  },
  {
    id: 9,
    name: "Delineador Líquido Negro",
    price: 19.99,
    category: "ojos",
    rating: 4,
    image: "/delineador-liquido-negro.png",
  },
  {
    id: 10,
    name: "Iluminador Dorado",
    price: 34.99,
    category: "rostro",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Bálsamo Labial Hidratante",
    price: 14.99,
    category: "labios",
    rating: 4,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Mascarilla Facial Detox",
    price: 29.99,
    category: "piel",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=80",
  },
]

export default function LuminaLanding() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <FloatingParticles />
      <Navbar
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
