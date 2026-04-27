import { Search, ShoppingCart, Menu, ChevronRight, Truck, Shield, MessageCircle, Headphones, Star, Zap, Gift, Wrench, Car, Volume2, Lightbulb, Camera, LayoutGrid, Settings, Percent, Ticket, CheckCircle2, ArrowRight, Phone, MapPin, Heart, Eye } from "lucide-react";

const topBarItems = [
  { icon: Truck, text: "Envíos a todo Paraguay" },
  { icon: Shield, text: "Garantía en todos los productos" },
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

// Categorías con imágenes reales de Unsplash
const categories = [
  { name: "Frenos y Discos", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop", count: "42 productos", href: "/categoria/frenos" },
  { name: "Suspensión", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop", count: "28 productos", href: "/categoria/suspension" },
  { name: "Llantas y Neumáticos", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop", count: "56 productos", href: "/categoria/llantas" },
  { name: "Faros y Luces", image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop", count: "35 productos", href: "/categoria/faros" },
  { name: "Audio y Multimedia", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop", count: "24 productos", href: "/categoria/audio" },
  { name: "Volantes y Interiores", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop", count: "19 productos", href: "/categoria/interiores" },
];

// Productos reales de ejemplo con imágenes reales
const featuredProducts = [
  {
    name: "Disco de Freno Brembo Ventilado 320mm",
    price: "Gs. 890.000",
    oldPrice: "Gs. 1.150.000",
    category: "Frenos",
    badge: "Más vendido",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
    sku: "BREM-320-VEN",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Disco de Freno Brembo Ventilado 320mm",
  },
  {
    name: "Amortiguador KYB Excel-G Delantero",
    price: "Gs. 420.000",
    oldPrice: "Gs. 520.000",
    category: "Suspensión",
    badge: "Promo",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    sku: "KYB-EXG-DEL",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Amortiguador KYB Excel-G Delantero",
  },
  {
    name: "Llanta Aleación 17 pulgadas Sport Racing",
    price: "Gs. 1.850.000",
    category: "Llantas",
    badge: "Nuevo",
    badgeColor: "bg-slate-800",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    sku: "LLA-17-SPR",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Llanta Aleación 17 Sport Racing",
  },
  {
    name: "Farola LED OSRAM Night Breaker H4",
    price: "Gs. 285.000",
    oldPrice: "Gs. 350.000",
    category: "Iluminación",
    badge: "Promo",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=400&fit=crop",
    sku: "OSR-NB-H4",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Farola LED OSRAM Night Breaker H4",
  },
  {
    name: "Kit de Embrague Valeo Premium",
    price: "Gs. 1.250.000",
    oldPrice: "Gs. 1.480.000",
    category: "Transmisión",
    badge: "Más vendido",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=400&fit=crop",
    sku: "VAL-EMB-PRE",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Kit de Embrague Valeo Premium",
  },
  {
    name: "Batería Moura 60Ah Free Maintenance",
    price: "Gs. 680.000",
    category: "Eléctrico",
    badge: "Nuevo",
    badgeColor: "bg-slate-800",
    image: "https://images.unsplash.com/photo-1616423664074-907f88512b91?w=400&h=400&fit=crop",
    sku: "MOUR-60-FM",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Batería Moura 60Ah Free Maintenance",
  },
  {
    name: "Pastillas de Freno TRW Cerámica",
    price: "Gs. 320.000",
    oldPrice: "Gs. 395.000",
    category: "Frenos",
    badge: "Promo",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop",
    sku: "TRW-PAS-CER",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Pastillas de Freno TRW Cerámica",
  },
  {
    name: "Neumático Michelin Primacy 4 205/55 R16",
    price: "Gs. 1.450.000",
    category: "Neumáticos",
    badge: "Más vendido",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400&h=400&fit=crop",
    sku: "MIC-PR4-205",
    whatsappText: "Hola RD AUTOREPUESTO, consulto por Neumático Michelin Primacy 4",
  },
];

// Flash Deals
const flashDeals = [
  {
    name: "Kit Frenos Completo Brembo",
    price: "Gs. 2.100.000",
    oldPrice: "Gs. 2.650.000",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=300&fit=crop",
    endsIn: "2 días",
    sold: 78,
    total: 100,
  },
  {
    name: "Suspensión Deportiva Eibach",
    price: "Gs. 3.200.000",
    oldPrice: "Gs. 3.900.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&h=300&fit=crop",
    endsIn: "5 días",
    sold: 45,
    total: 80,
  },
];

// Best sellers adicionales
const bestSellers = [
  { name: "Filtro de Aire Mann-Filter", price: "Gs. 95.000", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=300&h=300&fit=crop" },
  { name: "Bujía NGK Iridium IX", price: "Gs. 65.000", image: "https://images.unsplash.com/photo-1616423664074-907f88512b91?w=300&h=300&fit=crop" },
  { name: "Aceite Castrol EDGE 5W30", price: "Gs. 180.000", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop" },
  { name: "Alternador Bosch 90A", price: "Gs. 1.100.000", image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=300&h=300&fit=crop" },
];

const combos = [
  {
    name: "Kit Frenado Premium",
    items: ["Disco Brembo ventilado", "Pastillas TRW cerámica", "Líquido de freno DOT4"],
    price: "Gs. 1.450.000",
    oldPrice: "Gs. 1.780.000",
    savings: "Ahorrás Gs. 330.000",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop",
  },
  {
    name: "Kit Suspensión Completo",
    items: ["Amortiguadores KYB", "Espirales Eibach", "Bujes de suspensión"],
    price: "Gs. 2.800.000",
    oldPrice: "Gs. 3.450.000",
    savings: "Ahorrás Gs. 650.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=250&fit=crop",
  },
];

const trustFeatures = [
  { icon: Truck, title: "Envíos a todo Paraguay", desc: "Llegamos a cualquier ciudad del país" },
  { icon: Shield, title: "Garantía real", desc: "Todos los productos con garantía del fabricante" },
  { icon: Headphones, title: "Asesoría técnica", desc: "Te ayudamos a elegir el repuesto correcto" },
  { icon: Zap, title: "Atención rápida", desc: "Respuesta en minutos por WhatsApp" },
];

const brands = ["Brembo", "Bosch", "Michelin", "KYB", "Valeo", "NGK", "Castrol", "Mann-Filter", "TRW", "OSRAM"];

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
            <span className="font-medium">Envíos · Garantía · WhatsApp · Asesoría</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex shrink-0 flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">Paraguay</span>
            <span className="text-xl font-black tracking-[0.12em] text-slate-900">RD AUTOREPUESTO</span>
          </a>

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
            <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"><Search className="h-5 w-5" /></button>
            <a href={whatsappUrl("Hola RD AUTOREPUESTO, quiero hacer una consulta")} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:flex">
              <MessageCircle className="h-4 w-4" /><span>WhatsApp</span>
            </a>
            <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 xl:hidden"><Menu className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 py-2 lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Buscar repuestos..." className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none" />
          </div>
        </div>
      </header>

      <main>
        {/* HERO - Estilo AutoDaily con producto grande */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:px-8 lg:py-16">
            <div className="flex-1 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5">
                <Zap className="h-3.5 w-3.5 text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">Oferta de la semana</span>
              </div>
              <h1 className="text-4xl font-black uppercase leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Sistema de Frenado Brembo
              </h1>
              <p className="mx-auto max-w-lg text-lg text-slate-600 lg:mx-0">
                Discos ventilados de alto rendimiento. Máxima seguridad y durabilidad para tu vehículo. Stock disponible.
              </p>
              <div className="flex items-baseline justify-center gap-3 lg:justify-start">
                <span className="text-3xl font-extrabold text-red-600">Gs. 890.000</span>
                <span className="text-xl text-slate-400 line-through">Gs. 1.150.000</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#productos" className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-red-700">
                  <ShoppingCart className="h-4 w-4" />Ver productos
                </a>
                <a href={whatsappUrl("Hola RD AUTOREPUESTO, me interesa el Sistema de Frenado Brembo")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white">
                  <MessageCircle className="h-4 w-4" />Consultar ahora
                </a>
              </div>
            </div>
            <div className="relative flex shrink-0 items-center justify-center lg:w-1/2">
              <div className="absolute -inset-8 rounded-full bg-red-100/50 blur-3xl" />
              <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=500&fit=crop" alt="Disco de freno Brembo" className="relative z-10 w-full max-w-md rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section className="border-y border-slate-100 bg-white py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
            {brands.map((brand) => (
              <span key={brand} className="text-sm font-bold uppercase tracking-wider text-slate-400 transition hover:text-slate-700">{brand}</span>
            ))}
          </div>
        </section>

        {/* CATEGORÍAS CON IMÁGENES REALES */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Comprá por categoría</h2>
              <p className="mt-2 text-slate-500">Encontrá el repuesto exacto para tu vehículo</p>
            </div>
            <a href="/productos" className="hidden items-center gap-1 text-sm font-semibold text-red-600 transition hover:text-red-700 sm:flex">Ver todo <ChevronRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <a key={cat.name} href={cat.href} className="group relative overflow-hidden rounded-2xl border border-slate-200 transition hover:border-red-200 hover:shadow-xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                  <p className="text-sm text-white/80">{cat.count}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS - Grid tipo tienda real */}
        <section id="productos" className="bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Productos destacados</h2>
                <p className="mt-2 text-slate-500">Los más elegidos por nuestros clientes</p>
              </div>
              <a href="/productos" className="hidden items-center gap-1 text-sm font-semibold text-red-600 transition hover:text-red-700 sm:flex">Ver catálogo <ChevronRight className="h-4 w-4" /></a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <article key={product.name} className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-red-200 hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${product.badgeColor}`}>{product.badge}</span>
                    {product.oldPrice && (
                      <span className="absolute right-3 top-3 rounded-full bg-red-600 px-2 py-1 text-[11px] font-bold text-white">
                        -{Math.round((parseInt(product.oldPrice.replace(/[^0-9]/g, "")) - parseInt(product.price.replace(/[^0-9]/g, ""))) / parseInt(product.oldPrice.replace(/[^0-9]/g, "")) * 100)}%
                      </span>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition group-hover:opacity-100">
                      <button className="rounded-full bg-white p-2.5 text-slate-700 shadow-lg transition hover:bg-red-600 hover:text-white"><Eye className="h-4 w-4" /></button>
                      <button className="rounded-full bg-white p-2.5 text-slate-700 shadow-lg transition hover:bg-red-600 hover:text-white"><Heart className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{product.category} · {product.sku}</p>
                    <h3 className="mt-1 text-sm font-bold text-slate-900 group-hover:text-red-600 transition line-clamp-2">{product.name}</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-slate-900">{product.price}</span>
                      {product.oldPrice && <span className="text-xs text-slate-400 line-through">{product.oldPrice}</span>}
                    </div>
                    <a href={whatsappUrl(product.whatsappText)} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-xs font-bold text-white transition hover:bg-red-700">
                      <MessageCircle className="h-3.5 w-3.5" />Consultar por WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FLASH DEALS */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-lg bg-red-600 px-3 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white">⚡ Flash Deals</span>
            </div>
            <p className="text-sm text-slate-500">Ofertas por tiempo limitado. ¡Apurate!</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {flashDeals.map((deal) => (
              <div key={deal.name} className="flex gap-4 rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-white p-5 transition hover:shadow-lg">
                <img src={deal.image} alt={deal.name} className="h-28 w-28 shrink-0 rounded-xl object-cover" />
                <div className="flex flex-1 flex-col">
                  <h3 className="font-bold text-slate-900">{deal.name}</h3>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-red-600">{deal.price}</span>
                    <span className="text-sm text-slate-400 line-through">{deal.oldPrice}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Termina en: <span className="font-bold text-red-600">{deal.endsIn}</span></p>
                  <div className="mt-2">
                    <div className="h-2 w-full rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-red-600 transition-all" style={{ width: `${(deal.sold / deal.total) * 100}%` }} />
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500">Vendidos {deal.sold} de {deal.total}</p>
                  </div>
                  <a href={whatsappUrl(`Hola RD AUTOREPUESTO, me interesa ${deal.name}`)} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit items-center gap-1 rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700">
                    <MessageCircle className="h-3.5 w-3.5" />Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MÁS VENDIDOS - Horizontal scroll */}
        <section className="bg-slate-900 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold sm:text-3xl">Los más vendidos</h2>
              <p className="mt-2 text-slate-400">Productos que nuestros clientes eligen una y otra vez</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bestSellers.map((item) => (
                <div key={item.name} className="group rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition hover:border-red-500/50">
                  <div className="aspect-square overflow-hidden rounded-lg bg-white">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{item.name}</h3>
                  <p className="mt-1 text-lg font-extrabold text-red-400">{item.price}</p>
                  <a href={whatsappUrl(`Hola RD AUTOREPUESTO, consulto por ${item.name}`)} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-1 rounded-lg border border-red-500/50 bg-red-500/10 py-2 text-xs font-bold text-red-400 transition hover:bg-red-500 hover:text-white">
                    <MessageCircle className="h-3 w-3" />Consultar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMBOS */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Combos recomendados</h2>
            <p className="mt-2 text-slate-500">Armá tu kit completo y ahorrá</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {combos.map((combo) => (
              <div key={combo.name} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white sm:flex-row transition hover:border-red-200 hover:shadow-xl">
                <img src={combo.image} alt={combo.name} className="h-48 w-full object-cover sm:h-auto sm:w-2/5" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900">{combo.name}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {combo.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-red-600">{combo.price}</span>
                    <span className="text-sm text-slate-400 line-through">{combo.oldPrice}</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-emerald-600">{combo.savings}</p>
                  <a href={whatsappUrl(`Hola RD AUTOREPUESTO, me interesa el ${combo.name}`)} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-bold text-white transition hover:bg-red-700">
                    <MessageCircle className="h-4 w-4" />Consultar combo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=400&fit=crop" alt="Auto" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Enterate de las novedades primero</h2>
            <p className="max-w-lg text-slate-300">Suscribite y recibí ofertas exclusivas, nuevos productos y descuentos especiales directo en tu WhatsApp.</p>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input type="text" placeholder="Tu número de WhatsApp" className="flex-1 rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-red-500" />
              <button className="rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700">Suscribirme</button>
            </div>
          </div>
        </section>

        {/* CONFIANZA */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustFeatures.map((feature) => (
                <div key={feature.title} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-500">Paraguay</span>
                <span className="text-2xl font-black tracking-[0.12em]">RD AUTOREPUESTO</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Repuestos y accesorios automotrices de calidad. Más de 5 años brindando soluciones confiables para tu vehículo en Paraguay.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="https://instagram.com/carshowpy" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-800 p-2.5 text-slate-400 transition hover:bg-red-600 hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="rounded-lg bg-slate-800 p-2.5 text-slate-400 transition hover:bg-red-600 hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Productos</h3>
              <ul className="mt-4 space-y-2.5">
                {["Frenos y Discos", "Suspensión", "Llantas y Neumáticos", "Faros y Luces", "Audio y Multimedia", "Motor y Transmisión"].map((item) => (
                  <li key={item}><a href="#" className="text-sm text-slate-400 transition hover:text-red-400">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Empresa</h3>
              <ul className="mt-4 space-y-2.5">
                {["Sobre nosotros", "Promociones", "Sorteos", "Términos y condiciones", "Política de envíos"].map((item) => (
                  <li key={item}><a href="#" className="text-sm text-slate-400 transition hover:text-red-400">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-slate-400"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />Asunción, Paraguay</li>
                <li className="flex items-center gap-2.5 text-sm text-slate-400"><Phone className="h-4 w-4 shrink-0 text-red-500" />+595 981 000 000</li>
                <li className="flex items-center gap-2.5 text-sm text-slate-400"><MessageCircle className="h-4 w-4 shrink-0 text-red-500" />ventas@rdautorepuesto.com.py</li>
              </ul>
              <a href={whatsappUrl("Hola RD AUTOREPUESTO, quiero hacer una consulta")} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700">
                <MessageCircle className="h-4 w-4" />WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            © 2024 RD AUTOREPUESTO. Todos los derechos reservados. Paraguay.
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a href={whatsappUrl("Hola RD AUTOREPUESTO, quiero hacer una consulta")} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition hover:scale-110 hover:bg-green-600" aria-label="WhatsApp">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
