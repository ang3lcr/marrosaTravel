import React from "react";
import Home from "./pages/Home"
import About from "./pages/About";
import Travels from "./pages/Travels";
import NavBar from "./components/NavBar";



function App() {
  return (
   <div className="App">
    <NavBar />
    <Home />
    <About />
    <Travels />
   </div>
  );
}

export default App;