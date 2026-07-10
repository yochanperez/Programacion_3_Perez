// src/pages/ContactUs.tsx

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contáctanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Redes sociales:
              <a href="https://twitter.com/devcursos" className="text-blue-400 hover:underline">Twitter</a>,
              <a href="https://facebook.com/devcursos" className="text-blue-400 hover:underline">Facebook</a>,
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Correo de contacto: <a href="mailto:contacto@devcursos.com" className="text-blue-400 hover:underline">contacto@devcursos.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Dirección: Calle Falsa 123, Ciudad, País
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> teléfono: +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}