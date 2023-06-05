import styled, { keyframes } from "styled-components"
import image from "../../assets/Vector.png"
import { useCollapse } from "react-collapsed"
import { useState } from "react"
import Description from "../description"

const DropBox = styled.div`
    max-width: 987px;
    min-width: 546px;
    
    height: 47px;
    background-color: #FF6060;
    border-radius: 5px;
    margin-top: 24px;
    padding-left: 18px;
    padding-right: 18px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const rotatingForward = keyframes`
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotatingBackward = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Vector = styled.img`
    &.rotating_forward {
        animation: ${rotatingForward} 1s forwards;
    }

    &.rotating_backward {
        animation: ${rotatingBackward} 1s forwards;
    }
    object-fit: contain;
    width: 24px;
    transform: ${({ rotating }) => (rotating ? 'rotate(360deg)' : 'rotate(180deg)')};
    transition: transform 1s;
    &:hover {
        cursor: pointer;
    }
`


function Collapsible({title, description}){
    
    
    const config = {
        duration: 1000,
        
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    
    const [animationState, setAnimationState] = useState(0);
    const handClick = () => {
        let newState = animationState + 1;
        if (newState >= 2) {
            newState = 0;
        }
        setAnimationState(newState);
    };

    return (
        <div className="collapsible">

            <DropBox className="header" {...getToggleProps()}>
                <p>{title}</p>
                <Vector 
                expanded={isExpanded} 
                src={image} 
                className={ animationState === 1 ? "rotating_forward" : animationState === 2 ? "rotating_backward" : "" }
                onClick={handClick}
                rotation={animationState > 0}
                alt="vector" />
            </DropBox>

            <div {...getCollapseProps()}>
                <div className="content">
                    <Description 
                    description={description}
                    />
                </div>
            </div>
        </div>
    )
};

function Drop({title, id, description}) {
    return (
            
                    <Collapsible 
                    title={title}
                    key={id}
                    description={description}
                    />
            
    )
}

export default Drop