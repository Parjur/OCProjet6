import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    width: 1240px;
    @media all and (max-width: 1240px){
        width: 90vw;       
    }
    @media all and (max-width: 550px){
        margin-bottom: 20px;
    }
`
const NavBox = styled.ul`
    display: flex;
    gap: 57px;
    @media all and (max-width: 550px){
        gap: 10px;
        width: 113px;
        padding-left: 0px;
    }
`
const Logo = styled.img`
    object-fit: contain;
    width: 210px;
    height: auto;
    @media all and (max-width: 550px){
        width: 140px;
        height; auto;       
    }
`

const NavLinks = styled(Link)`
    color: #FF6060;
    list-style-type: none;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media all and (max-width: 550px){
        font-size: 12px;
    }
`

function Header() {
    return (
        <HeaderBox>
            <Logo src={logo} alt='logo' />
            <nav>
                <NavBox>
                    <NavLinks to="/">Accueil</NavLinks>
                    <NavLinks to="/about">À propos</NavLinks>
                </NavBox>
            </nav>
        </HeaderBox>
    )
}

export default Header