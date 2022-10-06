import img1 from '../../assets/pictures/img4.jpg';
import { Link,  } from 'react-router-dom';


const Home = () => { 

  return (
    <div classsName = "home-page">
      <Link className='logo' to='/'>
        {/* <img src={img1} alt="logo" /> */}
        <p>I'm Full Stack Developer in <span class="typed" data-typed-items="JavaScript, React, C#, .NET"></span></p>
      </Link>
    </div>
  );
};

export default Home