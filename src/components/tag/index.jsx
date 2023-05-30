import styled from "styled-components";

const TagWrapper = styled.div`
    width: 650px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const TagBox = styled.p`
    min-width: 75px;
    height: 25px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #FF6060;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 14px;
    font-weigth: 500;
    text-align: center;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Tag() {
    return (
        <TagWrapper>
           <TagBox>Cosy</TagBox>
           <TagBox>Canal</TagBox>
           <TagBox>Paris 10</TagBox>
           <TagBox>Texte super long pour tester la réaction</TagBox>
           <TagBox>Ce texte super long doit être en bas des autres</TagBox>
        </TagWrapper>
    )
}

export default Tag