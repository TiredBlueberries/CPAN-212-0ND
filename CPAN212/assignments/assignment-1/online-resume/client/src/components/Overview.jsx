import React, { useState, useEffect } from "react";

function Overview() {
  const [overview, setOverview] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((res) => res.json())
      .then((data) => setOverview(data))
      .catch((err) => console.error("Error fetching overview data:", err));
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <h2>About Me</h2>
      <p>{overview}</p>
    </div>
  );
}

export default Overview;