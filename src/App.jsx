import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home.jsx";
import Brand from "./pages/brand/Brand.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Comfort from "./pages/comfort/Comfort.jsx";
import Club from "./pages/club/Club.jsx";
function NotFound() {
  return <h1 className="container">404 - Page Not Found</h1>;
}


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/brands" element={<Brand/>}></Route>
          <Route path="/club" element={<Club/>}></Route>
          <Route path="/contacts" element={<Contact/>}></Route>
          <Route path="/comfort" element={<Comfort/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

   
    </>
  );
}

export default App;
