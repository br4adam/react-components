import { useState } from "react"

const Counter = () => {
  const [ count, setCount ] = useState(0)
  const [ step, setStep ] = useState(1)
 
  const handleReset = () => {
    setCount(0)
    setStep(1)
  }

  return (
    <section className="counter">
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(prev => prev - parseInt(step))}>-</button>
        <button onClick={() => setCount(prev => prev + parseInt(step))}>+</button>
        <button onClick={handleReset}>reset</button>
        <input type="number" value={step} onChange={(e) => setStep(e.target.value)} />
      </div>
    </section>
  )
}

export default Counter