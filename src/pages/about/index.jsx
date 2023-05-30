import image from '../../assets/img_about.png'
import Description from '../../components/description'
import Drop from '../../components/drop'
import styled from 'styled-components'

const AboutImageBox = styled.div`
    position: relative;
    margin-bottom: 43px;
`

const AboutImage = styled.img`
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
    
`

const Droppers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1240px;
    min-height: 600px;
`
const DropWrapper = styled.div`
    width: 1024px;
`


function About() {
    return (
        <div>
            <AboutImageBox>
                <AboutImage src={image} alt='about' />
                <ShadowImageCover />
            </AboutImageBox>
            <Droppers>
                <DropWrapper>
                    <Drop />
                </DropWrapper>
                <DropWrapper>
                    <Drop />
                    <Description />
                </DropWrapper>
                <DropWrapper>
                    <Drop />
                </DropWrapper>
                <DropWrapper>
                    <Drop />
                </DropWrapper>
            </Droppers>
        </div>
    )}


export default About