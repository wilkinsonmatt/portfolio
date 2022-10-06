import img1 from '../../assets/pictures/img4.jpg';
import { Link,  } from 'react-router-dom';


const Home = () => { 

  return (
    <div classsName = "container home-page">
      <Link className='logo' to='/'>
        
        I'm Full Stack Developer in
        <p>I'm Full Stack Developer in <span class="typed" data-typed-items="JavaScript, React, C#, .NET"></span></p>
      lobodan
      </Link>
      web
    </div>
  );
};

export default Home




{/* <img src={img1} alt="logo" /> */}