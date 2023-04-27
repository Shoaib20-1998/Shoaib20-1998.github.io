import React from 'react'
import swal from '@sweetalert/with-react'
 
export const ALERT = value => {
  swal("Thanks for your rating!", `You rated us ${value}/3`, "success")
}
 
const MoodButton = ({ rating, onClick }) => (
  <button 
    data-rating={rating}
    className="mood-btn" 
    onClick={() => onClick(rating)}
  />
)
 
swal({
  text: "How was your experience getting help with this issue?",
  buttons: {
    cancel: "Close",
  },
  content: (
    <div>
      <MoodButton 
        rating={1} 
        onClick={ALERT}
      />
      <MoodButton 
        rating={2} 
        onClick={ALERT}
      />
      <MoodButton 
        rating={3} 
        onClick={ALERT}
      />
    </div>
  )
})