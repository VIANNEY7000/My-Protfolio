import './Navbar.css'
import profile from "../assets/myprofile.jpg"
import { IoCodeWorkingOutline, IoHomeOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5'


const Navbar = () => {
  return (
    <>
    <div className='navbar'>

        <div className="profile">
            <div>
            <img src={profile} alt="" />
            </div>
            <div>
                <h3>JOHN VIANNEY</h3>
            </div>
        </div>

        <div className="menue">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>

      {/* MONILE NAVBAR */}
        <div className="mobile-nav">
            <ul>
                <li><IoHomeOutline size={24}/><br />
                <span>HOME</span>
                </li>
                <li><IoPersonOutline size={24}/>
                <span>ABOUT</span>
                </li>
                <li><IoCodeWorkingOutline size={24}/>
                <span>PROJECTS</span>
                </li>
                <li><IoMailOutline size={24}/>
                <span>CONTACT</span>
                </li>
            </ul>
        </div>
        </>
  )
}

export default Navbar