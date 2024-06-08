import React from 'react';

const getBackgroundColor = (title) => {
    switch (title) {
        case 'Annual Church Fundraiser':
            return 'bg-fundraiser';
        case 'Vacation Bible School':
            return 'bg-vacation';
        case 'Youth Retreat 2024':
            return 'bg-retreat';
        case 'Community Outreach Event':
            return 'bg-community';
        case 'Prayer and Worship Night':
            return 'bg-prayer';
        case 'Church Picnic':
            return 'bg-picnic';
        case 'Food Drive':
            return 'bg-food';
        default:
            return 'bg-default';
    }
};

export default function EventsCard({ events }) {
    return (
        <section className='my-2'>
            <div className="container">
                <div className="row">
                    {events.map((event, index) => (
                        <div key={index} className="col-12 col-md-3 col-sm-12 col-xs-12 p-2">
                            <div className={`card px-4 py-4`}>
                                <div className={`div1 row py-2 px-2  ${getBackgroundColor(event.title)}`}>
                                    <div className="col-7 mt-2">
                                        <p className="font-weight-bold mb-5 darkWhite" id="heading">{event.title}</p>
                                        <p className="mt-3">{event.date}</p>
                                    </div>
                                    <div className="col-5 d-flex align-items-center">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center w-100" id="circl">
                                            <img src={event.imageUrl} height="130px" width="130px" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p id="desc">{event.description}</p>
                                    <div className="d-flex">
                                        <h6 className=" align-self-center">
                                            <a href="#">Learn more <span className="rounded-circle sp1 px-2 py-0 ml-1"><i className="fa fa-angle-right" aria-hidden="true"></i></span></a>
                                        </h6>
                                        <button className="btn d-flex ml-auto px-3 font-weight-bold darkWhite">{event.remainingTime}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
