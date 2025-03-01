import React, { useState, useEffect } from "react";

function Education() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getEdu")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <p key={index}>
          <strong>{edu.school}</strong> - {edu.degree} ({edu.year})
        </p>
      ))}
    </div>
  );
}

export default Education;