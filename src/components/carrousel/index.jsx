import styled from "styled-components";
import image from '../../assets/Arrow.png'
import { useState } from "react";

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    &:hover {
        cursor: pointer;
    }
`

const CarouselBox = styled.div`
    width: 1240px;
    height: 415px;
    border-radius: 25px;
    margin-bottom: 30px;
    position: relative;
    display: flex;
    z-index: 1;
    .right {
        transform: translateY(-50%);
        right: 0px;
        top: 50%;
        display: ${({ hide }) => (hide ? 'none' : 'block')};
        &:hover {
            cursor: pointer;
        }
    }
    .left {
        transform: translateY(-50%) rotate(180deg);
        left: 0px;
        top: 50%;
        display: ${({ hide }) => (hide ? 'none' : 'block')};
        &:hover {
            cursor: pointer;
        }
    }
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 1024px){
        height: 255px;
    }
`

const CarouselButtonArrow = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    
    
`
const CarouselArrow = styled.img`
    @media all and (max-width: 550px){
        height: 50px;
        width: auto;
    }
`
const ImageCounter = styled.div`
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0%;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    display: ${({ hide }) => (hide ? 'none' : 'block')};
    @media all and (max-width: 550px){
        display: none;
    }
`


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

    return (
            <CarouselBox hide={isAlone}>
                <CarouselButtonArrow className="arrow left">
                    <CarouselArrow 
                    src={image} 
                    alt="vector" 
                    onClick={goToPreviousImage}
                    />
                </CarouselButtonArrow>
                <CarouselButtonArrow className="arrow right">
                    <CarouselArrow 
                    src={image} 
                    alt="vector" 
                    onClick={goToNextImage}
                    />
                </CarouselButtonArrow>
                <Image 
                key={currentIndex} 
                src={pictures[currentIndex]} 
                alt={`${title}_${currentIndex}`}
                />
                <ImageCounter hide={isAlone}>
                    <p>{currentIndex + 1}/{pictures.length}</p>
                </ImageCounter>
            </CarouselBox>
    )
}

export default Caroussel