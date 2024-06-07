import React from "react";
import './All.css';

export default function HeadBanner({ title, description, breadcrumb, backgroundImage  }) {
    return (
        <>
            <div className="image-aboutus-banner"
            style={{
                marginTop: '0px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="lg-text">{title}</h1>
                            <p className="image-aboutus-para">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bread-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-8 mt-2">
                            <ol className="breadcrumb">
                                {breadcrumb.map((item, index) => (
                                    <li key={index} className={item.active ? "active" : ""}>
                                        {item.active ? item.label : <a href={item.path}>{item.label}</a>}
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-4">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
