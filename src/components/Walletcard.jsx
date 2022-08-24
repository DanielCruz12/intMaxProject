import styles, { layout } from "../style";
import { card1, card2 } from "../assets";

const Walletcard = () => {
  return (
    <>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={card1}
            alt="cardWallet"
            className="w-[100%] h-[100%] relative z-[5]"
          ></img>
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily control your <br className="sm:block hidden" /> Billing and
            invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lightning Network Wallet only It can be used for both Laptop and
            mobile. The native token of our network is called ESAT token, and to
            apply to receive ESAT token, you will need ethereum address to
            receive Lightning network payment and ESAT token. We also have an
            official WALLET available.
          </p>
        </div>
      </section>
      <section id="" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily control your <br className="sm:block hidden" /> Billing and
            invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            You can also initiate transactions yourself, from
            https://wallet.lappsnet.io/wallet. Choose whether you want to send
            ESATs (the native currency of Lappsnet), or other tokens. TIP:
            Clicking on a token in the list will open a create transaction form
            for that token!
          </p>
        </div>

        <div className={layout.sectionImg}>
          <img src={card2} alt="cardWallet" className="w-[100%] h-[100%]"></img>
        </div>
      </section>
    </>
  );
};

export default Walletcard;
