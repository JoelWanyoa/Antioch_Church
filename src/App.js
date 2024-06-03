import React, { useState } from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

import myImage1 from './images/image1.jpg'; // Images for the carousel
import myImage2 from './images/image2.jpg';
import myImage3 from './images/image3.jpg';
import myImage4 from './images/image4.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const images = [myImage1, myImage2, myImage3, myImage4];
  const captions = [
    'Bring Life to a Dead World',
    'Captivate the soul with the food of Life',
    'Increase the Kingdom through creative ministry',
    'Enhance the culture of Loving God',
  ];

  const captionParagraphs = [
    'We stand as vessels of the Ministry of Christ, entrusted with the sacred task of bringing life to a dead world through the Word of God. With unwavering faith and steadfast conviction, we proclaim His truth to dispel darkness and breathe hope into the depths of despair. Through the timeless wisdom of Scripture and the power of His divine message, we illuminate paths of redemption and renewal, infusing barren landscapes with the vibrant promise of salvation.',
    'We beckon on a journey beyond the mundane, inviting you to indulge in the nourishment of not just the body, but the spirit itself. Like a masterful chef crafting a symphony of flavors, we tantalize your senses and stir your deepest emotions. It\'s more than mere sustenance; it\'s an exquisite blend of nourishment for your body, mind, and soul. Each bite, each experience, is a revelation, unlocking the essence of existence and igniting a passion for living fully.',
    'We, as faithful stewards of the Ministry of Christ, are called to magnify His Kingdom through the transformative lens of creative ministry. With devotion as our compass and ingenuity as our tool, we illuminate the path of discipleship with innovative approaches and fervent dedication. Our mission is to amplify His teachings, weaving them into the fabric of daily life, and nurturing souls towards spiritual abundance.',
    'We, as custodians of the Ministry of Christ, are steadfast in our commitment to enhancing the culture of loving God. With reverence as our foundation and compassion as our guide, we cultivate a community where adoration and devotion flourish. Through heartfelt worship, fervent prayer, and acts of unwavering kindness, we deepen our connection to the Divine and nurture a profound love for God within ourselves and others.'
  ];

  return (
    <div className="App">
      <header>
        <h1 className=''>
          <a href="#" className='small'>&nbsp; Antioch Grace Ministries</a>
        </h1>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Ministries</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Image ${index + 1}`}
              />
              <Carousel.Caption className='caption-overlay'>
                <h3 className="caption-title">{captions[index]}</h3>
                <p className="caption-text">{captionParagraphs[index]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section>
        <div className="container">
          <div className="container-box">
            <div className="mybox text-center">
              <div>
                <h1 className="text-sm">Mission</h1>
                <p>
                  Serving our community with compassion, guided by the teachings of Jesus Christ.
                </p>
              </div>
            </div>
            <div className="mybox text-center">
              <div>
                <h1>Vision Statement</h1>
                <p>
                  Our vision is to be a beacon of hope and compassion in our community, offering support, service, and a sense of belonging to all. We envision a church transformed by the Holy Spirit, actively engaging in outreach and missions to spread the Gospel message far and wide.
                </p>
              </div>
            </div>
            <div className="mybox">
              <div>
                <h1 className="text-center">Our Values</h1>
                <ul className="text-left">
                  <li>Love</li>
                  <li>Faith</li>
                  <li>Hope</li>
                  <li>Compassion</li>
                  <li>Stewardship</li>
                  <li>Worship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
