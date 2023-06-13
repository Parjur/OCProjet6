import '../../styles/pages/404.css'
import { Link } from "react-router-dom"

function Error404() {
    return (
        <div id='error'>
            <p id="code">404</p>
            <p id="message">Oups! La page que vous demandez n'existe pas.</p>
            <Link className='link' to="/">Retourner à la page d'accueil</Link>
        </div>
    )}

export default Error404