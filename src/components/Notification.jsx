import { useState } from "react"
import { IoNotifications } from "react-icons/io5"

const Notification = () => {
  const [ isActive, setIsActive ] = useState(false)

  const handleClick = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 3000)
  }

  return (
    <section className="notification">
      <h1>Notification</h1>
      <button onClick={handleClick} disabled={isActive} >Click</button>
      { isActive && <div className="toast">
          <IoNotifications />
          <p>This is a notification</p>
        </div>
      }
    </section>
  )
}

export default Notification