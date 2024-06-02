import React from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import myImage1 from './images/image1.jpg'; // Images for the carousel
import myImage2 from './images/image2.jpg';
import myImage3 from './images/image3.jpg';
import myImage4 from './images/image4.jpg';

function App() {
  const images = [myImage1, myImage2, myImage3, myImage4];
  const captions = [
    'Caption for Image 1',
    'Caption for Image 2',
    'Caption for Image 3',
    'Caption for Image 4',
  ];

  return (
    <div className="App">
      <header>
        <h1>
          <a href="#">Church Name</a>
        </h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Ministries</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="container">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Image ${index + 1}`}
              />
              <Carousel.Caption>
                <h3>{captions[index]}</h3>
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