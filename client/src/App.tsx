import "./main.css";
import { useEffect } from 'react';
import NavigationBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyUs/WhyUs";
import WebFont from 'webfontloader';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lato']
      }
    });
  }, []);
  return <div className="App">
    <NavigationBar />
    <Hero />
    <WhyChooseUs />
  </div>;
}

export default App;
