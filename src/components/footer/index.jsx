import logo from '../../assets/logoFooter.png'
import styled from 'styled-components'

const FooterBox = styled.div`
    width: 100%;
    height: 200px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 43px;
`

const FooterText = styled.p`
    color: #FFFFFF;
`

const FooterLogo = styled.img`
    object-fit: contain;
    width: 122px;
    height: 40px;
    
`


function Footer() {
    return (
        <FooterBox>
            <FooterLogo src={logo} alt='logo' />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterBox>
    )
}

export default Footer