import { Route, Routes } from "react-router-dom";
import App from "../App";
//import Home from "../pages/Home";

const RoutePages = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default RoutePages;
