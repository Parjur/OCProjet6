import styled from "styled-components"
import image from "../../assets/Vector.png"


const DropBox = styled.div`
    max-width: 987px;
    min-width: 546px;
    width: 100%;
    height: 47px;
    background-color: #FF6060;
    border-radius: 5px;
    margin-bottom: 31px;
    padding-left: 18px;
    padding-right: 18px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`

const Vector = styled.img`
    object-fit: contain;
    width: 24px;


    
`

function Drop() {
    return (
            <DropBox>
                    <p>Fiabilité</p>
                    <Vector src={image} alt="vector" />
            </DropBox>
    )
}

export default Drop