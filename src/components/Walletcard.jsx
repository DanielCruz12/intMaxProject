import styles, { layout } from "../style";
import { card2, card3 } from "../assets";
import { Companies } from "./Companies";

const WalletCard = () => {
  return (
    <>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={card3}
            alt="cardWallet"
            className="w-[100%] h-[100%] relative z-[5]"
          ></img>
        </div>
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
          <h2 className={styles.heading2}>
            Easily control your <br className="sm:block hidden" /> Billing and
            invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Browser extension wallets are extensions you download that let you
            interact with your account and applications through the browser
          </p>
        </div>
      </section>

      <section id="" className={layout.section}>
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
          <h2 className={styles.heading2}>
          Making payment via <br className="sm:block hidden" />QR extremely fast
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            QR code in payment One of the best and biggest advantages of QR
            codes is that facilities for instant payment. Making payment via QR
            codes is extremely fast. User
            simply open the QR code scan app, scan the QR code and confirm
          </p>
        </div>

        <div className={layout.sectionImg}>
          <img src={card2} alt="cardWallet" className="w-[100%] h-[100%]"></img>
        </div>
      </section>

      <Companies />
    </>
  );
};

export default WalletCard;
