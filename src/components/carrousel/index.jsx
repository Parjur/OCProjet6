import styled from "styled-components";
import image from '../../assets/PlaceHolder_Caroussel.png'

const Image = styled.img`
    margin-bottom: 30px;
`

function Caroussel() {
    return (
        <div>
            <Image src={image} alt="placeholder" />
        </div>
    )
}

export default Caroussel