import CardNav from "../../components/card_nav"
import image from '../../assets/IMG.png'
import styled from "styled-components"

const HomeImageBox = styled.div`
    margin-bottom: 43px;
    position: relative;
    width: 100vw;
    max-width: 1240px;
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 550px){
        margin-bottom: 22px;
    }
`

const HomeImage = styled.img`
    height: 223px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
    @media all and (max-width: 767px){
        border-radius: 10px;
    }
    @media all and (max-width: 550px){
        height: 111px;
    }
`

const ShadowImageCover = styled.div`
    position: absolute;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 223px;
    border-radius: 30px;
    color: #FFFFFF;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 767px){
        font-size: 32px;
        border-radius: 10px;
    }
    @media all and (max-width: 550px){
        height: 111px;
        font-size: 24px;
        justify-content: start;
        p {
            width: 217px;
            margin-left: 16px;
        }
    }
`

function Home() {
    return (
        <div>
            <HomeImageBox>
                <HomeImage src={image} alt="cliff"/>
                <ShadowImageCover><p>Chez vous, partout et ailleurs</p></ShadowImageCover>
            </HomeImageBox>
            <CardNav />
        </div>
    )}

export default Home