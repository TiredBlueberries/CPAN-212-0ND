import React, { useState, useEffect } from "react";

function Experience() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getExp")
      .then((res) => res.json())
      .then((data) => setExperienceData(data))
      .catch((err) => console.error("Error fetching experience data:", err));
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Experience</h2>
      {experienceData.map((exp, index) => (
        <p key={index}>
          <strong>{exp.company}</strong> - {exp.role} ({exp.years})
        </p>
      ))}
    </div>
  );
}

export default Experience;