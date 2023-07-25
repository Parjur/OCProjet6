import CardNav from "../../components/card_nav"
import image from '../../assets/IMG.png'
import '../../styles/pages/home.css'


function Home() {
    return (
        <div>
            <div id="homeImageBox">
                <img src={image} alt="cliff"/>
                <div id="shadowImageCover"><p>Chez vous, partout et ailleurs</p></div>
            </div>
            <CardNav />
        </div>
    )}

export default Home