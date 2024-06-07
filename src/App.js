import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons';
import myImage1 from './images/image1.jpg'; // Images for the carousel
import myImage2 from './images/image2.jpg';
import myImage3 from './images/image3.jpg';
import myImage4 from './images/image4.jpg';
import myImage5 from './images/cross.png';
import myImage6 from './images/crown.png';
import myImage7 from './images/dove.png';
import myImage8 from './images/cup.png';
import backgroundImage from './images/cup.png'; // Adjust the path
function App() {
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
   <Header />
   <section>
      <Carousel>
         {images.map((image, index) => (
         <Carousel.Item key={index}>
            <img
            className="d-block w-100"
            src={image}
            alt={`Image ${index + 1}`}
            />
            <Carousel.Caption className='caption-overlay my-3'>
               <h3 className="caption-title">{captions[index]}</h3>
               <p className="caption-text">{captionParagraphs[index]}</p>
            </Carousel.Caption>
         </Carousel.Item>
         ))}
      </Carousel>
   </section>
   <section className='myStatements'>
      <div className="container">
         <div className="container-box align-items-center">
            <div className="mybox text-center">
               <div>
                  <FontAwesomeIcon icon={faHandsHelping} size="2x" className="icon" />
                  <h1 className="text-sm">Mission</h1>
                  <p>
                     Serving our community with compassion, guided by the teachings of Jesus Christ.
                  </p>
               </div>
            </div>
            <div className="mybox text-center">
               <div>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className="icon" />
                  <h1>Vision Statement</h1>
                  <p>
                     Our vision is to be a beacon of hope and compassion in our community, offering support, service, and a sense of belonging to all. We envision a church transformed by the Holy Spirit, actively engaging in outreach and missions to spread the Gospel message far and wide.
                  </p>
               </div>
            </div>
            <div className="mybox">
               <div>
                  <center>
                     <FontAwesomeIcon icon={faHeart} size="2x" className="icon"/>
                  </center>
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
   <section className='myStatements'>
      <div className='container mx-auto'>
         <div className='justify-content-center'>
            <h1 className='text-center my-3'>Our Pillars</h1>
            <div className='row p-3'>
               <div className='col-md-3 col-sm-6 my-2'>
                  <div className='border-lightgray d-flex flex-column align-items-center justify-content-center p-3'>
                     <img src={myImage5} alt='image 1' width={100} height={100} className='img-fluid rounded-circle image-frame' />
                     <h3>Truth</h3>
                     <p className='mt-3 text-justify'> At Antioch Grace Ministries, truth is the cornerstone of our faith and foundation of our lives. We uphold the absolute truth of the Holy Scriptures, finding clarity, direction, and purpose through God's Word. Truth guides our actions, informs decisions, and shapes our character. In a world filled with uncertainty and misinformation, we strive to be a beacon of honesty and integrity, standing firm in our convictions and encouraging others to embrace the truth. By living out this pillar, we reflect God's unwavering and eternal truth, fostering a community rooted in authenticity, transparency, and faithfulness.</p>
                  </div>
               </div>
               <div className='col-md-3 col-sm-6 my-2'>
                  <div className='border-lightgray d-flex flex-column align-items-center justify-content-center p-3'>
                     <img src={myImage6} alt='image 2' width={100} height={100} className='img-fluid rounded-circle image-frame'/>
                     <h3>Royalty</h3>
                     <p className='mt-3 text-justify'> We embrace royalty as a pillar, reflecting our identity as children of the King of Kings. We believe that through Christ, we are heirs to a divine heritage, called to live with dignity, honor, and purpose. This royal identity compels us to carry ourselves with grace and humility, serving others with the love and authority bestowed upon us by our Heavenly Father. By acknowledging our royal status, we strive to cultivate a community that upholds the values of the Kingdom of God—justice, mercy, and love—empowering each member to walk in their God-given authority and inheritance.</p>
                  </div>
               </div>
               <div className='col-md-3 col-sm-6 my-2'>
                  <div className='border-lightgray d-flex flex-column align-items-center justify-content-center p-3'>
                     <img src={myImage7} alt='image 3' width={100} height={100} className='img-fluid rounded-circle image-frame'/>
                     <h3>Holiness</h3>
                     <p className='mt-3 text-justify'> 
                        At Antioch Grace Ministries, holiness is a core pillar, reflecting our commitment to a life dedicated to God. We view holiness as a transformative journey, aligning our hearts, minds, and actions with God's divine nature. This commitment drives us to embrace purity, integrity, and righteousness in all we do. By striving for holiness, we aim to mirror Christ's character, creating a community focused on spiritual growth and moral excellence. Our dedication to holiness allows us to be a light in the world, showcasing the beauty and power of a life devoted to God.
                     </p>
                  </div>
               </div>
               <div className='col-md-3 col-sm-6 my-2'>
                  <div className='border-lightgray d-flex flex-column align-items-center justify-content-center p-3'>
                     <img src={myImage8} alt='image 4' width={100} height={100} className='img-fluid rounded-circle image-frame'/>
                     <h3>Community</h3>
                     <p className='mt-3 text-justify'> Community is a foundational pillar, reflecting our dedication to fostering strong, supportive relationships among our members. We believe that true community is built on love, mutual respect, and shared faith. By actively engaging in each other's lives, offering support, and working together towards common goals, we create a nurturing environment where everyone can thrive. Our commitment to community ensures that no one stands alone, and together, we can grow spiritually, emotionally, and socially. We aim to exemplify the unity and compassion that Christ taught us, building a vibrant, interconnected church family.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>
      {/* <!-- Services Section --> */}
      <div className="bg-light py-5 service-11">
         <h1 className='text-center text-sm'>What we pride ourselves in</h1>
         <div className="container">
            {/* <!-- Row  --> */}
            <div className="row">
               {/* <!-- Column --> */}
               <div className="col-md-4 wrap-service11-box">
                  <div className="card card-shadow border-0 mb-4">
                     <div className="p-4">
                        <div className="icon-space">
                           <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">R</div>
                        </div>
                        <h6 className="font-weight-medium">Relationships</h6>
                        <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                     </div>
                  </div>
               </div>
               {/* <!-- Column --> */}
               <div className="col-md-4 wrap-service11-box">
                  <div className="card card-shadow border-0 mb-4">
                     <div className="p-4">
                        <div className="icon-space">
                           <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">F</div>
                        </div>
                        <h6 className="font-weight-medium">Fruitfulness</h6>
                        <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                     </div>
                  </div>
               </div>
               {/* <!-- Column --> */}
               <div className="col-md-4 wrap-service11-box">
                  <div className="card card-shadow border-0 mb-4">
                     <div className="p-4">
                        <div className="icon-space">
                           <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">U</div>
                        </div>
                        <h6 className="font-weight-medium">Unity</h6>
                        <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-12 mt-3 text-center">
                  <a className="btn btn-success-gradiant text-white border-0 btn-md" href="#f11"><span>See More</span></a>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div class="container mt-4">
         <div class="row">
            <div className='col-md-12'>
               <h1 className='text-center mb-4'>Our Schedule</h1>
            </div>
            <div class="col-md-6 mt-2">
               <div class="schedule-warp">
                  <div class="day-one">Week Days</div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">Tuesday 4:30PM</span> 
                        <span class="schedule-start">Bible Study</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">Wednesday 4:30 PM</span> 
                        <span class="schedule-start">Home Fellowships</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">Friday 8:00PM</span> 
                        <span class="schedule-start">Evening Prayers & Mini-Kesha</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">Friday 9:00PM</span> 
                        <span class="schedule-start">Full Kesha</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">Saturday 3:00 PM</span> 
                        <span class="schedule-start"> Sunday School Practice</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">Saturday 4:00 PM</span> 
                        <span class="schedule-start">Praise and Worship Practice</span>                  
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-6 mt-2">
               <div class="schedule-warp">
                  <div class="day-one">SUNDAYS</div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">8:00 AM</span> 
                        <span class="schedule-start">Sunday School Service</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">9:30 AM</span> 
                        <span class="schedule-start">Main Service Starts with intercession</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">10:00 AM</span> 
                        <span class="schedule-start"> Praise and Worship</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">10:40 AM</span> 
                        <span class="schedule-start"> Testimonies & Announcements</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">11:00 AM</span> 
                        <span class="schedule-start">Offerings & Tithes</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">11:10 AM</span> 
                        <span class="schedule-start">Praise and Worship</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">11:40 AM</span> 
                        <span class="schedule-start">Preachings</span>                  
                     </div>
                  </div>
                  <div class="schedule-card">
                     <div class="insidebox">
                        <span class="schedule-tag">1:00 PM</span> 
                        <span class="schedule-start">Closure of Service</span>                  
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>
      {/* <!-- About Us Section --> */}
      <div className='container my-5'>
         <div className='row'>
            <div className='col-md-9'>
               <h1>Who we are</h1>
               <p>
                  Lorem ipsum <br />
                  Lorem ipsum <br />
                  Lorem ipsum <br />
                  Lorem ipsum <br />
                  Lorem ipsum <br />
                  Lorem ipsum <br />
                  Lorem ipsum <br />
                  Lorem ipsum <br />
               </p>
            </div>
            <div className='col-md-3'>
               <div className='container d-flex flex-column align-items-center justify-content-center'  style={{
               backgroundImage: `url(${backgroundImage})`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               height: '100%',
               width: '100%'
               }}>
               <div className='inner-container p-5 bg-white' style={{
               width: '80%',
               height: '80%'
               }}>
               Over
            </div>
         </div>
      </div>
</div>
</div>
</section>

<Footer />
</div>
);
}
export default App;