import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useState } from "react"

const stars = [ 1, 2, 3, 4, 5 ]

const Star = ({ filled, onClick }) => {
  return (
    <>
    { filled 
      ? <AiFillStar onClick={onClick} size={32} color="#6836e8" /> 
      : <AiOutlineStar onClick={onClick} size={32} /> }
    </>
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