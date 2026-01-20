"use client"

import { useState } from "react"
import { ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CartSheet } from "@/components/cart-sheet"

interface NavbarProps {
  cartItems: CartItem[]
  onRemoveFromCart: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export function Navbar({ cartItems, onRemoveFromCart, onUpdateQuantity }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Productos", href: "#productos" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#newsletter" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold tracking-wide text-foreground">
          LUMINA
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-2">
          <CartSheet
            cartItems={cartItems}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateQuantity={onUpdateQuantity}
          >
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label={`Tu carrito con ${totalItems} artículos`}
            >
              <ShoppingBag className="size-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </CartSheet>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] bg-background">
              <SheetHeader>
                <SheetTitle className="font-serif text-xl">LUMINA</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
