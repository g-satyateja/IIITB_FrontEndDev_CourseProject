import { MuiNavBar } from "./components/NavBar/MuiNavBar";
import Login from "./components/Login/Login";
import SignUp from "./components/Register/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./common/Home/Home";
import CategoryToggleButton from "./components/Categories/MuiToggleButton";
import MuiSelectProducts from "./components/SortProducts/MuiSelectProducts";

function App() {
  return (
    <div className="App" style={{ background: "lightpink" }}>
      <MuiNavBar />
      <CategoryToggleButton />
      <MuiSelectProducts />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/products" component={<Products />} /> */}
      </Routes>
    </div>
  );
}

export default App;
