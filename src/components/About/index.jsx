import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = ()=>{
      
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=>{
        setTimeout(()=>{
          setLetterClass('text-animate-hover')
        }, 3000)
      })
    return (
        <>
<div className="container about-page">
    <div className="text-zone">
        <h1>
        <AnimatedLetters letterClass={letterClass} idx={15} strArray={['A','b','o','u','t',' ','m','e']}/></h1>
        <p>I'm a very ambitious front-end developer looking for a role in an
            established softwaare company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
        <p>I'm quiet confident, very determend, motivated and continuously improving my skills trying to overcome each problem at a time</p>
        <p>I'm also known for bieng a curious person, I love science and technology,  I find joy in the process of uncovering the underlying principles of the natural world and the intricate mechanisms of technological advancements </p>

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
<Loader type='pacman'/>
</>
    )
}


export default About 