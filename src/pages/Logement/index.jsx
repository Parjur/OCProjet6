import Tag from "../../components/tag"
import Drop from "../../components/drop"
import styled from "styled-components"
import Carousel from "../../components/carrousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom"
import data from '../../assets/houses.json'
import { useEffect } from "react"


const TopPart = styled.div`
    width: 1240px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 1024px){
        width: 90vw;
        display: grid;
        grid-template-column: 3;
        grid-template-row: 3;
        .title {
            grid-row: 1;
            grid-column: 1 / 3;
        }
        .tags {
            grid-row: 2;
            grid-column: 1 / 3;
        }
        .rating {
            grid-row: 3;
            grid-column: 1;
        }
        .avatar {
            grid-row: 3;
            grid-column: 2 / 3;
        }
    }
    @media all and (max-width: 550px){
        .title {
            grid-column: 1 / 3;
            width: 280px;
        }
        .tags {
            width: 280px;
        }
        .rating {
            gap: 5px;
            width: 125px;
            font-size: 16px;
        }
    }
`

const LowerPart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 65px;
    width: 1240px;
    margin-top: 0px;
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 1024px){
        grid-template-columns: 1fr;
        width: 90vw;
    }    
`
const Title = styled.div`
    width: 900px;
    h2 {
        font-size: 36px;
        font-weight: 500;
        color: #FF6060;
        margin: 0px;
    }
    h3 {
        font-size: 18px;
        font-weight: 500;
        color: #FF6060;
        margin-top: 0px;
    }
    @media all and (max-width: 1240px){
        width: 600px;
    }
    @media all and (max-width: 768px){
        width: 490px;
    }
    @media all and (max-width: 550px){
        h2 {
            font-size: 18px;
        }
        h3 {
            font-size: 14px;
        }
    }
`
const Avatar = styled.div`
    width: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    margin: 0px;
    img {
        width: 64px;
        height: 64px;
        border-radius: 50px; 
    }
    p {
        color: #FF6060;
        font-size: 18px;
        font-weight: 500;
        text-align: right;
    }
    @media all and (max-width: 550px){
        p {
            font-size: 12px;
        }
        img {
            width: 32px;
            height: 32px;
        }
    }
`
const RatingWrapper = styled.div`
    color: #E3E3E3;
    font-size: 24px;
    display: flex;
    align-items: end;
    gap: 15px;
    .filled {
        color: #FF6060;
    }
    @media all and (max-width: 1024px){
        align-items: center;
        gap: 6px;
        width: 180px;
    }
`
const DropWrapper = styled.div`
    width: 100%;
    
`
const TagWrapper = styled.div`
    width: 650px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    @media all and (max-width: 1024px){
        width: 100%;
    }
`

function HouseCard() {
    const { id } = useParams()
    const datas = data.filter(data => data.id === id)
    const house = datas.pop()
    const houseTags = house.tags
    const houseEquipments = house.equipments.map((items, index) => (
        <li key={index}>{items}</li> // Listing of equipments from JSON
    ))
    const rating = house.rating
    useEffect(() => {
        const stars = document.getElementsByClassName('fa-star');
        for(let i = 0 ; i < stars.length ; i++){
            const starValue = i + 1;
            if(starValue <= rating){
                stars[i].classList.add('filled')
            } else {
                stars[i].classList.remove('filled')
            }
        }
    }, [rating])
    
    window.scrollTo(0, 0);

    return (
        <div>
            <Carousel 
            pictures={house.pictures}
            title={house.title}
            /> 
            <TopPart>
                <Title className="title">
                    <h2>{house.title}</h2>
                    <h3>{house.location}</h3>
                </Title>
                <Avatar className="avatar">
                    <p>{house.host.name}</p>
                    <img src={house.host.picture} alt="avatar" />
                </Avatar>
                <TagWrapper className="tags">
                    {houseTags.map((items, index) => (
                        <Tag 
                        key={index}
                        tags={items}
                    /> 
                    ))}
                </TagWrapper>
                <RatingWrapper className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </RatingWrapper>
            </TopPart>
            
            <LowerPart>
                <DropWrapper>
                    <Drop 
                    title="Description"
                    id={id}
                    description={house.description}
                    />
                </DropWrapper>
                <DropWrapper>
                    <Drop 
                    title="Équipements"
                    id={id}
                    description={houseEquipments}
                    />
                </DropWrapper>
            </LowerPart>
        </div>
    )}

export default HouseCard