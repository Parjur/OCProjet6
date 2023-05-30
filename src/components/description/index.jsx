import styled from "styled-components";

const DescriptionBox = styled.div`
    max-width: 987px;
    min-width: 546px;
    width: 100%;
    background-color: #F7F7F7;
    border-radius: 5px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 36px;
    padding-bottom: 19px;
    color: #FF6060;
    font-size: 24px;
    font-weigth: 400;
    line-heigth: 34px;
    margin-bottom: 31px;
    
`

function Description() {
    return (
        <DescriptionBox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Augue mauris augue neque gravida in fermentum et sollicitudin ac.
        </DescriptionBox>
    )
}

export default Description