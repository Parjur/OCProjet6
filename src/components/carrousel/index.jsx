import '../../styles/components/carrousel.css'
import image from '../../assets/Arrow.png'
import { useState, useEffect, useRef } from "react";

function Caroussel({pictures, title}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isAlone = pictures.length <= 1;
    const goToNextImage = () => {
        const nextIndex = (currentIndex + 1) % pictures.length;
        setCurrentIndex(nextIndex);
    };
    const goToPreviousImage = () => {
        const previousIndex = (currentIndex + pictures.length - 1) % pictures.length;
        setCurrentIndex(previousIndex);
    };

    const leftRef = useRef();
    const rightRef = useRef();
    const imageCounterRef = useRef();
    useEffect(() => {
        if(isAlone){
            leftRef.current.style.display = 'none';
            rightRef.current.style.display = 'none';
            imageCounterRef.current.style.display = 'none';
        }
    }, [isAlone])
    

    return (
            <div id="carouselBox">
                <button className="arrow left" ref={leftRef}>
                    <img 
                    src={image} 
                    alt="vector" 
                    onClick={goToPreviousImage}
                    className="carouselArrow"
                    />
                </button>
                <button className="arrow right" ref={rightRef}>
                    <img 
                    src={image} 
                    alt="vector" 
                    onClick={goToNextImage}
                    className="carouselArrow"
                    />
                </button>
                <img 
                key={currentIndex} 
                src={pictures[currentIndex]} 
                alt={`${title}_${currentIndex}`}
                id="image"
                />
                <div id="imageCounter" ref={imageCounterRef}>
                    <p>{currentIndex + 1}/{pictures.length}</p>
                </div>
            </div>
    )
}

export default Caroussel