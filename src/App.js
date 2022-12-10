import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
