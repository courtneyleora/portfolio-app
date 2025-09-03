import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
};
export default App;
