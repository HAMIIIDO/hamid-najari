import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

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
    .stage-cube-page
</div>
    )
}


export default About 