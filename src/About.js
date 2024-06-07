import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeadBanner from './HeadBanner';
import './All.css';
import Logo from './images/logo.png'
import AboutBanner from './images/about_banner.jpg';
export default function About() {
return (
<>
<Header />
<section>
<HeadBanner 
                title="About Us" 
                description="Welcome to Church. We are Antioch Grace Ministries International." 
                breadcrumb={[
                    { label: "Home", path: "/", active: false },
                    { label: "About", path: "/about", active: true }
                ]}
                backgroundImage={AboutBanner}
            />
   <div className="aboutus-secktion paddingTB60">
      <div className="container">
         <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3">
               <h1 className="strong">Who we are and<br />what we do</h1>
               <p className="lead">This is a Church with a difference.<br />We worship in spirit and in truth. </p>
            </div>
            <div className='col-md-3 d-flex justify-content-center align-items-center'>
                <img src={Logo} style={{
                    width: '150px',
                    textAlign: 'center',
                    margin: '20px'
                }}/>
            </div>
            <div className="col-md-6">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
            </div>
         </div>
      </div>
   </div>
</section>
<Footer />
</>
);
}