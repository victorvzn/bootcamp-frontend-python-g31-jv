export default function Login() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-xl font-medium text-ink">Inicia sesión</h1>
        <p className="mt-1 text-sm text-gray-500">
          Ingresa tus datos para continuar
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-gray-600">
            Correo
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm text-gray-600">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#111827] py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Entrar
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        ¿No tienes cuenta?{' '}
        <a href="#" className="text-ink underline underline-offset-2">
          Regístrate
        </a>
      </p>
    </div>
  )
}
