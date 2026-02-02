import { useEffect, useState } from 'react';
import '../index.css'

const ImageCarousel = () => {
    const [active, setActive] = useState(0)

    const arr = Array.from({length: 10}).map((_, i) => i + 1)
    const size = 3;


    const visibleImages = arr.slice(active, active + size)

    const handelNext = () =>{
        setActive((prev) => prev + 1)
    }

    const handlePrev = () =>{
        setActive((prev) => prev - 1)
    }


  return (
    <div>
        <div className='box-container'>
            <button disabled={active === 0} onClick={handlePrev}>Prev</button>
            {visibleImages.map((item, index) =>(
                    <div className='box' Key={index}>{item}</div>
            ))}
            <button disabled={active + size >= arr.length} onClick={ handelNext}>Next</button>
        </div>
    </div>
  )
}

export default ImageCarousel