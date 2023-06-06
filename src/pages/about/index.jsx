import image from '../../assets/img_about.png'
import Drop from '../../components/drop'
import styled from 'styled-components'
import data from '../../assets/about.json'

const AboutImageBox = styled.div`
    position: relative;
    margin-bottom: 43px;
    width: 100vw;
    max-width: 1240px;
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 550px){
        margin-bottom: 22px;
    }
`

const AboutImage = styled.img`
    height: 223px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 767px){
        border-radius: 10px;
    }
    @media all and (max-width: 550px){
        height: 255px;
    }
`
const ShadowImageCover = styled.div`
    position: absolute;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 223px;
    border-radius: 30px;
    @media all and (max-width: 1240px){
        width: 90vw;
    }
    @media all and (max-width: 767px){
        font-size: 32px;
        border-radius: 10px;
    }
    @media all and (max-width: 550px){
        height: 255px;
    }
    
`

const Droppers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 600px;
    @media all and (max-width: 550px){
        min-height: 300px;
    }
`
const DropWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
`

function About() {
    return (
        <div>
            <AboutImageBox>
                <AboutImage src={image} alt='about' />
                <ShadowImageCover />
            </AboutImageBox>
            <Droppers>
                {data.map((about, index) => (
                <DropWrapper key={`category_${index}`}>
                    <Drop
                    
                    id={`collapsible_${index}`} 
                    title={about.category}
                    description={about.description}
                    />
                    
                </DropWrapper>   
                ))}
            </Droppers>
        </div>
    )}


export default About