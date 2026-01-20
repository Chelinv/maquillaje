"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-secondary"
    >
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
              Nueva Colección 2025
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance animate-slide-up">
              Redefine tu Brillo Natural
            </h1>
            
            {/* Valoraciones - ahora más cerca del título */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-5 lg:justify-start animate-slide-up animation-delay-100">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground md:text-3xl">15K+</p>
                <p className="text-xs text-muted-foreground md:text-sm">Clientas Felices</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground md:text-3xl">100%</p>
                <p className="text-xs text-muted-foreground md:text-sm">Cruelty Free</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground md:text-3xl">4.9★</p>
                <p className="text-xs text-muted-foreground md:text-sm">Valoración</p>
              </div>
            </div>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty animate-slide-up animation-delay-200">
              Descubre nuestra colección de maquillaje premium, formulado con ingredientes de alta calidad para realzar tu belleza natural.
            </p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row animate-slide-up animation-delay-300">
              <Button
                size="lg"
                className="rounded-xl px-8 text-base font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                asChild
              >
                <a href="#productos">Comprar Ahora</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8 text-base font-medium transition-all duration-300 hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent"
              >
                Ver Colección
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in animation-delay-200">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1000&fit=crop&q=80"
                alt="Colección de maquillaje Lumina - productos premium de belleza"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card p-4 shadow-xl md:-left-8 md:p-6 animate-float">
              <p className="text-xs text-muted-foreground">Más Vendido</p>
              <p className="font-serif text-lg font-semibold text-foreground">Labial Velvet Rose</p>
              <p className="text-primary font-bold">$29.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
