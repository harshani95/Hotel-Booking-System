import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      <div>
        {!isOwnerPath && <Navbar />}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
