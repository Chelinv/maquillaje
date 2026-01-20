"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Maquilladora Profesional",
    content:
      "Los productos de Lumina han transformado mi kit de maquillaje. La calidad es excepcional y mis clientas siempre quedan encantadas con los resultados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Influencer de Belleza",
    content:
      "Desde que descubrí Lumina, no he vuelto a usar otra marca. Los colores son vibrantes, la duración es increíble y mi piel se siente cuidada.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Carmen López",
    role: "Diseñadora de Moda",
    content:
      "La elegancia y sofisticación de Lumina se refleja en cada producto. Es mi marca favorita para eventos especiales.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Laura Sánchez",
    role: "Empresaria",
    content:
      "Busco productos que sean rápidos de aplicar pero que luzcan profesionales. Lumina cumple con todo eso y más. ¡Totalmente recomendado!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section id="testimonios" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Lo Que Dicen Nuestras Clientas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Descubre por qué miles de mujeres eligen Lumina
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12">
                    <Quote className="mb-6 size-10 text-primary/30" />
                    <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="size-14 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-card shadow-lg md:-left-6"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-card shadow-lg md:-right-6"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="size-5" />
          </Button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "size-2.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
