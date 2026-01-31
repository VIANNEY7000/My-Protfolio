import cloth from '../assets/clothwbs.png'
import car from '../assets/carwebsite.png'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import './project.css'


const Projects = () => {
  return (
    <>
    <div className='projects'>
      <h1>PROJECTS</h1>

    <div className="big-screen">
      <div className="project-container">
        <div className="project-image">
           <img src={cloth} />
        </div>

        <div className="project-info">
          <h2>Cloth shoping</h2>
         
          <p>A high-performance e-commerce application built to demonstrate complex state management and a modular component architecture. This project showcases the integration of dynamic data fetching, secure checkout simulations, and an optimized UI/UX tailored for the modern fashion retail industry.</p>
          <div className="dom-con">
            <div className="dom">React</div>
            <div className="dom"> Css</div>
            <div className="dom">JavaScript</div>
           
            <Button>View</Button> <Button>GitHub</Button>
            
          </div>
        </div>
      </div>

        {/* second */}

       <div className="project-container">
        <div className="project-image">
           <img src={car} />
        </div>

        <div className="project-info">
          <h2>Cloth shoping</h2>
          <p>A high-performance e-commerce application built to demonstrate complex state management and a modular component architecture. This project showcases the integration of dynamic data fetching, secure checkout simulations, and an optimized UI/UX tailored for the modern fashion retail industry.</p>
          <div className="dom-con">
            <div className="dom">React</div>
            <div className="dom"> Css</div>
            <div className="dom">JavaScript</div>
           
            <Button>View</Button> <Button>GitHub</Button>
            
          </div>
        </div>
      </div>
 
      {/* third */}
       <div className="project-container">
        <div className="project-image">
           <img src={cloth} />
        </div>

        <div className="project-info">
          <h2>Cloth shoping</h2>
          <p>A high-performance e-commerce application built to demonstrate complex state management and a modular component architecture. This project showcases the integration of dynamic data fetching, secure checkout simulations, and an optimized UI/UX tailored for the modern fashion retail industry.</p>
          <div className="dom-con">
            <div className="dom">React</div>
            <div className="dom"> Css</div>
            <div className="dom">JavaScript</div>
           
            <Button>View</Button> <Button>GitHub</Button>
            
          </div>
        </div>
      </div>
      </div>




      <div className="mobile-project-container">
      
        <motion.div
          className='project-box'
          initial={{ Opacity: 0, y: 20}}
          whileInView={{ Opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1}}
       >
       <img src={cloth} alt=""/>
       <p>A high-performance e-commerce application</p>
       <span>React</span>
       <span>Css</span>
       <span>View</span>
       <span>GitHub</span>
       

       

       </motion.div>

         <motion.div
          className='project-box'
          initial={{ Opacity: 0, y: 20}}
          whileInView={{ Opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1}}
       >
       <img src={cloth} alt=""/>
       <p>A high-performance e-commerce application</p>
       <span>React</span>
       <span>Css</span>
       <span>View</span>
       <span>GitHub</span>
       

       

       </motion.div>

      </div>
    </div>
    </>
  )
}

export default Projects