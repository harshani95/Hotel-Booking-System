import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
