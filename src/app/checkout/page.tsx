"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { ArrowLeft, CreditCard, Truck, MapPin, User, Building2, Phone, Mail, CheckCircle2, Package } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

function formatPrice(amount: number) {
  return "Gs. " + amount.toLocaleString("es-PY");
}

const zonasEntrega = [
  { id: "asuncion", name: "Asunción", costo: 15000, tiempo: "24-48 horas" },
  { id: "gran_asuncion", name: "Gran Asunción (Fernando de la Mora, Lambaré, Luque, San Lorenzo, Ñemby, Villa Elisa)", costo: 25000, tiempo: "48-72 horas" },
  { id: "interior", name: "Interior del país", costo: 0, tiempo: "3-5 días hábiles (a coordinar)" },
];

const metodosPago = [
  { id: "transferencia", name: "Transferencia bancaria", desc: "Te enviamos los datos para transferir" },
  { id: "tigo_money", name: "Tigo Money", desc: "Pago desde tu celular" },
  { id: "bancard", name: "Tarjeta de crédito/débito", desc: "Pago seguro con Bancard" },
  { id: "efectivo", name: "Efectivo contra entrega", desc: "Solo Asunción y Gran Asunción" },
];

export default function CheckoutPage() {
  const { items, subtotal, total, shipping } = useCart();
  const [step, setStep] = useState(1);
  const [zona, setZona] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    ruc: "",
    telefono: "",
    email: "",
    direccion: "",
    ciudad: "",
    referencia: "",
    notas: "",
  });

  const zonaSeleccionada = zonasEntrega.find((z) => z.id === zona);
  const envioCosto = zonaSeleccionada ? zonaSeleccionada.costo : shipping;
  const totalFinal = subtotal + envioCosto;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStep1Valid = formData.nombre && formData.apellido && formData.telefono && formData.direccion && formData.ciudad;
  const isStep2Valid = zona && metodoPago;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 text-center">
          <Package className="h-20 w-20 text-slate-200" />
          <h1 className="mt-4 text-2xl font-bold">Tu carrito está vacío</h1>
          <p className="mt-2 text-slate-500">Agregá productos antes de continuar con el pago</p>
          <Link href="/" className="mt-6 rounded-xl bg-red-600 px-8 py-3 text-sm font-bold text-white hover:bg-red-700">
            Ver productos
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/carrito" className="flex items-center gap-1 hover:text-red-600">
            <ArrowLeft className="h-4 w-4" /> Volver al carrito
          </Link>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">Finalizar compra</h1>

        {/* Steps */}
        <div className="mt-6 flex items-center gap-4">
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${step >= 1 ? "bg-red-600 text-white" : "bg-slate-200 text-slate-500"}`}>
            <User className="h-4 w-4" /> 1. Tus datos
          </div>
          <div className="h-px flex-1 bg-slate-200" />
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${step >= 2 ? "bg-red-600 text-white" : "bg-slate-200 text-slate-500"}`}>
            <Truck className="h-4 w-4" /> 2. Envío y pago
          </div>
          <div className="h-px flex-1 bg-slate-200" />
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${step >= 3 ? "bg-red-600 text-white" : "bg-slate-200 text-slate-500"}`}>
            <CheckCircle2 className="h-4 w-4" /> 3. Confirmar
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Formulario */}
          <div className="space-y-6">
            {step === 1 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold">Datos de facturación</h2>
                <p className="text-sm text-slate-500">Completá tus datos para generar la factura</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Nombre *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Juan" className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Apellido *</label>
                    <input name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Pérez" className="w-full rounded-lg border border-slate-200 py-2.5 px-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">RUC (opcional)</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input name="ruc" value={formData.ruc} onChange={handleChange} placeholder="1234567-8" className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Teléfono *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+595 981 000 000" className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="juan@email.com" className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                  </div>
                </div>

                <h2 className="mt-8 text-lg font-bold">Dirección de entrega</h2>
                <div className="mt-4 grid gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Dirección *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Av. Mariscal López 1234, esquina..." className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Ciudad/Barrio *</label>
                      <input name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Asunción - Villa Morra" className="w-full rounded-lg border border-slate-200 py-2.5 px-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Referencia</label>
                      <input name="referencia" value={formData.referencia} onChange={handleChange} placeholder="Casa blanca, portón negro..." className="w-full rounded-lg border border-slate-200 py-2.5 px-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Notas adicionales</label>
                    <textarea name="notas" value={formData.notas} onChange={handleChange} rows={3} placeholder="Indicaciones especiales para la entrega..." className="w-full rounded-lg border border-slate-200 py-2.5 px-4 text-sm outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100" />
                  </div>
                </div>

                {/* MAPA DE GOOGLE MAPS */}
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Ubicación en el mapa</label>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3586!2d-57.5759!3d-25.3005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAxLjgiUyA1N8KwMzQnMzMuMiJX!5e0!3m2!1ses!2spy!4v1600000000000!5m2!1ses!2spy"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa de entrega"
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">El mapa muestra la zona de cobertura. La entrega se realizará en la dirección indicada arriba.</p>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!isStep1Valid}
                  className="mt-6 w-full rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar con envío y pago
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {/* Zona de entrega */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h2 className="flex items-center gap-2 text-lg font-bold">
                    <Truck className="h-5 w-5 text-red-600" /> Zona de entrega
                  </h2>
                  <div className="mt-4 space-y-3">
                    {zonasEntrega.map((z) => (
                      <label
                        key={z.id}
                        onClick={() => setZona(z.id)}
                        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                          zona === z.id ? "border-red-600 bg-red-50" : "border-slate-200 hover:border-red-200"
                        }`}
                      >
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          zona === z.id ? "border-red-600 bg-red-600" : "border-slate-300"
                        }`}>
                          {zona === z.id && <div className="h-2 w-2 rounded-full bg-white" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900">{z.name}</p>
                          <p className="text-sm text-slate-500">{z.tiempo}</p>
                        </div>
                        <span className="font-bold text-red-600">
                          {z.costo === 0 ? "A coordinar" : formatPrice(z.costo)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Método de pago */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h2 className="flex items-center gap-2 text-lg font-bold">
                    <CreditCard className="h-5 w-5 text-red-600" /> Método de pago
                  </h2>
                  <div className="mt-4 space-y-3">
                    {metodosPago.map((m) => (
                      <label
                        key={m.id}
                        onClick={() => setMetodoPago(m.id)}
                        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                          metodoPago === m.id ? "border-red-600 bg-red-50" : "border-slate-200 hover:border-red-200"
                        }`}
                      >
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          metodoPago === m.id ? "border-red-600 bg-red-600" : "border-slate-300"
                        }`}>
                          {metodoPago === m.id && <div className="h-2 w-2 rounded-full bg-white" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900">{m.name}</p>
                          <p className="text-sm text-slate-500">{m.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50">
                    Volver
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!isStep2Valid}
                    className="flex-1 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Revisar y confirmar
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold">Confirmá tu pedido</h2>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h3 className="text-sm font-bold text-slate-700">Datos de facturación</h3>
                    <p className="mt-1 text-sm text-slate-600">{formData.nombre} {formData.apellido}</p>
                    {formData.ruc && <p className="text-sm text-slate-600">RUC: {formData.ruc}</p>}
                    <p className="text-sm text-slate-600">{formData.telefono}</p>
                    {formData.email && <p className="text-sm text-slate-600">{formData.email}</p>}
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <h3 className="text-sm font-bold text-slate-700">Dirección de entrega</h3>
                    <p className="mt-1 text-sm text-slate-600">{formData.direccion}</p>
                    <p className="text-sm text-slate-600">{formData.ciudad}</p>
                    {formData.referencia && <p className="text-sm text-slate-600">Ref: {formData.referencia}</p>}
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <h3 className="text-sm font-bold text-slate-700">Envío</h3>
                    <p className="text-sm text-slate-600">{zonaSeleccionada?.name}</p>
                    <p className="text-sm text-slate-600">{zonaSeleccionada?.tiempo}</p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <h3 className="text-sm font-bold text-slate-700">Pago</h3>
                    <p className="text-sm text-slate-600">{metodosPago.find((m) => m.id === metodoPago)?.name}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(2)} className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50">
                    Volver
                  </button>
                  <button className="flex-1 rounded-xl bg-green-600 py-3.5 text-sm font-bold text-white transition hover:bg-green-700">
                    Confirmar pedido
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Resumen lateral */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold">Resumen</h2>
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-bold line-clamp-1">{item.name}</p>
                    <p className="text-xs text-slate-400">Cant: {item.quantity}</p>
                    <p className="text-sm font-bold text-red-600">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-slate-100 pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Envío</span>
                  <span className="font-bold">
                    {envioCosto === 0 ? (zona === "interior" ? "A coordinar" : "GRATIS") : formatPrice(envioCosto)}
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-red-600">{formatPrice(totalFinal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
