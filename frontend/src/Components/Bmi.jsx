import { useState } from "react";

export default function Bmi() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    activity: "",
    goal: "",
  });

  const [bmi, setBmi] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const heightInMeters = parseFloat(formData.height) / 100;
    const weightInKg = parseFloat(formData.weight);
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBmi(Math.round(calculatedBMI * 10) / 10);
  };

  return (
    <section className="bmi" id="bmi">
      <main className="calculator-container">
        <div className="content-container-b">
          <div className="header-section-b">
            <h1 className="title-b">
              CALCULATE YOUR
              <br />
              BMI NOW!!
            </h1>
          </div>

          <div className="card">
            <form onSubmit={handleCalculate} className="form-grid">
              <div className="input-grid">
                {[
                  { id: "height", label: "Height / CM", placeholder: "Height / cm" },
                  { id: "weight", label: "Weight / KG", placeholder: "Weight / kg" },
                  { id: "age", label: "Age", placeholder: "Age" },
                ].map((item) => (
                  <div key={item.id} className="input-field">
                    <label htmlFor={item.id}>{item.label}</label>
                    <input
                      id={item.id}
                      type="number"
                      placeholder={item.placeholder}
                      value={formData[item.id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [item.id]: e.target.value })
                      }
                    />
                  </div>
                ))}

                {/* Gender Buttons */}
                <div className="input-field">
                  <label>Gender</label>
                  <div className="gender-buttons">
                    {["male", "female"].map((gender) => (
                      <button
                        key={gender}
                        type="button"
                        className={`gender-button ${
                          formData.gender === gender ? "active" : ""
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, gender: gender })
                        }
                      >
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="select-grid">
                <div className="input-field">
                  <label htmlFor="activity">Activity Factor</label>
                  <select
                    id="activity"
                    value={formData.activity}
                    onChange={(e) =>
                      setFormData({ ...formData, activity: e.target.value })
                    }
                  >
                    <option value="">Select Activity</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Lightly Active</option>
                    <option value="moderate">Moderately Active</option>
                    <option value="very">Very Active</option>
                    <option value="extra">Extra Active</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="goal">I Want...</label>
                  <select
                    id="goal"
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                  >
                    <option value="">Select Goal</option>
                    <option value="lose">To Lose Weight</option>
                    <option value="maintain">To Maintain Weight</option>
                    <option value="gain">To Gain Weight</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="submit-button improved-button">
                CALCULATE BMI
              </button>

              {bmi !== null && (
                <div className="result-container">
                  <div className="bmi-value">{bmi}</div>
                  <div className="bmi-label">Your BMI</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
