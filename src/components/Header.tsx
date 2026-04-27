"use client";

import { Search, ShoppingCart, Menu, MessageCircle, X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Promociones", href: "/promociones" },
  { name: "Sorteos", href: "https://sorteocarshow.com.py/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const whatsappNumber = "595981000000";
const whatsappUrl = (text: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

function formatPrice(amount: number) {
  return "Gs. " + amount.toLocaleString("es-PY");
}

export default function Header() {
  const { items, totalItems, subtotal, shipping, total, removeItem, updateQuantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-6 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="text-red-500">🚚</span>
            <span className="font-medium">Envíos a todo Paraguay</span>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="text-red-500">✅</span>
            <span className="font-medium">Garantía en todos los productos</span>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="text-red-500">💬</span>
            <span className="font-medium">Atención por WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5 sm:hidden">
            <span className="text-red-500">🚚</span>
            <span className="font-medium">Envíos · Garantía · WhatsApp</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">Paraguay</span>
            <span className="text-xl font-black tracking-[0.12em] text-slate-900">RD AUTOREPUESTO</span>
          </Link>

          <div className="hidden flex-1 max-w-xl lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar repuestos, marcas, categorías..." className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-100" />
            </div>
          </div>

          <nav className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">{item.name}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden">
              <Search className="h-5 w-5" />
            </button>

            {/* CARRITO */}
            <button 
              onClick={() => setCartOpen(true)}
              className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>

            <a href={whatsappUrl("Hola RD AUTOREPUESTO, quiero hacer una consulta")} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:flex">
              <MessageCircle className="h-4 w-4" /><span>WhatsApp</span>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 xl:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 py-2 lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Buscar repuestos..." className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none" />
          </div>
        </div>
      </header>

      {/* DRAWER DEL CARRITO */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setCartOpen(false)} />
          <div className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-bold">Tu carrito ({totalItems})</h2>
              <button onClick={() => setCartOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <ShoppingCart className="h-16 w-16 text-slate-200" />
                  <p className="mt-4 text-slate-500">Tu carrito está vacío</p>
                  <button onClick={() => setCartOpen(false)} className="mt-4 rounded-lg bg-red-600 px-6 py-2 text-sm font-bold text-white hover:bg-red-700">
                    Seguir comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 rounded-xl border border-slate-200 p-3">
                      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-slate-900 line-clamp-2">{item.name}</h3>
                        <p className="text-xs text-slate-400">{item.sku}</p>
                        <p className="mt-1 text-sm font-extrabold text-red-600">{formatPrice(item.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-lg border border-slate-200 p-1 hover:bg-slate-100">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-lg border border-slate-200 p-1 hover:bg-slate-100">
                            <Plus className="h-3 w-3" />
                          </button>
                          <button onClick={() => removeItem(item.id)} className="ml-auto rounded-lg p-1 text-red-500 hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-slate-200 px-6 py-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Envío</span>
                  <span className="font-bold">{shipping === 0 ? "GRATIS" : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-red-600">{formatPrice(total)}</span>
                </div>
                {subtotal < 500000 && (
                  <p className="text-xs text-slate-400">Te faltan {formatPrice(500000 - subtotal)} para envío gratis</p>
                )}
                <Link 
                  href="/checkout" 
                  onClick={() => setCartOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-red-600 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Finalizar compra
                </Link>
                <button onClick={() => setCartOpen(false)} className="w-full rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50">
                  Seguir comprando
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
