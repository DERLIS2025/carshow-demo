"use client";

import { useCart } from "@/components/CartProvider";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

function formatPrice(amount: number) {
  return "Gs. " + amount.toLocaleString("es-PY");
}

export default function CarritoPage() {
  const { items, subtotal, shipping, total, updateQuantity, removeItem } = useCart();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Tu carrito de compras</h1>

        {items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center">
            <ShoppingCart className="h-20 w-20 text-slate-200" />
            <p className="mt-4 text-lg text-slate-500">Tu carrito está vacío</p>
            <p className="mt-2 text-sm text-slate-400">Agregá productos para empezar tu compra</p>
            <Link href="/" className="mt-6 rounded-xl bg-red-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-red-700">
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Lista de productos */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900">{item.name}</h3>
                        <p className="text-xs text-slate-400">{item.sku} · {item.category}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="rounded-lg p-2 text-red-500 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-lg font-extrabold text-red-600">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen */}
            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold">Resumen de compra</h2>

              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} productos)</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Envío</span>
                  <span className="font-bold">{shipping === 0 ? "GRATIS" : formatPrice(shipping)}</span>
                </div>
                {subtotal < 500000 && (
                  <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
                    <Truck className="mb-1 h-4 w-4" />
                    Te faltan {formatPrice(500000 - subtotal)} para envío gratis
                  </div>
                )}
                <div className="border-t border-slate-100 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-red-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white transition hover:bg-red-700">
                Continuar al pago <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/" className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50">
                Seguir comprando
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
