import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider';
import IntroForm from '../../components/IntroForm';
import InfoCard from '../../components/InfoCard';
import FeedbackCustomer from '../../components/FeedbackCustomer';
import BookingNow from '../../components/BookingNow';
import CardTopDoctor from '../../components/CardTopDoctor';
function Home() {

    return (
        <div className="App">
            <Header />
            <Slider />
            <InfoCard />
            <BookingNow />
            {/* <CardTopDoctor /> */}
            <IntroForm />
            <FeedbackCustomer />
            <Footer />
        </div>
    )
}

export default Home;