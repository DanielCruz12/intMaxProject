import { clients } from "../constants";
import styles from "../style";

const Companies = () => {
  return (
    <div className={`${styles.flexCenter} my-4 wrapper`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((company) => (
          <div
            key={company.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={company.logo}
              alt="company"
              className={`sm:w-[192px] w-[100px] object-contain target opacity-60 hover:opacity-100`}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
