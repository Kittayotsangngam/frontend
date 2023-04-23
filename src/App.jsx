import { BrowserRouter, Route, Routes as Browser } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Browser>
        <Route path="/" element={<Home /> } />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Browser>
    </BrowserRouter>
  );
}

export default App;
