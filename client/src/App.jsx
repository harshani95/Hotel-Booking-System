import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return <>{!isOwnerPath && <Navbar />}</>;
};

export default App;
