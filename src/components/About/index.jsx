import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

const About = ()=>{
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=>{
        setTimeout(()=>{
          setLetterClass('text-animate-hover')
        }, 3000)
      })
    return (
<div className="container about-page">
    <div className="text-zone">
        <h1>
        <AnimatedLetters letterClass={letterClass} idx={15} strArray={['A','b','o','u','t',' ','m','e']}/></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque, adipisci laborum unde beatae atque amet, quod suscipit veritatis dolore dolorem! Possimus blanditiis deserunt facere facilis ipsa qui, consequatur praesentium?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque, adipisci laborum unde beatae atque amet, quod suscipit veritatis dolore dolorem! Possimus blanditiis deserunt facere facilis ipsa qui, consequatur praesentium?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque, adipisci laborum unde beatae atque amet, quod suscipit veritatis dolore dolorem! Possimus blanditiis deserunt facere facilis ipsa qui, consequatur praesentium?</p>

    </div>
    <div className="stage-cube-cont">
        <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color='#68a063'/>
            </div>
        </div>
    </div>
</div>
    )
}


export default About 