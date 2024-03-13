import Navbar from "./components/Navbar/navbar.jsx";
import Intro from "./components/Intro/intro.jsx"
import About from "./components/About/about.jsx"
import Portfolio from "./components/Portfolio/portfolio.jsx";
import Contact from "./components/Contact/contact.jsx"
import Footer from "./components/Footer/footer.jsx";

function App() {
    return (
      <div className="card">
          <Navbar />
          <Intro />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
      </div>
  );
}

export default App