import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import img1 from '../../assets/pictures/img4.jpg';
import './index.scss';

const Home = () => { 
  return (
    <div className = "container home-page">
      <div className="text-zone">
        <h1> Matt Wilkinson
        <p>Full Stack Developer</p>
        {/* <img src={LogoTitle} alt="developer" /> */}
        </h1>
        
      </div>
    </div>
  );
}

export default Home




