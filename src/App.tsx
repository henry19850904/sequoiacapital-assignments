import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const contentStyle: React.CSSProperties = {
    height: "100vh",
    color: "#fff",
    background: "rgba(0, 0, 0, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const images = [
    "http://img1.gtimg.com/chinanba/pics/hv1/74/154/2325/151222469.jpg",
    "http://img1.gtimg.com/chinanba/pics/hv1/158/153/2325/151222298.jpg",
    "http://img1.gtimg.com/chinanba/pics/hv1/174/153/2325/151222314.jpg",
    "http://img1.gtimg.com/chinanba/pics/hv1/167/153/2325/151222307.jpg",
    "http://img1.gtimg.com/chinanba/pics/hv1/162/153/2325/151222302.jpg",
  ];

  return (
    <div className="App">
      <Carousel>
        {images.map((img, index) => (
          <div key={index} style={contentStyle}>
            <div style={{ width: "60%" }}>
              <img src={img} width="100%" alt="" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
