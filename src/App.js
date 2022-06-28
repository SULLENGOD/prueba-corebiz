import "./App.css";
import Footer from "./modules/Footer/Footer";

import { Navbar } from "./modules/Navbar/Navbar";
import Carrousel from "./modules/ProductCarrousel/Carrousel";
import Section from "./modules/Section/Section";
import Subscription from "./modules/Subscription/Subscription";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Section />
        <Carrousel />
        <Subscription />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
