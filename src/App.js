import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Order from "./Order";
import Cars from "./Cars";
import Details from "./Details";
import Person from "./Persons";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route index element={<Signup />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="person" element={<Person />} />
          <Route path="person/:id" element={<h1>tttt</h1>} />
          <Route path="/" element={<Cars />}>
            {/* <Route path="sima" element={<Footer />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
