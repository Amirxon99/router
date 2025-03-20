import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Brand from "./pages/brand/Brand.jsx";
import Contact from "./pages/contact/Contact.jsx";
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
