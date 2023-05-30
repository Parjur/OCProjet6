import CardNav from "../../components/card_nav"
import image from '../../assets/IMG.png'
import styled from "styled-components"

const HomeImageBox = styled.div`
    margin-bottom: 43px;
    position: relative;
`

const HomeImage = styled.img`
    height: 223px;
    width: 1240px;
    border-radius: 25px;
    object-fit: cover;
`

const ShadowImageCover = styled.div`
    position: absolute;
    top: 0px;
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

function Home() {
    return (
        <div>
            <HomeImageBox>
                <HomeImage src={image} alt="cliff"/>
                <ShadowImageCover>Chez vous, partout et ailleurs</ShadowImageCover>
            </HomeImageBox>
            <CardNav />
        </div>
        
    )}


export default Home