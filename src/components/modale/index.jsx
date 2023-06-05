import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/carrousel';


const ModaleWindow = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${({hide}) => (hide ? 'none' : 'block')};
    
`
const ModaleBox = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1920px;
  max-height: 1080px;
  
  
`



function Modale({hide, pictures, title}) {
    const [isOpen, setIsOpen] = useState(!hide);

    const handleOutsideClick = (event) => {
      if (event.target === event.currentTarget) {
        setIsOpen(false);
      }
    };
    return (
      <ModaleWindow 
      hide={hide}
      className='modale'
      onClick={handleOutsideClick}
      >
        <ModaleBox>
          <Carousel
          pictures={pictures}
          title={title}
          />
        </ModaleBox>
      </ModaleWindow>
    )
}

export default Modale