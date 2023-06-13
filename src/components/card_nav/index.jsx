import Card from "../card"
import '../../styles/components/card_nav.css'
import data from '../../assets/houses.json'



function CardNav() { 
    return (
        <div id="cardsNavBox">
            {data.map((house) => (
            <Card 
                key={house.id}
                id={house.id}
                title={house.title}
                cover={house.cover}
            />  
            ))}
        </div>
    )
}

export default CardNav