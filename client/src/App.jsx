import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Placeholder = ({ title }) => (
  <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
    <h1 className="font-display text-4xl font-bold text-brand">{title}</h1>
  </section>
);

const pages = [
  ["/academics", "Academics"],
  ["/admissions", "Admissions"],
  ["/faculty", "Faculty & Staff"],
  ["/gallery", "Gallery"],
  ["/news-events", "News & Events"],
  ["/facilities", "Facilities"],
  ["/campus-life", "Student Life"],
  ["/testimonials", "Testimonials"],
  ["/contact", "Contact Us"],
];

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {pages.map(([path, title]) => (
            <Route key={path} path={path} element={<Placeholder title={title} />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}