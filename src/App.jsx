import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import page
import Booking from "./pages/Booking";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

// import component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Sidebar />
        <div className="contents">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/booking" exact element={<Booking />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/products/id" exact element={<Detail />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
