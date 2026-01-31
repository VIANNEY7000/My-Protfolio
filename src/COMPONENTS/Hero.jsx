import profile from "../assets/myphoto.jpg"
import './Hero.css'
import {Button} from '@mui/material'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="intro">
        <h1>Hi i'm VIANNEY</h1>
        <h2> A <span>Full-Stack</span> Developer specializing in the modern web.</h2>
        <p> I turn complex problems into simple, beautiful, and high-performing applications. Whether it’s architecting a database or crafting a responsive UI, I build with performance and accessibility in mind.</p>
        <Button>PROJECTS</Button>
        </div>

        <div className="image">
            <img src={profile} alt="" />
        </div>
    </div>
  )
}

export default Hero