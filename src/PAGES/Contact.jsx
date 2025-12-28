import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import './Contact.css'

const Contanct = () => {
  return (
    <>
    
    <div className='contact'>
      <h1>CONTACT</h1>
      <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      
        
       <motion.div
        className='contact-box'
        initial={{ Opacity: 0, y: 20}}
        whileInView={{ Opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // animate={{  Opacity: 0.5, y: 0 }}
        transition={{ duration: 1}}
       >
        <label>Name</label>
        <input type="text" placeholder='Enter Your Name'/> 
        <br />

        <label>Email</label>
        <input type="text" placeholder='Enter Your Email'/>
        <br />

       <label>Message</label>
       <textarea name="Message" id="" placeholder='Enter Your Message '></textarea>
        <br />

        <Button>SUBMIT</Button>

       </motion.div>
     
    </div>
    </>
  )
}

export default Contanct