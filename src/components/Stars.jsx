import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function Stars({ initial = 0 }) {
    const [rating, setRating] = useState(initial)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    return (
        <div className='App'>
            <Rating
                onClick={handleRating}
                initialValue={rating}
                allowFraction={true}
                readonly={false}
                size={20}
            /* Available Props */

            />
        </div>
    )
}

