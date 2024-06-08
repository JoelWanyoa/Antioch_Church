import SermonsLayout from "./SermonsLayout";
import Header from "./Header";
import HeadBanner from "./HeadBanner";
import Footer from "./Footer";
import SermonsBanner from './images/image1.jpg';

const sermonData = [
    {
        videoUrl: 'https://www.youtube.com/embed/5ANVbYlm4i4',
        date: 'June 26',
        title: 'Introducing iPhone XS, iPhone XS Max and iPhone XR - Apple',
        description: 'iPhone XS impresses with its screen - 5.8 inch OLED display Super Retina opens new frontiers of the virtual world, increased area, brightness and depth - this is...',
        tags: ['Apple', 'Cell phones'],
    },
    {
        videoUrl: 'https://www.youtube.com/embed/another-video-id',
        date: 'July 10',
        title: 'Another Sermon Title',
        description: 'This is another description for a different sermon...',
        tags: ['Tag1', 'Tag2'],
    },
    {
        videoUrl: 'https://www.youtube.com/embed/5ANVbYlm4i4',
        date: 'June 26',
        title: 'Introducing iPhone XS, iPhone XS Max and iPhone XR - Apple',
        description: 'iPhone XS impresses with its screen - 5.8 inch OLED display Super Retina opens new frontiers of the virtual world, increased area, brightness and depth - this is...',
        tags: ['Apple', 'Cell phones'],
    },
    {
        videoUrl: 'https://www.youtube.com/embed/another-video-id',
        date: 'July 10',
        title: 'Another Sermon Title',
        description: 'This is another description for a different sermon...',
        tags: ['Tag1', 'Tag2'],
    },
    {
        videoUrl: 'https://www.youtube.com/embed/another-video-id',
        date: 'July 10',
        title: 'Another Sermon Title',
        description: 'This is another description for a different sermon...',
        tags: ['Tag1', 'Tag2'],
    },
];

export default function Sermons(){
    return(
        <>
        <Header />
            <section>
            <HeadBanner 
                title="Past Sermons" 
                description="We have a number of church branches spread throughout Bungoma and Kakamega Counties. We have a vision of icnreasing the catchment to reachout to the unreached all over the country and the world by extension." 
                breadcrumb={[
                    { label: "Home", path: "/", active: false },
                    { label: "Sermons", path: "/sermons", active: true }
                ]}
                backgroundImage={SermonsBanner}
            />
                <div className="pt-4">
                    <SermonsLayout sermons={sermonData} />
                </div>
            </section>
            <Footer />
        </>
    );
}