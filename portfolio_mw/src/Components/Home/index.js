import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import img1 from '../../assets/pictures/img4.jpg';
import './index.scss';


const Home = () => { 

  return (
    <div className = "container home-page">
      <div className="text-zone">
        <h1> Matt Wilkinson
        <img src={LogoTitle} alt="developer" />
        </h1>
        <h2>Full Stack Developer</h2>
        <Link to="contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home




{/* <img src={img1} alt="logo" /> */}