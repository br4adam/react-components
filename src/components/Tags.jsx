import "./Tags.css"
import { useState } from "react"

const Tags = () => {
  const [ tags, setTags ] = useState(["first", "second"])

  const handleKeyDown = (e) => {
    if (e.target.value === "") return
    if (e.key === "Enter") {
      setTags([...tags, e.target.value])
      e.target.value = ""
    }
  }

  const deleteTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index))
  }

  return (
    <section className="tags">
      <h1>Tags</h1>
      <input type="text" placeholder="add a tag" onKeyDown={handleKeyDown} />
      <div>
        { tags.map((tag, i) => (
          <div className="tag" key={i}>
            <p>{tag}</p>
            <span onClick={() => deleteTag(i)}>&#x2716;</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tags