import "./Accordion.css"
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react"

const Accordion = () => {
  const data = { title: "Accordion Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis leo sem, sed pulvinar lorem blandit vitae. Ut iaculis magna non lacus egestas suscipit. Ut non magna at ex imperdiet luctus nec id ex." }
  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <section className="accordion">
      <h1>Accordion</h1>
      <div>
        <div className="title">
          <p>{data.title}</p>
          { isOpen 
            ? <BiChevronUp onClick={handleClick} size={16} /> 
            : <BiChevronDown onClick={handleClick} size={16} /> }
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