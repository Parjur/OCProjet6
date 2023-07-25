import logo from '../../assets/logoFooter.png'
import '../../styles/components/footer.css'

function Footer() {
    return (
        <div id='footer'>
            <img src={logo} alt='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer