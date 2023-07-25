import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import data from '../../assets/houses.json'

function Rating({id}){
    const datas = data.filter(data => data.id === id)
    const house = datas.pop()
    const rating = house.rating
    useEffect(() => {
        
        const stars = document.getElementsByClassName('fa-star');
        for(let i = 0 ; i < stars.length ; i++){
            const starValue = i + 1;
            if(starValue <= rating){
                stars[i].classList.add('filled')
            } else {
                stars[i].classList.remove('filled')
            }
        }
    }, [rating])

    return (
        <div className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    )
}

export default Rating