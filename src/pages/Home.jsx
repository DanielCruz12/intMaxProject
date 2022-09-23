import styles from "../style";
import { Hero, Footer, Navbar, Team } from "../layouts";
import { Stats, Cards, Table } from "../components";
import Walletcard from "../components/Walletcard";
import Advantage from "../components/Advantage";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Table />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Cards />
          <Walletcard />
          <Faq />
          <Team />
          <Advantage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
