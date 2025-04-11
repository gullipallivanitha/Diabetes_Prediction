import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import diabetes from "./diabetics.jpg";
import no_diabetes from "./no_diabetes.jpg";
import "./ResultPage.css";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prediction = location.state?.prediction ?? 0;
  const isDiabetes = prediction === 1;

  return (
    <div className="result-page">
      <div className="card">
        <div className="header">
          {isDiabetes ? (
            <FaExclamationTriangle className="icon danger" />
          ) : (
            <FaCheckCircle className="icon success" />
          )}
          <h2>{isDiabetes ? "High Risk of Diabetes" : "Low Risk of Diabetes"}</h2>
        </div>
        <img
          className="result-img"
          src={isDiabetes ? diabetes : no_diabetes}
          alt="Result"
        />
        <p className="description">
          {isDiabetes
            ? "Our assessment suggests you may be at high risk for diabetes. We advise consulting a healthcare professional for a thorough evaluation."
            : "Our assessment indicates a low risk of diabetes. Maintaining a healthy lifestyle is key to long-term wellness."}
        </p>
        {isDiabetes && (
          <button className="btn" onClick={() => navigate("/precautions")}>
            View Precautions
          </button>
        )}
        <button className="btn" onClick={() => navigate("/")}>
          Re-evaluate
        </button>
      </div>
    </div>
  );
};

export default ResultPage;