import '../../styles/components/drop.css'
import image from "../../assets/Vector.png"
import { useState, useRef } from "react"
import Description from "../description"



function Collapsible({title, description}){
    const [isOpen, setIsOpen] = useState(false);

    // Arrow animation for collapse
    const [animationState, setAnimationState] = useState(0);
    const vectorAnimation = () => {
        setIsOpen(!isOpen);
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
    
    const descriptionRef = useRef();


    return (
        <div>
            <div id="dropBox" className="header">
                <p>{title}</p>
                <img 
                src={image} 
                id="vector"
                onClick={vectorAnimation}
                className={ animationState === 1 ? "expanded" : animationState === 2 ? "hidden" : "" }
                alt="vector" 
                />
            </div>
            <div 
            className='descriptionParent'
            ref={descriptionRef}
            style={
                isOpen ? {height: descriptionRef.current.scrollHeight + "px"} : {height: "0px"}
            }
            >
                <Description 
                description={description}
                />
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