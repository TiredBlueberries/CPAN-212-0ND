const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;


app.use(cors());


const education = [
  { school: "University of Coden", degree: "Computer Philosophy", year: "2020" },
  { school: "ABC Codingston", degree: "Pringle Stack Development", year: "2022" },
];

const experience = [
  { company: "TechTech", role: "Software Engineer", years: "2022 - Present" },
  { company: "Outage", role: "Backend Developer", years: "2020 - 2022" },
];

const overview = [
  "I am a passionate developer with experience in various fields",
  "I specialize computer sciences, mostly backend development.",
  "I enjoy solving complex problems and working on scalable applications for companies",
  "I am responsible, diligent, resourceful and kind. I can easily fit in different working environments "
  
];



app.get("/getEdu", (req, res) => res.json(education));
app.get("/getExp", (req, res) => res.json(experience));
app.get("/getOverview", (req, res) => res.json(overview));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));