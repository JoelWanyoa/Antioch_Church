import './Events.css';
import EventsCard from "./EventsCard";
import Footer from './Footer';
import Header from './Header';
import HeadBanner from './HeadBanner';
import EventsBanner from './images/events_banner.jpg';
import YouthImage from './images/youth.png';
import BibleImage from './images/bible3.png';
import CommunityImage from './images/community.png';
import Picnicmage from './images/picnic.png';
import FoodImage from './images/food.png';
import FundImage from './images/fund.png';
import PrayerImage from './images/prayer.png';


const events = [
    {
        title: 'Annual Church Fundraiser',
        date: 'July 1 - July 28',
        imageUrl: FundImage,
        description: 'Join us for our annual fundraiser to support church activities and community outreach programs.',
        remainingTime: '20 days'
    },
    {
        title: 'Vacation Bible School',
        date: 'June 15 - August 15',
        imageUrl: BibleImage,
        description: 'A fun and educational summer program for kids to learn about the Bible and make new friends.',
        remainingTime: '2 months'
    },
    {
        title: 'Youth Retreat 2024',
        date: 'August 10',
        imageUrl: YouthImage,
        description: 'A weekend retreat for the youth to connect with each other and grow in their faith.',
        remainingTime: '2 months'
    },
    {
        title: 'Community Outreach Event',
        date: 'August 5 - August 7',
        imageUrl: CommunityImage,
        description: 'Join us as we reach out to our local community with acts of service and love.',
        remainingTime: '2 months'
    },
    {
        title: 'Prayer and Worship Night',
        date: 'July 10',
        imageUrl: PrayerImage,
        description: 'A night dedicated to prayer and worship, open to everyone in the community.',
        remainingTime: '20 days'
    },
    {
        title: 'Church Picnic',
        date: 'July 25',
        imageUrl: Picnicmage,
        description: 'Bring your family and friends to our annual church picnic for a day of fun and fellowship.',
        remainingTime: '1 month'
    },
    {
        title: 'Food Drive',
        date: 'August 15 - August 17',
        imageUrl: FoodImage,
        description: 'Help us collect non-perishable food items to support local food banks and shelters.',
        remainingTime: '2 months'
    },
];


export default function Events(){
    return (
        <>
        <Header />
            <section>
                <HeadBanner 
                title="Events Line-up" 
                description="We have a number of church branches spread throughout Bungoma and Kakamega Counties. We have a vision of icnreasing the catchment to reachout to the unreached all over the country and the world by extension." 
                breadcrumb={[
                    { label: "Home", path: "/", active: false },
                    { label: "Events", path: "/events", active: true }
                ]}
                backgroundImage={EventsBanner}
            />
                <div className='p-4'>
                    <EventsCard events={events}/>
                </div>
            </section>
        <Footer />
        </>
    );
}