// Proyecto preparado para despliegue en Vercel o Netlify
// Compatible con Next.js + TailwindCSS
// Solo necesitas subirlo a GitHub y conectar el repositorio.

export default function ElGranDotado() {
  const productos = [
    {
      nombre: 'Taladro Percutor Industrial',
      categoria: 'Herramientas Eléctricas',
      precio: '$1,899 MXN',
      imagen: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nombre: 'Juego de Llaves Mixtas',
      categoria: 'Herramientas Manuales',
      precio: '$699 MXN',
      imagen: 'https://images.unsplash.com/photo-1581147036324-c1c8f7c7a7d8?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nombre: 'Pintura Acrílica Blanca',
      categoria: 'Pinturas',
      precio: '$450 MXN',
      imagen: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nombre: 'Caja de Tornillos',
      categoria: 'Tornillería',
      precio: '$120 MXN',
      imagen: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nombre: 'Cinta Aislante Profesional',
      categoria: 'Material Eléctrico',
      precio: '$35 MXN',
      imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nombre: 'Tubos PVC Hidráulicos',
      categoria: 'Plomería',
      precio: '$240 MXN',
      imagen: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="El Bien Dotado"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-zinc-400">Ferretería Profesional</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-orange-500 transition">Inicio</a>
            <a href="#productos" className="hover:text-orange-500 transition">Productos</a>
            <a href="#servicios" className="hover:text-orange-500 transition">Servicios</a>
            <a href="#contacto" className="hover:text-orange-500 transition">Contacto</a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="Ferretería"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Todo para tu
            <span className="text-orange-500"> construcción</span>
          </h2>

          <p className="text-lg text-zinc-300 mb-8">
            Herramientas, material eléctrico, plomería, pinturas y mucho más.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition">
              Ver Productos
            </button>

            <button className="border border-zinc-600 px-8 py-4 rounded-2xl hover:bg-zinc-800 transition">
              Contactar
            </button>
          </div>
        </div>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h3 className="text-4xl font-black mb-4">Catálogo Mayorista</h3>
          <p className="text-zinc-400">
            Distribución profesional para ferreterías, constructoras y negocios del ramo ferretero.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-xs bg-orange-500 text-black px-3 py-1 rounded-full font-bold">
                  {producto.categoria}
                </span>

                <h4 className="text-2xl font-bold mt-4 mb-2">
                  {producto.nombre}
                </h4>

                <p className="text-orange-500 font-black text-xl mb-4">
                  {producto.precio}
                </p>

                <button className="w-full bg-orange-500 text-black font-bold py-3 rounded-xl hover:opacity-90 transition">
                  Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-black mb-8">Marcas Distribuidas</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-300 font-bold text-xl">
            <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">TRUPER</div>
            <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">URREA</div>
            <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">COFLEX</div>
            <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">FLEXIMATIC</div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-black mb-12">Nuestros Servicios</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-orange-500">
                Entregas
              </h4>
              <p className="text-zinc-400">
                Servicio rápido de entrega para materiales y herramientas.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-orange-500">
                Cotizaciones
              </h4>
              <p className="text-zinc-400">
                Presupuestos personalizados para obra y construcción.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-orange-500">
                Asesoría
              </h4>
              <p className="text-zinc-400">
                Recomendaciones técnicas para elegir el material correcto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-black mb-6">Contáctanos</h3>

        <p className="text-zinc-400 mb-10">
          Solicita cotizaciones o información directamente por WhatsApp.
        </p>

        <a
          href="https://wa.me/5217770000000"
          className="inline-block bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl font-bold text-lg"
        >
          WhatsApp
        </a>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 El Gran Dotado - Todos los derechos reservados.
      </footer>
    </div>
  )
}
