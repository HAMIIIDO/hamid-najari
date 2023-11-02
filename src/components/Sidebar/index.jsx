import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoH from '../../assets/images/logo-h.png'
import LogoSubtitle from '../../assets/images/sub-logo-2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (<div className='nav-bar'
>
  <Link className='logo' to='/'>
    <img src={LogoH} alt="logo" />
    <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
  </Link>
  <nav>
    <NavLink exact="true" activeclassname="active"  to="/" ><FontAwesomeIcon icon={faHome} color="#4d4d4e" /> </NavLink>
    <NavLink className="about-link" exact="true" activeclassname="active" to="/about" ><FontAwesomeIcon icon={faUser} color="#4d4d4e"  /> </NavLink>
    <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact" ><FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> </NavLink>
  </nav>
  <ul>
    <li>
      <a target="_blank" rel='noreferrer' href="#"><FontAwesomeIcon icon={faLinkedin}color="#4d4d4e" /> </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href="#"><FontAwesomeIcon icon={faGithub}color="#4d4d4e" /> </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href="#"><FontAwesomeIcon icon={faYoutube}color="#4d4d4e" /> </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href="#"><FontAwesomeIcon icon={faSkype}color="#4d4d4e" /> </a>
    </li>
  </ul>

</div>)



export default Sidebar