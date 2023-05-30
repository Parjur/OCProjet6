import styled from "styled-components"

const CardWrapper = styled.div`
    width: 340px;
    height: 340px;
    background-color: #FF6060;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url('');
    border-radius: 10px;
    padding: 0px;
`

const CardBox = styled.div`
    width: 340px;
    height: 340px;
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

function Card() {
    
    
    return (
    <CardWrapper>
        <CardBox>
            <CardTitle>Titre de la location</CardTitle>
        </CardBox>
    </CardWrapper>
    )

}

export default Card