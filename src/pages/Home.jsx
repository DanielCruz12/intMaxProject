import styles from '../style'
import Navbar from '../layouts/Navbar'
import Hero from "../layouts/Hero";
import Stats from "../components/Stats";
import Cards from "../components/Cards";
import Footer from "../layouts/Footer";
import Table from '../components/Table';
import Walletcard from '../components/Walletcard';

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Table/>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Cards />
          <Walletcard/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
