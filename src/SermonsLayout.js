import React from 'react';
import './Sermon.css';

export default function SermonsLayout({ sermons }) {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                {sermons.map((sermon, index) => (
                    <div key={index} className="col-12 col-md-6 mb-4">
                        <div className="card">
                            <div className="row p-2">
                                <div className="col-12 col-md-5">
                                    <iframe
                                        src={sermon.videoUrl}
                                        className="responsive"
                                        height="100%"
                                        width="100%"
                                        title={sermon.title}
                                    ></iframe>
                                </div>
                                <div className="col-12 col-md-7 py-3 px-4">
                                    <span>
                                        <i className="fa fa-battery-full" aria-hidden="true"></i>
                                        <i className="fa fa-headphones" aria-hidden="true"></i>
                                    </span>
                                    <p className="small font-weight-bold my-2">{sermon.date}</p>
                                    <h6 className="mb-3">{sermon.title}</h6>
                                    <p>{sermon.description}</p>
                                    <div className="d-flex mb-3">
                                        {sermon.tags.map((tag, tagIndex) => (
                                            <button key={tagIndex} className="btn mr-3">
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
