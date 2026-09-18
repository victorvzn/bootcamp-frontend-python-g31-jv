export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-medium text-ink">Inicio</h1>
      <p className="mt-1 text-sm text-gray-500">
        Contenido de la pantalla privada
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="rounded-md border border-gray-200 p-5"
          >
            <p className="text-sm text-gray-500">Tarjeta {n}</p>
            <p className="mt-2 text-2xl font-medium text-ink">—</p>
          </div>
        ))}
      </div>
    </div>
  )
}
