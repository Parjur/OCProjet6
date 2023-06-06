import styled from "styled-components";

const DescriptionBox = styled.div`
    max-width: 100%;
    background-color: #F7F7F7;
    border-radius: 5px;
    padding: 27px 18px 19px;
    color: #FF6060;
    font-size: 24px;
    font-weigth: 400;
    line-heigth: 34px;
    margin-bottom: 31px;
    list-style: none;
    @media all and (max-width: 1240px){
        box-sizing: border-box;
        width: 90vw;
    }
    @media all and (max-width: 550px){
        font-size: 12px;
        
    }
`

function Description({description}) {
    return (
        <DescriptionBox>
            {description}
        </DescriptionBox>
    )
}

export default Description