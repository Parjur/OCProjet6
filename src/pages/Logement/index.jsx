import Tag from "../../components/tag"
import Description from "../../components/description"
import Drop from "../../components/drop"
import styled from "styled-components"
import avatar from '../../assets/Avatar.jpg'
import Caroussel from "../../components/carrousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'




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
    grid-column-gap: 76px;
    width: 1240px;
    margin-top: 24px;
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
    color: #FF6060;
    font-size: 24px;
    display: flex;
    
    align-items: end;
    gap: 15px;


`
const DropWrapper = styled.div`
    width: 546px;
`

function HouseCard() {
    return (
        <div>
            
            <Caroussel />
            <TopPart>
                <Title>
                    <h2>Cozy loft on the Canal Saint-Martin</h2>
                    <h3>Paris, Île-de-France</h3>
                </Title>
                <Avatar>
                    <p>Nom de profil</p>
                    <img src={avatar} alt="avatar" />
                </Avatar>
                <Tag />
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
                    <Drop />
                    <Description />
                </DropWrapper>
                <DropWrapper>
                    <Drop />
                    <Description />
                </DropWrapper>
            </LowerPart>
        </div>
        
    )}


export default HouseCard