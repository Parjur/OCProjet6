import styled from "styled-components"
import { Link } from "react-router-dom"

const CardBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
`

const CardTitle = styled.p`
    color: #FFFFFF;
    font-size: 18px;
    height: auto;
    width: auto;
    margin: 20px;
`
const CardLinks = styled(Link)`
width: 340px;
height: 340px;
background-color: #FF6060;
background-position: center;
background-size: cover;
background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(${props => props.cover});
border-radius: 10px;
padding: 0px;
@media all and (max-width: 1240px){
    width: 100%;
    height: 300px;      
}
@media all and (max-width: 426px){
    height: 255px;
    width: 90vw;
}
`

function Card({id, title, cover}) {
    const url = `/logement/${id}`
    
    return (
    <CardLinks to={url} cover={cover}>
        <CardBox>
            <CardTitle>{title}</CardTitle>
        </CardBox>
    </ CardLinks>
    )
}

export default Card