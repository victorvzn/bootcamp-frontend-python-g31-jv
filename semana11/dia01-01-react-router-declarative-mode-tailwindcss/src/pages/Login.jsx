export default function Login() {
  return (
    <>
      <main class="max-w-xl mx-auto px-6 py-16">

        {/* <!-- Encabezado --> */}
        <header class="mb-10 flex items-end justify-center gap-6">
          <div>
            <h1 class="text-3xl font-semibold tracking-tight">Inicia sesión</h1>
          </div>
        </header>

        <div class="flex gap-4">
          {/* <!-- Formulario --> */}
          <form id="form" class="mb-12 border border-neutral-200 rounded-xl p-6 w-96" novalidate>

            <p class="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-4">
              Ingresa tus datos para continuar
            </p>

            <div class="flex flex-col gap-4 mb-4">
              <label class="block text-xs text-neutral-500 mb-1">
                Email
                <input
                  id="email" type="text" placeholder="ana@example.com"
                  class="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
                />
              </label>

              <label class="block text-xs text-neutral-500 mb-1">
                Password
                <input
                  id="password" type="password" placeholder="••••••••"
                  class="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
                />
              </label>
            </div>

            <div class="flex flex-col items-center gap-4">
              <button
                type="submit" id="submitBtn"
                class="w-full bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-bib transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Entrar
              </button>
              
            </div>
          </form>
        </div>

      </main>
    </>
  )
}
