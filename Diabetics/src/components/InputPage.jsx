import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "./FormInput";
import "./InputPage.css";

const InputPage = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert string values to numbers
    const numericData = {
      Pregnancies: Number(formData.Pregnancies),
      Glucose: Number(formData.Glucose),
      BloodPressure: Number(formData.BloodPressure),
      SkinThickness: Number(formData.SkinThickness),
      Insulin: Number(formData.Insulin),
      BMI: Number(formData.BMI),
      DiabetesPedigreeFunction: Number(formData.DiabetesPedigreeFunction),
      Age: Number(formData.Age),
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", numericData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ API Response:", response.data);
      if (response.data.prediction === undefined) {
        alert("Error: No prediction received.");
        return;
      }

      navigate("/result", { state: { prediction: response.data.prediction } });
    } catch (error) {
      console.error("❌ API Error:", error.response ? error.response.data : error.message);
      alert("Error: Could not get a prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="input-container">
        {[
          "Pregnancies",
          "Glucose",
          "BloodPressure",
          "SkinThickness",
          "Insulin",
          "BMI",
          "DiabetesPedigreeFunction",
          "Age"
        ].map((field) => (
          <FormInput
            key={field}
            label={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" className="submit-btn">
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
    </div>
  );
};

export default InputPage;