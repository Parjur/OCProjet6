import styled from "styled-components";

const DescriptionBox = styled.div`
    max-width: 987px;
    min-width: 546px;
    
    background-color: #F7F7F7;
    border-radius: 5px;
    padding: 27px 18px 19px;
    color: #FF6060;
    font-size: 24px;
    font-weigth: 400;
    line-heigth: 34px;
    margin-bottom: 31px;

    list-style: none;
    
`

function Description({description}) {
    return (
        <DescriptionBox>
            {description}
        </DescriptionBox>
    )
}

export default Description