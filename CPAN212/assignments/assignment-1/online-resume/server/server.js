const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;


app.use(cors());


const education = [
  { school: "University of XYZ", degree: "B.Sc. Computer Science", year: "2020" },
  { school: "ABC Coding Bootcamp", degree: "Full Stack Development", year: "2022" },
];

const experience = [
  { company: "TechCorp", role: "Software Engineer", years: "2022 - Present" },
  { company: "Startup Inc.", role: "Front-End Developer", years: "2020 - 2022" },
];

const overview = "I am a passionate software developer specializing in full-stack web development.";


app.get("/getEdu", (req, res) => res.json(education));
app.get("/getExp", (req, res) => res.json(experience));
app.get("/getOverview", (req, res) => res.json(overview));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));