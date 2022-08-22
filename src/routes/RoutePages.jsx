import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RoutePages = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default RoutePages;
