import styles, { layout } from "../style";
import { card1, card2, card3 } from "../assets";
import SimpleButton from "./SimpleButton";
import Companies from "./Companies";

const Walletcard = () => {
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
            Lightning Network Wallet only It can be used for both Laptop and
            mobile. The native token of our network is called ESAT token, and to
            apply to receive ESAT token, you will need ethereum address to
            receive Lightning network payment and ESAT token. We also have an
            official WALLET available.
          </p>
        </div>
      </section>

      <section id="" className={layout.section}>
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
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

      <Companies />

      <section className="relative pt-36 lg:pb-10 overflow-hidden m-3">
        <div className="relative z-10 container mx-auto px-4 mb-12">
          <div className="flex flex-wrap -m-6">
            <div className="w-full lg:w-1/2 p-6">
              <div className="lg:max-w-xl">
                <h2 className="mb-6 font-heading font-bold text-6xl sm:text-7xl text-white">
                  Get maximum results from all your projects.
                </h2>
                <p className="mb-[48px] text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua.
                </p>
                {/* <button className="mb-11 font-heading font-semibold w-full lg:w-auto p-5 text-xs text-white bg-blue-600 hover:bg-blue-700 uppercase rounded-md tracking-px">
                  Connect Now
                </button> */}
                <SimpleButton className="pb-4" />

                <ul className="flex flex-wrap w-full -m-3.5 pt-3">
                  <li className="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                    <svg
                      className="mr-3"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                      <path
                        d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p>No hidden feels</p>
                  </li>
                  <li className="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                    <svg
                      className="mr-3"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                      <path
                        d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p>Start with a free account</p>
                  </li>
                  <li className="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                    <svg
                      className="mr-3"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                      <path
                        d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p>No software needed</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-4 lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0">
          <img
            className="relative z-10 ml-auto transform hover:-translate-x-10 transition ease-in-out duration-500"
            src={card1}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Walletcard;
