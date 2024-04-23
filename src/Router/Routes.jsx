import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AddCard from "../Pages/AddCard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcard" element={<AddCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
