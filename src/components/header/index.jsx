import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 70px;
    width: 1240px;
`
const NavBox = styled.ul`
    display: flex;
    gap: 57px;
`
const Logo = styled.img`
    object-fit: contain;
    width: 210px;
    height: 68px;
`

const NavLinks = styled(Link)`
    color: #FF6060;
    list-style-type: none;
    
    font-size: 24px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
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