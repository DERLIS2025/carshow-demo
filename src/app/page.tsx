import { Search, ShoppingCart, Menu, X, ChevronRight, Truck, Shield, MessageCircle, Headphones, Star, Zap, Gift, Wrench, Car, Volume2, Lightbulb, Camera, LayoutGrid, Settings, Percent, Ticket, CheckCircle2, ArrowRight, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const topBarItems = [
  { icon: Truck, text: "Envíos a todo Paraguay" },
  { icon: Shield, text: "Productos seleccionados" },
  { icon: MessageCircle, text: "Atención por WhatsApp" },
  { icon: Headphones, text: "Asesoría técnica gratuita" },
];

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Promociones", href: "/promociones" },
  { name: "Sorteos", href: "https://sorteocarshow.com.py/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const categories = [
  { name: "Audio y multimedia", icon: Volume2, description: "Radios, parlantes y sistemas de sonido", count: "24 productos", href: "/categoria/audio" },
  { name: "Luces LED", icon: Lightbulb, description: "Kits, barras y faros auxiliares", count: "18 productos", href: "/categoria/luces" },
  { name: "Cámaras y sensores", icon: Camera, description: "Retroceso, estacionamiento y 360°", count: "12 productos", href: "/categoria/camaras" },
  { name: "Accesorios interiores", icon: LayoutGrid, description: "Alfombras, organizadores y confort", count: "31 productos", href: "/categoria/interiores" },
  { name: "Accesorios exteriores", icon: Car, description: "Barras, estribos y protección", count: "22 productos", href: "/categoria/exteriores" },
  { name: "Seguridad", icon: Shield, description: "Alarmas, sensores y cámaras", count: "15 productos", href: "/categoria/seguridad" },
  { name: "Herramientas", icon: Wrench, description: "Equipamiento para taller y ruta", count: "9 productos", href: "/categoria/herramientas" },
  { name: "Promociones", icon: Percent, description: "Descuentos y combos especiales", count: "Ver ahora", href: "/promociones", highlight: true },
];

const products = [
  {
    name: "Kit LED H4 Alta/Baja 12.000lm",
    price: "Gs. 185.000",
    oldPrice: "Gs. 220.000",
    category: "Luces LED",
    badge: "Nuevo",
    badgeColor: "bg-slate-800 text-white",
    compatibility: "Universal H4",
    image: "bg-gradient-to-br from-slate-100 to-slate-200",
    whatsappText: "Hola, me interesa el Kit LED H4 Alta/Baja",
  },
  {
    name: "Cámara de retroceso HD 1080p",
    price: "Gs. 240.000",
    category: "Seguridad",
    badge: "Más vendido",
    badgeColor: "bg-emerald-600 text-white",
    compatibility: "Universal",
    image: "bg-gradient-to-br from-slate-100 to-slate-200",
    whatsappText: "Hola, me interesa la Cámara de retroceso HD",
  },
  {
    name: "Radio multimedia Android 10"",
    price: "Gs. 1.450.000",
    oldPrice: "Gs. 1.650.000",
    category: "Audio y multimedia",
    badge: "Promo",
    badgeColor: "bg-red-600 text-white",
    compatibility: "Varios modelos",
    image: "bg-gradient-to-br from-slate-100 to-slate-200",
    whatsappText: "Hola, me interesa la Radio multimedia Android",
  },
  {
    name: "Alfombra universal premium 3D",
    price: "Gs. 160.000",
    category: "Accesorios interiores",
    badge: "Nuevo",
    badgeColor: "bg-slate-800 text-white",
    compatibility: "Universal",
    image: "bg-gradient-to-br from-slate-100 to-slate-200",
    whatsappText: "Hola, me interesa la Alfombra universal premium",
  },
  {
    name: "Sensor de estacionamiento 4 pts",
    price: "Gs. 320.000",
    oldPrice: "Gs. 380.000",
    category: "Seguridad",
    badge: "Más vendido",
    badgeColor: "bg-emerald-600 text-white",
    compatibility: "Universal",
    image: "bg-gradient-to-br from-slate-100 to-slate-200",
    whatsappText: "Hola, me interesa el Sensor de estacionamiento",
  },
  {
    name: "Barra LED auxiliar 72W",
    price: "Gs. 390.000",
    oldPrice: "Gs. 450.000",
    category: "Accesorios exteriores",
    badge: "Promo",
    badgeColor: "bg-red-600 text-white",
    compatibility: "4x4 / Pickup",
    image: "bg-gradient-to-br from-slate-100 to-slate-200",
    whatsappText: "Hola, me interesa la Barra LED auxiliar",
  },
];

const promos = [
  {
    title: "Promo multimedia",
    subtitle: "Hasta 20% OFF",
    detail: "En radios Android y kits de instalación. Instalación incluida en seleccionados.",
    tag: "OFERTA LIMITADA",
    bg: "bg-gradient-to-br from-red-50 to-red-100/50",
    border: "border-red-200",
    accent: "text-red-600",
  },
  {
    name: "Semana de iluminación",
    subtitle: "2x1 en lámparas",
    detail: "Llevá 2 lámparas LED y pagá 1. Descuentos adicionales en barras LED.",
    tag: "2X1",
    bg: "bg-gradient-to-br from-amber-50 to-amber-100/50",
    border: "border-amber-200",
    accent: "text-amber-600",
  },
  {
    name: "Accesorios interiores",
    subtitle: "Financiación disponible",
    detail: "Hasta 6 cuotas sin interés en combos premium de interiores.",
    tag: "CUOTAS",
    bg: "bg-gradient-to-br from-slate-50 to-slate-100/50",
    border: "border-slate-200",
    accent: "text-slate-700",
  },
];

const combos = [
  {
    name: "Combo iluminación completo",
    items: ["Kit LED H4", "Barra auxiliar 72W", "Instalación recomendada"],
    price: "Gs. 520.000",
    oldPrice: "Gs. 635.000",
    savings: "Ahorrás Gs. 115.000",
    icon: Lightbulb,
  },
  {
    name: "Combo seguridad total",
    items: ["Cámara HD retroceso", "Sensores 4 puntos", "Asesoría de montaje"],
    price: "Gs. 690.000",
    oldPrice: "Gs. 860.000",
    savings: "Ahorrás Gs. 170.000",
    icon: Shield,
  },
  {
    name: "Combo interior premium",
    items: ["Alfombras 3D", "Organizadores", "Detalles de confort"],
    price: "Gs. 450.000",
    oldPrice: "Gs. 520.000",
    savings: "Ahorrás Gs. 70.000",
    icon: Star,
  },
];

const trustFeatures = [
  { icon: Headphones, title: "Compra asesorada", desc: "Te ayudamos a elegir el accesorio ideal para tu vehículo" },
  { icon: Zap, title: "Atención rápida", desc: "Respuesta en minutos por WhatsApp durante horario comercial" },
  { icon: CheckCircle2, title: "Productos seleccionados", desc: "Solo equipamientos probados y con garantía" },
  { icon: Wrench, title: "Instalación recomendada", desc: "Asesoría técnica y referencias de instaladores" },
];

const footerLinks = {
  productos: [
    { name: "Audio y multimedia", href: "/categoria/audio" },
    { name: "Luces LED", href: "/categoria/luces" },
    { name: "Cámaras y sensores", href: "/categoria/camaras" },
    { name: "Accesorios interiores", href: "/categoria/interiores" },
    { name: "Accesorios exteriores", href: "/categoria/exteriores" },
    { name: "Seguridad", href: "/categoria/seguridad" },
  ],
  empresa: [
    { name: "Sobre nosotros", href: "/nosotros" },
    { name: "Promociones", href: "/promociones" },
    { name: "Sorteos", href: "https://sorteocarshow.com.py/" },
    { name: "Contacto", href: "/contacto" },
  ],
};

const whatsappNumber = "595981000000";
const whatsappUrl = (text: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* TOP BAR */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-6 px-4 py-2 text-xs sm:px-6 lg:px-8">
          {topBarItems.map((item) => (
            <div key={item.text} className="hidden items-center gap-1.5 sm:flex">
              <item.icon className="h-3.5 w-3.5 text-red-500" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 sm:hidden">
            <Truck className="h-3.5 w-3.5 text-red-500" />
            <span className="font-medium">Envíos a todo Paraguay · WhatsApp · Asesoría</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex shrink-0 flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">Paraguay</span>
            <span className="text-lg font-black tracking-[0.15em] text-slate-900">CAR SHOW</span>
          </a>

          {/* Buscador */}
          <div className="hidden flex-1 max-w-xl lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar productos, categorías..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-2 ml-auto">
            <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden">
              <Search className="h-5 w-5" />
            </button>
            <a
              href={whatsappUrl("Hola CAR SHOW, quiero hacer una consulta")}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:flex"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 xl:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Buscador mobile */}
        <div className="border-t border-slate-100 px-4 py-2 lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none"
            />
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:px-8 lg:py-20">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5">
                <Zap className="h-3.5 w-3.5 text-red-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Equipamientos automotrices premium</span>
              </div>
              <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                Potenciá tu vehículo con accesorios de alto rendimiento
              </h1>
              <p className="mx-auto max-w-xl text-base text-slate-300 lg:mx-0">
                Encontrá productos confiables, asesoría real y promociones comerciales para que tu auto luzca y funcione al máximo nivel.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Ver productos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappUrl("Hola CAR SHOW, quiero hacer una consulta sobre productos")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>

            {/* Trust badges en hero */}
            <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto lg:grid-cols-1 lg:gap-4">
              {[
                { icon: Truck, label: "Envíos a todo Paraguay" },
                { icon: Shield, label: "Productos con garantía" },
                { icon: Headphones, label: "Asesoría técnica" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 backdrop-blur"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-sm font-medium text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Categorías destacadas</h2>
              <p className="mt-2 text-slate-500">Encontrá lo que necesitás por tipo de equipamiento</p>
            </div>
            <a href="/productos" className="hidden items-center gap-1 text-sm font-semibold text-red-600 transition hover:text-red-700 sm:flex">
              Ver todo <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className={`group relative overflow-hidden rounded-xl border p-5 transition hover:shadow-lg ${
                  cat.highlight
                    ? "border-red-200 bg-gradient-to-br from-red-50 to-red-100/50"
                    : "border-slate-200 bg-white hover:border-red-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-lg p-2.5 ${cat.highlight ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-red-600"}`}>
                    <cat.icon className="h-5 w-5" />
                  </div>
                  {cat.highlight && <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Hot</span>}
                </div>
                <h3 className={`mt-4 font-bold ${cat.highlight ? "text-red-700" : "text-slate-900"}`}>{cat.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
                <p className={`mt-3 text-xs font-semibold ${cat.highlight ? "text-red-600" : "text-slate-400"}`}>{cat.count}</p>
              </a>
            ))}
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS */}
        <section id="productos" className="bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Productos destacados</h2>
                <p className="mt-2 text-slate-500">Los más elegidos por nuestros clientes</p>
              </div>
              <a href="/productos" className="hidden items-center gap-1 text-sm font-semibold text-red-600 transition hover:text-red-700 sm:flex">
                Ver catálogo completo <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-red-200 hover:shadow-xl"
                >
                  {/* Imagen */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <div className={`h-full w-full ${product.image} flex items-center justify-center`}>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-sm">
                        <Settings className="h-8 w-8 text-slate-300" />
                      </div>
                    </div>
                    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    {product.oldPrice && (
                      <span className="absolute right-3 top-3 rounded-full bg-red-600 px-2 py-1 text-[11px] font-bold text-white">
                        -{Math.round((parseInt(product.oldPrice.replace(/[^0-9]/g, "")) - parseInt(product.price.replace(/[^0-9]/g, ""))) / parseInt(product.oldPrice.replace(/[^0-9]/g, "")) * 100)}%
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{product.category}</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-red-600 transition">{product.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">Compatible: {product.compatibility}</p>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-slate-900">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-slate-400 line-through">{product.oldPrice}</span>
                      )}
                    </div>

                    <div className="mt-auto flex flex-col gap-2 pt-4">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Ver producto
                      </a>
                      <a
                        href={whatsappUrl(product.whatsappText)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Consultar por WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <a href="/productos" className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                Ver catálogo completo <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* PROMOCIONES */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Promociones destacadas</h2>
            <p className="mt-2 text-slate-500">Aprovechá antes de que terminen</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {promos.map((promo) => (
              <article
                key={promo.title}
                className={`relative overflow-hidden rounded-2xl border ${promo.border} ${promo.bg} p-6 transition hover:shadow-lg`}
              >
                <div className="mb-3 inline-block rounded-md bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                  {promo.tag}
                </div>
                <h3 className={`text-xl font-bold ${promo.accent}`}>{promo.title}</h3>
                <p className="mt-1 text-lg font-semibold text-slate-700">{promo.subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{promo.detail}</p>
                <a
                  href="/promociones"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-slate-800 transition hover:gap-2"
                >
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SORTEOS */}
        <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100/30">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:px-8 lg:py-20">
            <div className="flex-1 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5">
                <Gift className="h-4 w-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Sorteos CAR SHOW</span>
              </div>
              <h2 className="text-3xl font-bold text-amber-900 sm:text-4xl">
                Participá por equipamientos premium y experiencias exclusivas
              </h2>
              <p className="mx-auto max-w-xl text-amber-800/80 lg:mx-0">
                Integramos la energía de sorteocarshow.com.py para impulsar campañas de alto impacto con premios reales para nuestra comunidad automotriz.
              </p>
              <a
                href="https://sorteocarshow.com.py/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-amber-950 transition hover:bg-amber-400"
              >
                <Ticket className="h-4 w-4" />
                Ver sorteos activos
              </a>
            </div>
            <div className="flex shrink-0 items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-amber-200/50 blur-2xl" />
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-xl sm:h-48 sm:w-48">
                  <Gift className="h-16 w-16 text-amber-50 sm:h-20 sm:w-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMBOS */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Combos recomendados</h2>
            <p className="mt-2 text-slate-500">Soluciones completas con precio especial</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {combos.map((combo) => (
              <article
                key={combo.name}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-red-200 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-50 p-2.5">
                    <combo.icon className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{combo.name}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {combo.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-red-600">{combo.price}</span>
                  <span className="text-sm text-slate-400 line-through">{combo.oldPrice}</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-emerald-600">{combo.savings}</p>
                <a
                  href={whatsappUrl(`Hola, me interesa el ${combo.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar combo
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CONFIANZA */}
        <section className="bg-slate-900 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">¿Por qué elegir CAR SHOW?</h2>
              <p className="mt-2 text-slate-400">Más de 5 años equipando vehículos en Paraguay</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 text-center transition hover:border-red-500/30">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                    <feature.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mt-4 font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Marca */}
            <div className="lg:col-span-1">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">Paraguay</span>
                <span className="text-xl font-black tracking-[0.15em] text-slate-900">CAR SHOW</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Equipamientos y accesorios automotrices en Paraguay con enfoque comercial, asesoría personalizada y confianza garantizada.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="https://instagram.com/carshowpy" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-100 p-2 text-slate-600 transition hover:bg-red-50 hover:text-red-600">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-lg bg-slate-100 p-2 text-slate-600 transition hover:bg-red-50 hover:text-red-600">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={whatsappUrl("Hola CAR SHOW")} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-100 p-2 text-slate-600 transition hover:bg-red-50 hover:text-red-600">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links productos */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Productos</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-slate-500 transition hover:text-red-600">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links empresa */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Empresa</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-slate-500 transition hover:text-red-600">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-slate-500">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  Asunción, Paraguay
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-500">
                  <Phone className="h-4 w-4 shrink-0 text-red-500" />
                  +595 981 000 000
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-500">
                  <MessageCircle className="h-4 w-4 shrink-0 text-red-500" />
                  ventas@carshow.com.py
                </li>
              </ul>
              <a
                href={whatsappUrl("Hola CAR SHOW, quiero hacer una consulta")}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
            © 2024 CAR SHOW Equipamientos. Todos los derechos reservados. Paraguay.
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={whatsappUrl("Hola CAR SHOW, quiero hacer una consulta")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition hover:scale-110 hover:bg-green-600"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
