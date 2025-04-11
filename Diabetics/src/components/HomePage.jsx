import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="fade-in">Diabetes Prediction System</h1>
        <p className="slide-in">Get accurate diabetes risk analysis using Machine Learning.</p>
        <button className="start-btn pulse" onClick={() => navigate("/input")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;