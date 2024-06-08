// import React from "react";
import Header from "./Header";
import HeadBanner from "./HeadBanner";
import MinistriesBanner from './images/branches.jpg';
import MinistriesCard from "./MinistriesCard";
import Footer from "./Footer";

export default function Ministries(){
    return (
        <>
        <Header />
        <section>
            <div>
            <HeadBanner 
                title="Our Branches" 
                description="We have a number of church branches spread throughout Bungoma and Kakamega Counties. We have a vision of icnreasing the catchment to reachout to the unreached all over the country and the world by extension." 
                breadcrumb={[
                    { label: "Home", path: "/", active: false },
                    { label: "Ministries", path: "/ministries", active: true }
                ]}
                backgroundImage={MinistriesBanner}
            />
            </div>
        </section>

        <section>
            <MinistriesCard />
        </section>

        <section>
            <div className="container-fluid pt-4">
                {/* <SermonsLayout sermons={sermonData}/> */}
            </div>
        </section>

        <Footer />
        </>
    );
}