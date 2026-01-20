"use client"

import React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* Section Header */}
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Suscríbete a Nuestras Novedades
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sé la primera en conocer nuestros nuevos productos, ofertas
            exclusivas y consejos de belleza.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <CheckCircle className="size-12 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                ¡Gracias por suscribirte!
              </h3>
              <p className="text-muted-foreground">
                Pronto recibirás nuestras novedades en tu correo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="relative mx-auto max-w-md">
                {/* Floating Label Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="peer w-full rounded-xl border-2 border-border bg-card px-4 pb-2 pt-6 text-foreground transition-all duration-300 placeholder:text-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="tu@email.com"
                    required
                    aria-label="Correo electrónico"
                  />
                  <label
                    htmlFor="email"
                    className={cn(
                      "absolute left-4 transition-all duration-300 pointer-events-none",
                      isFocused || email
                        ? "top-2 text-xs text-primary"
                        : "top-1/2 -translate-y-1/2 text-muted-foreground"
                    )}
                  >
                    Tu correo electrónico
                  </label>
                </div>

                <Button
                  type="submit"
                  className="mt-4 w-full rounded-xl px-8 text-base font-medium shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  size="lg"
                >
                  <Send className="mr-2 size-4" />
                  Suscribirme
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Al suscribirte, aceptas recibir correos de Lumina. Puedes
                cancelar en cualquier momento.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
