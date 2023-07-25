import { Link } from "react-router-dom"
import '../../styles/components/card.css'
import { useRef, useEffect } from "react"

function Card({id, title, cover}) {
    const url = `/logement/${id}`
    const cardLinkRef = useRef(null);

    useEffect(() => {
        if (cardLinkRef.current) {
        cardLinkRef.current.style.backgroundImage = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(${cover})`;
        }
    }, [cover]);
    return (
    <Link className="cardLink" to={url} ref={cardLinkRef}>
        <div id="cardBox">
            <p>{title}</p>
        </div>
    </Link>
    )
}

export default Card