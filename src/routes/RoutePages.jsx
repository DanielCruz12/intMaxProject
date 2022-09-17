import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";

const RoutePages = () => {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<News />} />
       </Routes>
      </div>
  );
};

export default RoutePages;
