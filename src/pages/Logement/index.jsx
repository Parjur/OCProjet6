import Tag from "../../components/tag"

import Drop from "../../components/drop"
import styled from "styled-components"
import Carousel from "../../components/carrousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom"
import data from '../../assets/houses.json'
import { useState } from "react"
import { useEffect } from "react"


const TopPart = styled.div`
    width: 1240px;
    display: flex;
    justify-content: space-between;
    column-width: 50%;
    flex-wrap: wrap;
`

const LowerPart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 65px;
    width: 1240px;
    margin-top: 0px;
`
const Title = styled.div`
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
`
const Avatar = styled.div`
    width: auto;
    display: flex;
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
    

`
const DropWrapper = styled.div`
    width: 100%;
    
`
const TagWrapper = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`



function HouseCard() {
    const { id } = useParams()
    const datas = data.filter(data => data.id === id)
    const house = datas.pop()
    const houseTags = house.tags
    
    const houseEquipments = house.equipments.map((items, index) => (
        <li key={index}>{items}</li> // Listing des équipements à partir du JSON
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
    
    

    return (
        <div>
            
            
            <Carousel 
            pictures={house.pictures}
            title={house.title}
                
            /> 
            
            
            
            <TopPart>
                <Title >
                    <h2>{house.title}</h2>
                    <h3>{house.location}</h3>
                </Title>
                <Avatar>
                    <p>{house.host.name}</p>
                    <img src={house.host.picture} alt="avatar" />
                </Avatar>
                <TagWrapper>
                    {houseTags.map((items, index) => (
                        <Tag 
                        key={index}
                        tags={items}
                    /> 
                    ))}
                </TagWrapper>
                
                <RatingWrapper>
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