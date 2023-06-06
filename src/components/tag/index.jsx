import styled from "styled-components";

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
    @media all and (max-width: 550px){
        height: 16px;
        border-radius: 5px;
        font-size: 10px;
    }
`

function Tag({tags}) {
    return (
            <TagBox>{tags}</TagBox>
        )
}

export default Tag