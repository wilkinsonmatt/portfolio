import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import img1 from '../../assets/pictures/img3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFilePdf, faLaptopCode, faGraduationCap, faList } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={img1} alt="logo" />
    </Link>
    <h1> <strong>Matt Wilkinson</strong> </h1>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
    </nav>
    <nav>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
    </nav>
    <nav>
      <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
      </NavLink>
    </nav>
    <nav>
      <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
        <FontAwesomeIcon icon={faList} color="#4d4d4e" />
      </NavLink>
    </nav>
    <nav>
      <NavLink exact="true" activeclassname="active" className="education-link" to="/education">
        <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
      </NavLink>
    </nav>
    <nav>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
        target="_blank" 
        rel='noreferrer' 
        href='https://www.linkedin.com/in/wilkinsonmatt01'
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
        target="_blank" 
        rel='noreferrer' 
        href='https://github.com/wilkinsonmatt'
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
        target="_blank" 
        rel='noreferrer' 
        href='https://docs.google.com/document/d/1QE6gWOPq0Pz5SdzO0BsOl7SfFNahGAsyNiqR7laakG0/edit?usp=sharing'
        >
          <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);
export default Sidebar