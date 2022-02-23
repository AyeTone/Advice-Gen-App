import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container flex flex-col
          justify-center items-center h-screen m-auto">
      <Card />
      <Footer />
    </div>
  );
}

export default App;
