import "./Accordion.css"
import chevronUp from "../assets/chevron_up.png"
import chevronDown from "../assets/chevron_down.png"
import { useState } from "react"

const Accordion = () => {
  const data = { title: "Accordion Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis leo sem, sed pulvinar lorem blandit vitae. Ut iaculis magna non lacus egestas suscipit. Ut non magna at ex imperdiet luctus nec id ex." }
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <section className="accordion">
      <h1>Accordion</h1>
      <div>
        <div className="title">
          <p>{data.title}</p>
          <img onClick={() => setIsOpen(prev => !prev)} src={ isOpen ? chevronUp : chevronDown } />
        </div>
        { isOpen && 
        <div className="body">
          <p>{data.content}</p>
        </div>
        }
      </div>
    </section>
  )
}

export default Accordion