import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
//import Dashboard from '../pages/Dashboard'

const RoutePages = () => {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
{/*           <Route exact path="/dashboard" element={<Dashboard />} />
 */}        </Routes>
      </div>
  );
};

export default RoutePages;
