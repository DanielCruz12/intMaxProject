import "./App.css";
import styles from "./style";
import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import Stats from "./components/Stats";
import { log, zkroll } from "./assets";
import Cards from "./components/Cards";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Cards/>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;