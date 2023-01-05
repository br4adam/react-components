import "./Rating.css"
import star from "../assets/star_empty.png"
import starfill from "../assets/star_fill.png"
import { useState } from "react"

const stars = [ 1, 2, 3, 4, 5 ]

const Star = ({ filled, onClick }) => {
  return (
    <img src={filled ? starfill : star} onClick={onClick} />
  )
}

const Rating = () => {
  const [rating, setRating] = useState(0)

  return (
    <section className="rating">
      <h1>Rating</h1>
      <div>
        { stars.map((star, i) => 
          <Star key={i} filled={i < rating} onClick={() => setRating(i + 1)} />) 
        }
      </div>
      { `${rating} / ${stars.length}` }
    </section>
  )
}

export default Rating