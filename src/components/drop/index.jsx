import styled, { keyframes } from "styled-components"
import image from "../../assets/Vector.png"
import { useCollapse } from "react-collapsed"
import { useState } from "react"
import Description from "../description"

const DropBox = styled.div`
    max-width: 987px;
    pointer-events: none;
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
    @media all and (max-width: 1240px){
        max-width: 90vw;
    }
    @media all and (max-width: 550px){
        font-size: 13px;
        height: 29px;
    }
`
const rotatingForward = keyframes`
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const rotatingBackward = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Vector = styled.img`
    &.expanded {
        animation: ${rotatingForward} 0.5s forwards;
    }
    &.hidden {
        animation: ${rotatingBackward} 0.5s forwards;
    }
    object-fit: contain;
    width: 24px;
    transform: rotate(180deg);
    pointer-events: auto;
    &:hover {
        cursor: pointer;
    }
`


function Collapsible({title, description}){
    
    // Collapsing parameters
    const config = {
        duration: 500,
        
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    // Arrow animation for collapse
    const [animationState, setAnimationState] = useState(0);
    const vectorAnimation = () => {
        let newState = animationState;
        if(newState === 0){
            newState++;
            setAnimationState(newState);
        } else if(newState === 1){
            newState++;
            setAnimationState(newState);
        } else {
            newState = 1;
            setAnimationState(newState);
        }
    }
    
    return (
        <div className="collapsible">
            <DropBox className="header" {...getToggleProps()}>
                <p>{title}</p>
                <Vector 
                expanded={isExpanded} 
                src={image} 
                id="vector"
                onClick={vectorAnimation}
                className={ animationState === 1 ? "expanded" : animationState === 2 ? "hidden" : "" }
                rotation={animationState >= 0}
                alt="vector" 
                />
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