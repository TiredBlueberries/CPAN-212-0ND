import React, { useState, useEffect } from "react";

function Overview() {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((res) => res.json())
      .then((data) => setOverview(data))
      .catch((err) => console.error("Error fetching overview data:", err));
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      {overview.map((sentence, index) => (
        <p key={index}>{sentence}</p>
      ))}
    </div>
  );
}

export default Overview;