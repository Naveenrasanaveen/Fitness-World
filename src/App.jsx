import { useState } from "react";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Hero2 from "./Pages/Hero2";
import Hero1 from "./Pages/Hero1";
import Course from "./Pages/Course";
import Services from "./Pages/Services";
import Plan from "./Pages/Plan";
import Footer from "./Pages/Footer";
import Footer2 from "./Pages/Footer2";

function App() {

  const[login,setLogin]=useState(false)

  return (
    <>
      <Navbar setLogin={setLogin} />
      <Hero1 login={login} setLogin={setLogin} />

      <Hero2 />
      <Course />
      <Services />
      <Plan />
      <Footer />
      <Footer2 />
    </>
  );
}

export default App;
