import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScheduleDemo from '../components/ScheduleDemo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ScheduleDemo />
      <Footer />
    </>
  );
}

export default MyApp;
