const navigation = [
  "Inicio",
  "Productos",
  "Promociones",
  "Sorteos",
  "Nosotros",
  "Contacto",
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

const products = [
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

const badgeStyles: Record<string, string> = {
  Nuevo: "bg-white/10 text-white",
  Promo: "bg-[#E10600]/20 text-[#ff776f] border border-[#E10600]/40",
  "Más vendido": "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#E10600]">
              Paraguay
            </p>
            <p className="text-xl font-black tracking-[0.18em]">CAR SHOW</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-200 lg:flex">
            {navigation.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/595981000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#E10600] px-4 py-2 text-sm font-semibold transition hover:bg-[#b60500]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:gap-14 lg:px-8 lg:py-12">
        <section className="grid gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[#E10600]/40 bg-[#E10600]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff8b87]">
              Equipamientos automotrices premium
            </p>
            <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              Potenciá tu vehículo con accesorios de alto rendimiento
            </h1>
            <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
              En CAR SHOW Equipamientos encontrás productos confiables, asesoría
              real y promociones comerciales para que tu auto luzca y funcione al
              máximo nivel.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#productos"
                className="rounded-xl bg-[#E10600] px-5 py-3 text-center text-sm font-semibold transition hover:bg-[#b60500]"
              >
                Ver productos
              </a>
              <a
                href="https://wa.me/595981000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold transition hover:border-[#E10600] hover:text-[#ff8b87]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {trustBadges.map((badge) => (
              <article
                key={badge}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-zinc-100"
              >
                {badge}
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Categorías destacadas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category}
                className="rounded-xl border border-white/10 bg-zinc-900 p-5 transition hover:border-[#E10600]/60"
              >
                <p className="text-sm text-zinc-400">Categoría</p>
                <h3 className="mt-2 text-lg font-semibold">{category}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="productos" className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-2xl font-bold">Productos destacados</h2>
            <a href="#" className="text-sm text-[#ff8b87] hover:text-[#E10600]">
              Ver catálogo completo
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5"
              >
                <div className="h-36 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950" />
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-xl font-extrabold text-white">{product.price}</p>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}
                  >
                    {product.badge}
                  </span>
                </div>
                <a
                  href="https://wa.me/595981000000"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto rounded-lg border border-[#E10600]/60 px-4 py-2 text-center text-sm font-semibold text-[#ff8b87] transition hover:bg-[#E10600] hover:text-white"
                >
                  Consultar
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#E10600]/40 bg-[#1a0b0a] p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Promociones destacadas</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {promos.map((promo) => (
              <article
                key={promo.title}
                className="rounded-xl border border-[#E10600]/40 bg-black/40 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#ff8b87]">
                  Oferta limitada
                </p>
                <h3 className="mt-2 text-lg font-bold">{promo.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{promo.detail}</p>
              </article>
            ))}
          </div>
          <a
            href="#"
            className="inline-flex rounded-lg bg-[#E10600] px-5 py-3 text-sm font-semibold transition hover:bg-[#b60500]"
          >
            Ver promociones
          </a>
        </section>

        <section className="rounded-2xl border border-[#FFD700]/40 bg-[#1a1703] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
            Sorteos CAR SHOW
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#fff1b8] sm:text-3xl">
            Participá por equipamientos premium y experiencias exclusivas
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[#f3dea0] sm:text-base">
            Integramos la energía de sorteocarshow.com.py para impulsar campañas
            de alto impacto con premios reales para nuestra comunidad.
          </p>
          <a
            href="https://sorteocarshow.com.py/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-lg bg-[#FFD700] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#e0bc00]"
          >
            Ver sorteos activos
          </a>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Combos recomendados</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {combos.map((combo) => (
              <article
                key={combo.name}
                className="rounded-xl border border-white/10 bg-zinc-900 p-5"
              >
                <h3 className="text-lg font-bold">{combo.name}</h3>
                <p className="mt-2 text-sm text-zinc-300">{combo.detail}</p>
                <p className="mt-4 text-base font-extrabold text-[#ff8b87]">
                  {combo.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">¿Por qué elegir CAR SHOW?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {confidence.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-zinc-200"
              >
                {item}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="text-xl font-black tracking-[0.18em]">CAR SHOW</p>
            <p className="mt-3 text-sm text-zinc-400">
              Equipamientos y accesorios automotrices en Paraguay con enfoque
              comercial, asesoría y confianza.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Links rápidos
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              {navigation.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Contacto
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>Asunción, Paraguay</li>
              <li>+595 981 000 000</li>
              <li>ventas@carshow.com.py</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Redes sociales
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
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
                  href="https://wa.me/595981000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-[#E10600] px-3 py-2 font-semibold text-white transition hover:bg-[#b60500]"
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
