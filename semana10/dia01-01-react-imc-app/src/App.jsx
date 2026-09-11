const App = () => {
  return (
    <section className="w-[400px] bg-slate-200 p-4 mt-8 mx-auto rounded-md">
      <h1 className="text-3xl text-sky-600 text-center font-bold">IMC APP</h1>

      <div className="pt-4">
        <h3 className="font-bold">Peso: 0 kg</h3>
        <input
          type="range"
          min="50"
          max="200"
          className="w-full"
        />
      </div>

      <div className="pt-4">
        <h3 className="font-bold">Altura: 0 cm</h3>
        <input
          type="range"
          min="50"
          max="200"
          className="w-full"
        />
      </div>

      <p className="font-bold mt-4">Tu IMC es 0.00</p>

      <p className="font-bold text-2xl">ESTADO de IMC: ????</p>
    </section>
  )
}

export default App