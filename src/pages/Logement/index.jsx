import Tag from "../../components/tag"
import Drop from "../../components/drop"
import '../../styles/pages/logement.css'
import Carousel from "../../components/carrousel"
import { useParams, useNavigate } from "react-router-dom"
import data from '../../assets/houses.json'
import Rating from "../../components/rating"
import { useEffect } from "react"


function HouseCard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const datas = data.filter(data => data.id === id)
    const house = datas.pop()
    useEffect(() => {
        if(!house || !datas){
            navigate('/error')
        }
    }, [house, datas, navigate]);
    if(!house || !datas){
        return null;
    }

    const houseTags = house.tags
    const houseEquipments = house.equipments.map((items, index) => (
        <li key={index}>{items}</li> // Listing of equipments from JSON
    ))
    
    window.scrollTo(0, 0);

    return (
        <div>
            <Carousel 
            pictures={house.pictures}
            title={house.title}
            /> 
            <div id="topPart">
                <div className="title">
                    <h2>{house.title}</h2>
                    <h3>{house.location}</h3>
                </div>
                <div className="avatar">
                    <p>{house.host.name}</p>
                    <img src={house.host.picture} alt="avatar" />
                </div>
                <div className="tags">
                    {houseTags.map((items, index) => (
                        <Tag 
                        key={index}
                        tags={items}
                    /> 
                    ))}
                </div>
                <Rating id={id} />
            </div>
            
            <div id="lowerPart">
                <div className="dropWrapper">
                    <Drop 
                    title="Description"
                    id={id}
                    description={house.description}
                    />
                </div>
                <div className="dropWrapper">
                    <Drop 
                    title="Équipements"
                    id={id}
                    description={houseEquipments}
                    />
                </div>
            </div>
        </div>
    )

    
    
}

export default HouseCard