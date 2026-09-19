const App = () => {
  // TODO: Darle la funcionalidad completa a este componente. Implementar el CRUD completo(Lista, crear, actualizar y eliminar) usando el apibox

  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <main className="max-w-2xl mx-auto px-6 py-16">

        <header className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-bib tracking-widest uppercase mb-1">Maratón G31 - 2026</p>
            <h1 className="text-3xl font-semibold tracking-tight">Corredores</h1>
          </div>
          <div className="text-right shrink-0">
            <p id="contador" className="text-3xl font-semibold leading-none">0</p>
            <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">inscritos</p>
          </div>
        </header>

        <div className="flex gap-4">
          <form id="form" className="mb-12 border border-neutral-200 rounded-xl p-6" novalidate>
            <input type="hidden" id="corredorId" />

            <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-4">inscripción</p>

            <div className="flex flex-col gap-4 mb-4">
              <label className="block text-xs text-neutral-500 mb-1">
                Nombre completo
                <input
                  id="nombre" type="text" placeholder="Ana Torres"
                  className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
                />
              </label>

              <label className="block text-xs text-neutral-500 mb-1">
                Edad
                <input
                  id="edad" type="number" placeholder="28"
                  className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
                />
              </label>

              <label className="block text-xs text-neutral-500 mb-1">
                Categoría
                <select
                  id="categoria"
                  className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
                >
                  <option value="">Elegir</option>
                  <option value="5K">5K</option>
                  <option value="10K">10K</option>
                  <option value="21K">21K</option>
                  <option value="42K">42K</option>
                </select>
              </label>

                <label className="block text-xs text-neutral-500 mb-1">
                  Dorsal
                  <input
                    id="dorsal" type="number" placeholder="101"
                    className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm font-mono outline-none focus:border-neutral-900 transition-colors"
                  />
                </label>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                type="submit" id="submitBtn"
                className="w-full bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-bib transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Inscribir
              </button>
              <button
                type="button" id="cancelBtn"
                className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors hidden"
              >
                Cancelar edición
              </button>
            </div>
          </form>

          <section className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">Lista de salida</h2>
              <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
            </div>

            <ul id="lista" className="space-y-3 mb-4">
              <li className="flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors">
                <div className="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
                  <span className="font-mono text-base font-medium">101</span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Nombre completo</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">5K</span>
                    <span className="text-xs text-neutral-400">18 años</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button data-action="editar" data-id="${corredor.id}" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
                    Editar
                  </button>
                  <button data-action="eliminar" data-id="${corredor.id}" className="text-xs text-neutral-400 hover:text-red-500 transition-colors">
                    Eliminar
                  </button>
                </div>
              </li>
            </ul>

            <div id="vacio" className="hidden text-center py-16 border border-dashed border-neutral-200 rounded-xl">
              <p className="text-lg font-semibold text-neutral-400 mb-1">Sin corredores aún</p>
              <p className="text-sm text-neutral-400">La línea de salida está vacía. Inscribe al primero.</p>
            </div>

            <p id="loading" className="hidden font-mono text-xs text-neutral-400 uppercase tracking-widest py-10 text-center">
              Cargando corredores...
            </p>
          </section>
        </div>

      </main>

      <footer>
        <p className="text-center text-xs text-neutral-400">
          <a href="https://github.com/victorvzn/bootcamp-frontend-python-g31-jv" target="_blank" className="hover:underline">
            Bootcamp Frontend Python G31 JV - Victor Villazón
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App