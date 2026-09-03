import { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>

          <p>Where Green Meets Serenity</p>

          <button
            className="get-started"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>

          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default App;