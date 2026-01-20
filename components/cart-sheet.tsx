"use client"

import React from "react"

import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import type { CartItem } from "@/components/navbar"

interface CartSheetProps {
  children: React.ReactNode
  cartItems: CartItem[]
  onRemoveFromCart: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}

export function CartSheet({
  children,
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
}: CartSheetProps) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col bg-background sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl">Tu Carrito</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-muted-foreground">Tu carrito está vacío</p>
              <p className="mt-2 text-sm text-muted-foreground">
                ¡Añade productos para comenzar!
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-xl border border-border bg-card p-3"
                >
                  <div className="size-20 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-sm text-primary font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon-sm"
                          onClick={() =>
                            onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                          }
                          aria-label="Reducir cantidad"
                          className="size-7"
                        >
                          <Minus className="size-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon-sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                          className="size-7"
                        >
                          <Plus className="size-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => onRemoveFromCart(item.id)}
                        aria-label="Eliminar del carrito"
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <SheetFooter className="border-t border-border pt-4">
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span className="text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <Button className="w-full rounded-xl text-base" size="lg">
                Proceder al Pago
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Envío e impuestos calculados en el checkout
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
