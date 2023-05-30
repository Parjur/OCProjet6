import styled from "styled-components";

export const ImageBox = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 43px;
`

export const Image = styled.img`
    height: 223px;
    width: 1240px;
    border-radius: 25px;
    object-fit: cover;
`
export const ShadowImageCover = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.3);
    width: 1240px;
    height: 223px;
    border-radius: 30px;
    color: #FFFFFF;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`


/* Pensez à link ce fichier à 'Home' et 'About' en corrigeant le bug (expected a string), et supprimer les styled dans ces fichiers */