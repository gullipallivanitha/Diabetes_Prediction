import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PrecautionsPage.css"; // We'll create this CSS file below

const PrecautionsPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="precautions-container">
      <h2>Precautions and Next Steps</h2>
      <p>
        Since our assessment indicates you might be at risk for diabetes, we recommend taking the following precautions:
      </p>
      <ul>
        <li>Schedule a consultation with your healthcare provider immediately.</li>
        <li>Follow a balanced diet and reduce sugar intake.</li>
        <li>Engage in regular physical activity.</li>
        <li>Monitor your blood sugar levels as advised.</li>
        <li>Stay informed about diabetes management.</li>
      </ul>
      <button className="home-btn" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default PrecautionsPage;