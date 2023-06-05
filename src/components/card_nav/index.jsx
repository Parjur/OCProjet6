import Card from "../card"
import styled from "styled-components"
import data from '../../assets/houses.json'

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

function CardNav() { 
    return (
        <CardsNavBox>
            {data.map((house) => (
            <Card 
                key={house.id}
                id={house.id}
                title={house.title}
                cover={house.cover}
            />  
            ))}
            
        </CardsNavBox>
    )
}

export default CardNav