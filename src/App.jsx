import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import News from "./News";
import Entertainment from "./Entertainment";
import MovieReviews from "./MovieReviews";
import Advertise from "./Advertise";
import AllNews from "./AllNews";
import ArticleDetail from "./ArticleDetail";  // Import the new component

function App() {
  return (
    <Router>
      <Header /> {/* Only include Header here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/moviereviews" element={<MovieReviews />} />
        <Route path="/article/:title" element={<ArticleDetail />} /> {/* New route for article detail page */}
      </Routes>
      <Footer /> {/* Only include Footer here */}
    </Router>
  );
}

export default App;
