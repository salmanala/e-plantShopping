import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>Where Green Meets Serenity</p>

          <Link to="/plants">
            <button className="get-started">Get Started</button>
          </Link>

          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default App;