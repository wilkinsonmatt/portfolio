import './index.scss';

const About = () => {

  return (
    <div className="container contact-page">
      <div className="text-zone">

      <div className="contact-form">
        <form>
            <ul>
              <li className='half'>
                <input placeholder="Name" 
                  type="text" 
                  name="name" 
                  required 
                />
                <li>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li className="half">
                <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About