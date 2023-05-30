import Card from "../card"
import styled from "styled-components"


const CardsNavBox = styled.div`
    width: 1140px;
    height: auto;
    padding: 50px;
    background-color: #F0F0F0;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 60px;
    grid-row-gap: 50px;
    
    
`

function CardNav() { /* Delete les cards superflues quand la fonction sera prête*/
    return (
        <CardsNavBox>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsNavBox>
    )
}

export default CardNav