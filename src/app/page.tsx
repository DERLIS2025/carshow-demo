const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Promociones", href: "/promociones" },
  { label: "Sorteos", href: "https://sorteocarshow.com.py/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const quickLinks = [
  { label: "Categorías", href: "#categorias" },
  { label: "Destacados", href: "#productos" },
  { label: "Más vendidos", href: "#mas-vendidos" },
  { label: "Promos", href: "#promociones" },
  { label: "Combos", href: "#combos" },
];

const trustBadges = [
  "Envíos a todo Paraguay",
  "Equipamientos originales y seleccionados",
  "Atención por WhatsApp",
];

const categories = [
  "Audio y multimedia",
  "Luces y faros",
  "Accesorios exteriores",
  "Accesorios interiores",
  "Seguridad",
  "Herramientas y mantenimiento",
];

type ProductBadge = "Nuevo" | "Promo" | "Más vendido";

type Product = {
  name: string;
  price: string;
  category: string;
  badge: ProductBadge;
};

const products: Product[] = [
  {
    name: "Kit LED H4 Alta/Baja",
    price: "Gs. 185.000",
    category: "Luces y faros",
    badge: "Nuevo",
  },
  {
    name: "Cámara de retroceso HD",
    price: "Gs. 240.000",
    category: "Seguridad",
    badge: "Más vendido",
  },
  {
    name: "Radio multimedia Android",
    price: "Gs. 1.450.000",
    category: "Audio y multimedia",
    badge: "Promo",
  },
  {
    name: "Alfombra universal premium",
    price: "Gs. 160.000",
    category: "Accesorios interiores",
    badge: "Nuevo",
  },
  {
    name: "Sensor de estacionamiento",
    price: "Gs. 320.000",
    category: "Seguridad",
    badge: "Más vendido",
  },
  {
    name: "Barra LED auxiliar",
    price: "Gs. 390.000",
    category: "Accesorios exteriores",
    badge: "Promo",
  },
];

const topSellers: Product[] = [
  {
    name: "Kit LED H4 Alta/Baja",
    price: "Gs. 185.000",
    category: "Luces y faros",
    badge: "Más vendido",
  },
  {
    name: "Radio multimedia Android",
    price: "Gs. 1.450.000",
    category: "Audio y multimedia",
    badge: "Más vendido",
  },
  {
    name: "Cámara de retroceso HD",
    price: "Gs. 240.000",
    category: "Seguridad",
    badge: "Más vendido",
  },
  {
    name: "Sensor de estacionamiento",
    price: "Gs. 320.000",
    category: "Seguridad",
    badge: "Más vendido",
  },
  {
    name: "Alfombra universal premium",
    price: "Gs. 160.000",
    category: "Accesorios interiores",
    badge: "Más vendido",
  },
  {
    name: "Barra LED auxiliar",
    price: "Gs. 390.000",
    category: "Accesorios exteriores",
    badge: "Más vendido",
  },
];

const promos = [
  {
    title: "Promo multimedia",
    detail: "Hasta 20% OFF en radios Android y kits de instalación.",
  },
  {
    title: "Semana de iluminación",
    detail: "2x1 en lámparas seleccionadas y descuentos en barras LED.",
  },
  {
    title: "Accesorios interiores",
    detail: "Financiá en cuotas con beneficios exclusivos en combos premium.",
  },
];

const combos = [
  {
    name: "Combo iluminación",
    detail: "Kit LED + barra auxiliar + instalación recomendada.",
    price: "Desde Gs. 520.000",
  },
  {
    name: "Combo seguridad",
    detail: "Cámara HD + sensores + asesoría para montaje.",
    price: "Desde Gs. 690.000",
  },
  {
    name: "Combo interior premium",
    detail: "Alfombras + organizadores + detalles de confort.",
    price: "Desde Gs. 450.000",
  },
];

const confidence = [
  "Compra asesorada",
  "Atención rápida",
  "Productos seleccionados",
  "Instalación o recomendación técnica según disponibilidad",
];

const badgeStyles: Record<ProductBadge, string> = {
  Nuevo: "bg-white/10 text-white",
  Promo: "bg-[#E10600]/20 text-[#ff776f] border border-[#E10600]/40",
  "Más vendido":
    "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40",
};

const carouselBase =
  "flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

const whatsappNumber = "595981000000";

function createWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createProductMessage(product: Product) {
  return `Hola CAR SHOW, quiero consultar por el producto: ${product.name} - Precio: ${product.price}`;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="block">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#E10600] sm:text-xs">
              Paraguay
            </p>
            <p className="text-lg font-black tracking-[0.18em] sm:text-xl">
              CAR SHOW
            </p>
          </a>

          <nav className="hidden items-center gap-5 text-sm text-zinc-200 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={createWhatsAppUrl("Hola CAR SHOW, quiero hacer una consulta.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-[#E10600] px-4 text-sm font-semibold transition hover:bg-[#b60500]"
          >
            WhatsApp
          </a>
        </div>

        <div className="border-t border-white/10 lg:hidden">
          <div className={`${carouselBase} px-4 py-2 sm:px-6`}>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="snap-start shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:gap-8 sm:px-6 sm:py-7 lg:gap-12 lg:px-8 lg:py-12">
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-4 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-4 sm:space-y-5">
            <p className="inline-flex rounded-full border border-[#E10600]/40 bg-[#E10600]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#ff8b87] sm:text-xs">
              Equipamientos automotrices premium
            </p>

            <h1 className="text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-5xl">
              Potenciá tu vehículo con accesorios de alto rendimiento
            </h1>

            <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
              En CAR SHOW Equipamientos encontrás productos confiables, asesoría
              real y promociones para que tu auto luzca y funcione al máximo.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a
                href="#productos"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#E10600] px-5 text-center text-sm font-semibold transition hover:bg-[#b60500]"
              >
                Ver productos
              </a>

              <a
                href={createWhatsAppUrl(
                  "Hola CAR SHOW, quiero consultar por equipamientos automotrices."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-5 text-center text-sm font-semibold transition hover:border-[#E10600] hover:text-[#ff8b87]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
            {trustBadges.map((badge) => (
              <article
                key={badge}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm font-medium text-zinc-100 sm:p-4"
              >
                {badge}
              </article>
            ))}
          </div>
        </section>

        <section id="categorias" className="space-y-3">
          <h2 className="text-xl font-bold sm:text-2xl">
            Categorías destacadas
          </h2>

          <div
            className={`${carouselBase} md:grid md:grid-cols-3 md:gap-3 md:overflow-visible md:pb-0`}
          >
            {categories.map((category) => (
              <article
                key={category}
                className="snap-start shrink-0 w-[82%] rounded-xl border border-white/10 bg-zinc-900 p-4 transition hover:border-[#E10600]/60 sm:w-[45%] md:w-auto"
              >
                <p className="text-xs text-zinc-400">Categoría</p>
                <h3 className="mt-1.5 text-base font-semibold">{category}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="productos" className="space-y-3">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-xl font-bold sm:text-2xl">
              Productos destacados
            </h2>

            <a
              href="/productos"
              className="text-xs text-[#ff8b87] hover:text-[#E10600] sm:text-sm"
            >
              Ver catálogo completo
            </a>
          </div>

          <div
            className={`${carouselBase} md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0`}
          >
            {products.map((product) => (
              <article
                key={product.name}
                className="snap-start shrink-0 w-[84%] rounded-2xl border border-white/10 bg-zinc-900 p-4 sm:w-[48%] md:w-auto md:p-5"
              >
                <div className="h-28 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 sm:h-32" />

                <div className="mt-3 space-y-1.5">
                  <p className="text-[11px] uppercase tracking-widest text-zinc-400 sm:text-xs">
                    {product.category}
                  </p>

                  <h3 className="text-base font-semibold sm:text-lg">
                    {product.name}
                  </h3>

                  <p className="text-lg font-extrabold text-white sm:text-xl">
                    {product.price}
                  </p>

                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}
                  >
                    {product.badge}
                  </span>
                </div>

                <a
                  href={createWhatsAppUrl(createProductMessage(product))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#E10600]/60 px-4 text-sm font-semibold text-[#ff8b87] transition hover:bg-[#E10600] hover:text-white"
                >
                  Consultar
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="mas-vendidos" className="space-y-3">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-xl font-bold sm:text-2xl">Más vendidos</h2>
            <span className="text-xs text-zinc-400 sm:text-sm">
              Top consultados
            </span>
          </div>

          <div
            className={`${carouselBase} lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:pb-0`}
          >
            {topSellers.map((product) => (
              <article
                key={`top-${product.name}`}
                className="snap-start shrink-0 w-[82%] rounded-xl border border-white/10 bg-black/40 p-4 sm:w-[45%] lg:w-auto"
              >
                <p className="text-[11px] uppercase tracking-widest text-zinc-400">
                  {product.category}
                </p>

                <h3 className="mt-1.5 text-base font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 text-lg font-extrabold text-[#ff8b87]">
                  {product.price}
                </p>

                <a
                  href={createWhatsAppUrl(createProductMessage(product))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/20 text-sm font-semibold text-zinc-100 transition hover:border-[#E10600] hover:text-[#ff8b87]"
                >
                  Consultar ahora
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="promociones"
          className="space-y-3 rounded-2xl border border-[#E10600]/40 bg-[#1a0b0a] p-4 sm:p-6 lg:p-8"
        >
          <h2 className="text-xl font-bold sm:text-2xl">
            Promociones destacadas
          </h2>

          <div
            className={`${carouselBase} md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0`}
          >
            {promos.map((promo) => (
              <article
                key={promo.title}
                className="snap-start shrink-0 w-[84%] rounded-xl border border-[#E10600]/40 bg-black/40 p-4 sm:w-[48%] md:w-auto md:p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ff8b87] sm:text-xs">
                  Oferta limitada
                </p>

                <h3 className="mt-1.5 text-base font-bold sm:text-lg">
                  {promo.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-300">{promo.detail}</p>
              </article>
            ))}
          </div>

          <a
            href="/promociones"
            className="inline-flex min-h-11 items-center rounded-lg bg-[#E10600] px-5 text-sm font-semibold transition hover:bg-[#b60500]"
          >
            Ver promociones
          </a>
        </section>

        <section
          id="sorteos"
          className="rounded-2xl border border-[#FFD700]/40 bg-[#1a1703] p-4 sm:p-6 lg:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700] sm:text-sm">
            Sorteos CAR SHOW
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#fff1b8] sm:text-2xl lg:text-3xl">
            Participá por equipamientos premium y experiencias exclusivas
          </h2>

          <p className="mt-2.5 max-w-3xl text-sm text-[#f3dea0] sm:text-base">
            Integramos la energía de sorteocarshow.com.py para impulsar campañas
            de alto impacto con premios reales para nuestra comunidad.
          </p>

          <a
            href="https://sorteocarshow.com.py/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-[#FFD700] px-5 text-sm font-bold text-black transition hover:bg-[#e0bc00]"
          >
            Ver sorteos activos
          </a>
        </section>

        <section id="combos" className="space-y-3">
          <h2 className="text-xl font-bold sm:text-2xl">
            Combos recomendados
          </h2>

          <div
            className={`${carouselBase} md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0`}
          >
            {combos.map((combo) => (
              <article
                key={combo.name}
                className="snap-start shrink-0 w-[82%] rounded-xl border border-white/10 bg-zinc-900 p-4 sm:w-[45%] md:w-auto md:p-5"
              >
                <h3 className="text-base font-bold sm:text-lg">
                  {combo.name}
                </h3>

                <p className="mt-1.5 text-sm text-zinc-300">{combo.detail}</p>

                <p className="mt-3 text-base font-extrabold text-[#ff8b87]">
                  {combo.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900 p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl font-bold sm:text-2xl">
            ¿Por qué elegir CAR SHOW?
          </h2>

          <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
            {confidence.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-black/30 p-3 text-sm text-zinc-200 sm:p-4"
              >
                {item}
              </article>
            ))}
          </div>
        </section>
      </main>

      <a
        href={createWhatsAppUrl("Hola CAR SHOW, quiero hacer una consulta.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-40 inline-flex min-h-11 items-center rounded-full bg-[#E10600] px-4 text-sm font-bold text-white shadow-lg shadow-black/40 transition hover:bg-[#b60500] lg:hidden"
      >
        WhatsApp
      </a>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-7 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-10">
          <div>
            <p className="text-xl font-black tracking-[0.18em]">CAR SHOW</p>

            <p className="mt-2.5 text-sm text-zinc-400">
              Equipamientos y accesorios automotrices en Paraguay con enfoque
              comercial, asesoría y confianza.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Links rápidos
            </h3>

            <ul className="mt-2.5 space-y-2 text-sm text-zinc-400">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Contacto
            </h3>

            <ul className="mt-2.5 space-y-2 text-sm text-zinc-400">
              <li>Asunción, Paraguay</li>
              <li>+595 981 000 000</li>
              <li>ventas@carshow.com.py</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Redes sociales
            </h3>

            <ul className="mt-2.5 space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://instagram.com/carshowpy"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram @carshowpy
                </a>
              </li>

              <li>
                <a
                  href="https://sorteocarshow.com.py/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Sorteos activos
                </a>
              </li>

              <li>
                <a
                  href={createWhatsAppUrl(
                    "Hola CAR SHOW, quiero hacer una consulta."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-md bg-[#E10600] px-3 py-2 font-semibold text-white transition hover:bg-[#b60500]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}