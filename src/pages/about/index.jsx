import image from '../../assets/img_about.png'
import Drop from '../../components/drop'
import '../../styles/pages/about.css'
import data from '../../assets/about.json'


function About() {
    return (
        <div>
            <div id='aboutImageBox'>
                <img src={image} alt='about' />
                <div id='shadowImageCover' />
            </div>
            <div id='droppers'>
                {data.map((about, index) => (
                <div id='dropWrapper' key={`category_${index}`}>
                    <Drop
                    id={`collapsible_${index}`} 
                    title={about.category}
                    description={about.description}
                    />
                </div>   
                ))}
            </div>
        </div>
    )}


export default About