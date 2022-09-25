import { card1 } from "../assets";
import SimpleButton from "./SimpleButton";

const Advantage = () => {
  return (
    <>
      <section  id="advantages" className="relative pt-36 lg:pb-10 overflow-hidden mb-6 ">
        <div className="relative z-10 container mx-auto px-4 ">
          <div className="flex flex-wrap -m-6">
            <div className="w-full lg:w-1/2 p-6">
              <div className="lg:max-w-xl">
                <h2 className="mb-3 font-heading font-bold text-4xl sm:text-6xl text-white">
                  Get the maximum security with{" "}
                  <span className="text-gradient">biometric</span>{" "}
                  authentication.
                </h2>
                <p className="mb-[48px] text-base text-white">
                  Is the most convenient next-generation wallet
                  with highest security. Easily connect with mobile via
                  Bluetooth and securely manage your digital assets with
                  biometric authentication.
                </p>
                {/* <button className="mb-11 font-heading font-semibold w-full lg:w-auto p-5 text-xs text-white bg-blue-600 hover:bg-blue-700 uppercase rounded-md tracking-px">
                  Connect Now
                </button> */}
{/*                 <SimpleButton className="pb-4 mb-3" />
 */}
                <ul className="flex flex-wrap w-full -m-3.5 pt-5 ">
                 
                  
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
                    <p>No download or Installation.</p>
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
                    <p>Deposit Sats get E-Sats.</p>
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
                    <p>Smart Contract Capability.</p>
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
                    <p>Biometric Security.</p>
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
            alt="biometric"
          />
        </div>
      </section>
    </>
  );
};

export default Advantage;
