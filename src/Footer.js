import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <>
        <section className='mx-auto'>
            <div className="container-fluid1 container-fluid mx-auto">
                <div className="row justify-content-center mt-4 row-1 mx-auto custom-spacing">
                    <div className="col-md-10">
                        <div className="row mt-2 mb-2 d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <h1 className="heading">Newsletter Signup</h1>
                                <p>Get Best Deals On The Internet Delivered Right In Your Inbox</p>
                            </div>
                            <div className="col-md-6">
                            <div className="content">
                            <div className="input-group shake-horizontal">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                                <span className="input-group-btn">
                                <button className="btn btn-danger" type="submit">Subscribe Now</button>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="terms d-flex pb-6">
                            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img className="img-1" src={"https://i.imgur.com/jBlQcMI.png"} alt="Logo" />
                    </div>
                </div>
                <div className="row d-flex justify-content-between row-2 align-items-center mx-auto custom-spacing">
                    <div className="block-item">
                        <div className="fa fa-envelope"></div>
                        <div className="sub-head">Newsletter</div>
                        <p className="desc">5,00,000 People have already subscribed special newsletter</p>
                    </div>
                    <div className="block-item">
                        <div className="fa fa-eye"></div>
                        <div className="sub-head">Page Views</div>
                        <p className="desc">1 Billion Page views we receive every year</p>
                    </div>
                    <div className="block-item">
                        <div className="fa fa-fire"></div>
                        <div className="sub-head">Ranking</div>
                        <p className="desc">Top 200+ We are among top 200 sites in India</p>
                    </div>
                    <div className="block-item">
                        <div className="fa fa-home"></div>
                        <div className="sub-head">Merchants</div>
                        <p className="desc">Top 200 Merchants who are promoting their products</p>
                    </div>
                    <div className="block-item">
                        <div className="fa fa-facebook"></div>
                        <div className="sub-head">Fan's on Facebook</div>
                        <p className="desc">2,00,000+ fans on Facebook</p>
                    </div>
                </div>
                <div className="row d-flex flex-row pb-4 px-4 custom-spacing">
                    <div className="col-md-8">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-3 d-flex flex-column block-footer">
                                <h5 className="footer-headings">About</h5>
                                <p className="list-items">About Us</p>
                                <p className="list-items">Advertising Opportunities</p>
                                <p className="list-items">Contact Us</p>
                                <p className="list-items">Work With Us</p>
                                <p className="list-items">Blog</p>
                            </div>
                            <div className="col-md-3 d-flex flex-column block-footer">
                                <h5 className="footer-headings">Festival Deals</h5>
                                <p className="list-items">Diwali Offers</p>
                                <p className="list-items">New Year Offers</p>
                                <p className="list-items">Holi Offers</p>
                                <p className="list-items">Rakhi Offers</p>
                                <p className="list-items">Valentine's Day Offers</p>
                            </div>
                            <div className="col-md-3 d-flex flex-column block-footer">
                                <h5 className="footer-headings">Top Stories</h5>
                                <p className="list-items">Christian Groups</p>
                                <p className="list-items">Bible Coupons</p>
                                <p className="list-items">Bible Trivia</p>
                                <p className="list-items">Sermons</p>
                                <p className="list-items">Fellowhips</p>
                                <p className="list-items">Church Coupons</p>
                                <p className="list-items">Easter Holiday Briefs</p>
                                <p className="list-items">Justrelief Coupons</p>
                            </div>
                            <div className="col-md-3 d-flex flex-column block-footer">
                                <h5 className="footer-headings">Need Help?</h5>
                                <p className="list-items">Getting Started</p>
                                <p className="list-items">Contact Us</p>
                                <p className="list-items">FAQ's</p>
                                <p className="list-items">Press</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column pl-md-5 px-4">
                            <h5 className="footer-headings pl-md-2">Download App</h5>
                            <div className="g-play pb-5 border-left">
                                <img className="img-g" src={"https://i.imgur.com/9Txjm5w.png"} alt="Google Play" />
                            </div>
                            <div className="d-flex flex-column pl-md-2 border-left pb-3">
                                <h5 className="footer-headings mb-3">Follow Us</h5>
                                <div className="row d-flex pl-2">
                                    <div className="fa fa-sm fa-facebook"></div>
                                    <div className="fa fa-sm fa-twitter"></div>
                                    <div className="fa fa-sm fa-google-plus"></div>
                                    <div className="fa fa-sm fa-pinterest"></div>
                                    <div className="fa fa-sm fa-linkedin"></div>
                                    <div className="fa fa-sm fa-youtube-play"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
