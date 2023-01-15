import { useState } from "react"

const Tabs = () => {
  const items = ["Home", "About", "Contact"]
  const [ active, setActive ] = useState(0)

  return (
    <section className="tabs">
      <h1>Tabs</h1>
      <ul>
        { items.map((item, i)=> (
          <li 
            className={active === i && "active"} 
            onClick={() => setActive(i)}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs