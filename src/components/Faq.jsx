import { useState } from "react";
import styles from "../style.js";

const Faq = () => {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);

  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass}`;

  const expandClass2 = expand2 ? "display" : "hidden";
  const ansClass2 = `${expandClass2}`;

  const expandClass3 = expand3 ? "display" : "hidden";
  const ansClass3 = `${expandClass3}`;

  const expandClass4 = expand4 ? "display" : "hidden";
  const ansClass4 = `${expandClass4}`;

  const rotateIcon = expand ? "rotate-80" : "rotate-180";
  const ri = `${rotateIcon}`;

  const rotateIcon2 = expand2 ? "rotate-80" : "rotate-180";
  const ri2 = `${rotateIcon2}`;

  const rotateIcon3 = expand3 ? "rotate-80" : "rotate-180";
  const ri3 = `${rotateIcon3}`;

  const rotateIcon4 = expand4 ? "rotate-80" : "rotate-180";
  const ri4 = `${rotateIcon4}`;

  return (
    <div>
      <div className="relative w-full">
        <div className={`${styles.flexCenter}`}>
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-white mb-2 block">
                FAQ
              </span>
              <h2 className={styles.heading2}>Any Questions? Answered</h2>
              <p className={`${styles.paragraph} mt-2`}>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div
              className="
                w-full
                bg-primary
                border border-[#cccede]
                rounded-lg
                pb-5
                sm:p-8
                mb-8
                transition-all duration-500
                cursor-pointer
              "
              onClick={() => setExpand(!expand)}
            >
              <div className="flex items-center w-full h-2 text-left">
                <div
                  className={`${ri} w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-white
                    bg-opacity-5
                    mr-5
                    transition-transform duration-500`}
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>

                <div className="w-full">
                  <h4 className="expandClass text-base sm:text-lg font-semibold text-white">
                    Can I use this template for commercial project?
                  </h4>
                </div>
              </div>
              <div className={`${ansClass} pl-[62px]`}>
                <p className="text-base text-white leading-relaxed py-3">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available.
                </p>
              </div>
            </div>

            <div
              className="
                w-full
                bg-primary
                border border-[#cccede]
                rounded-lg
                pb-5
                sm:p-8
                mb-8
                transition-all duration-500
                cursor-pointer
              "
              onClick={() => setExpand2(!expand2)}
            >
              <div className="flex items-center w-full h-2 text-left">
                <div
                  className={`${ri2} w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-white
                    bg-opacity-5
                    mr-5
                    transition-transform duration-500`}
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>

                <div className="w-full">
                  <h4 className="expandClass text-base sm:text-lg font-semibold text-white">
                    Can I use this template for commercial project?
                  </h4>
                </div>
              </div>
              <div className={`${ansClass2} pl-[62px]`}>
                <p className="text-base text-white leading-relaxed py-3">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div
              className="
                w-full
                bg-primary
                border border-[#cccede]
                rounded-lg
                pb-5
                sm:p-8
                mb-8
                transition-all duration-500
                cursor-pointer
              "
              onClick={() => setExpand3(!expand3)}
            >
              <div className="flex items-center w-full h-2 text-left">
                <div
                  className={`${ri3} w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-white
                    bg-opacity-5
                    mr-5
                    transition-transform duration-500`}
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>

                <div className="w-full">
                  <h4 className="expandClass text-base sm:text-lg font-semibold text-white">
                    Can I use this template for commercial project?
                  </h4>
                </div>
              </div>
              <div className={`${ansClass3} pl-[62px]`}>
                <p className="text-base text-white leading-relaxed py-3">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available.
                </p>
              </div>
            </div>

            <div
              className="
                w-full
                bg-primary
                border border-[#cccede]
                rounded-lg
                pb-5
                sm:p-8
                mb-8
                transition-all duration-500
                cursor-pointer
              "
              onClick={() => setExpand4(!expand4)}
            >
              <div className="flex items-center w-full h-2 text-left">
                <div
                  className={`${ri4} w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-white
                    bg-opacity-5
                    mr-5
                    transition-transform duration-500`}
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="fill-current icon"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>

                <div className="w-full">
                  <h4 className="expandClass text-base sm:text-lg font-semibold text-white">
                    Can I use this template for commercial project?
                  </h4>
                </div>
              </div>
              <div className={`${ansClass4} pl-[62px]`}>
                <p className="text-base text-white leading-relaxed py-3">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
