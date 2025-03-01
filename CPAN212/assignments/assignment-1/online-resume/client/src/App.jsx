import React from "react";
import { Container } from "react-bootstrap";
import Overview from "./components/Overview.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <Container className="container">
      <header className="resume-header">
        <h1>Henry Pickles</h1>
        <p>111-111-1111 | pickles4president@nomayo.com</p>
        <p>Toronto, Ontario</p>
      </header>

      <h2 className="section-title">Overview</h2>
      <Overview />
      

      <h2 className="section-title">Experience</h2>
      <Experience />
   


      <h2 className="section-title">Education</h2>
      <Education />
    </Container>
  );
}

export default App;