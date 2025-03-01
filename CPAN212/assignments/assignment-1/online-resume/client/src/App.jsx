import React from "react";
import { Container } from "react-bootstrap";
import Overview from "./components/Overview.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <Container className="container">
      <h1>My Online Resume</h1>
      
      <Overview />

      <h2>Education</h2>
      <Education />

      <h2>Experience</h2>
      <Experience />

      <h2>Projects</h2>
      <ul>
        <li>🚀 Project 1: Created a full-stack web application using React and Node.js.</li>
        <li>📊 Project 2: Developed a data visualization dashboard with D3.js.</li>
        <li>🛒 Project 3: Built an e-commerce site with user authentication and payments.</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>🎓 Certified React Developer - XYZ Academy</li>
        <li>🔗 AWS Cloud Practitioner - Amazon Web Services</li>
      </ul>
    </Container>
  );
}

export default App;