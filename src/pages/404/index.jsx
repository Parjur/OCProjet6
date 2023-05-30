import styled from "styled-components"
import { Link } from "react-router-dom"

const ErrorBox = styled.div`
    width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Error = styled.p`
    font-size: 288px;
    font-weight: 700;
    color: #FF6060;
    margin-top: 104px;
    margin-bottom: 0px;
`

const Message = styled.p`
    font-size: 36px;
    font-weight: 500;
    color: #FF6060;
    margin-top: 66px;
    margin-bottom: 0px;
`
const Return = styled(Link)`
    font-size: 18px;
    font-weight: 500;
    color: #FF6060;
    margin-top: 182px;
    margin-bottom: 222px;
`


function Error404() {
    return (
        <ErrorBox>
            <Error>404</Error>
            <Message>Oups! La page que vous demandez n'existe pas.</Message>
            <Return to="/">Retourner à la page d'accueil</Return>
        </ErrorBox>
    )}


export default Error404