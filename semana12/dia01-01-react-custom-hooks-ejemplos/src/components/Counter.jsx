import { useState } from "react"

const Counter = () => {
  const [contador, setContador] = useState(0)

  return (
    <div className="bg-slate-200 p-4 border">
      <h3 className="text-2xl">Contador</h3>

      <div className="flex gap-2">
        <button className="bg-blue-400 px-3 py-2">-</button>
        <strong className="text-2xl">0</strong>
        <button className="bg-blue-400 px-3 py-2">+</button>
      </div>
    </div>
  )
}

export default Counter