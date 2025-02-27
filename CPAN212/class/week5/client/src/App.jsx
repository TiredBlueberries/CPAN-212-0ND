import { useState } from "react";

const App = () => {
  // ✅ Correct state setup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  // ✅ Fetch user data
  const handleButton = async () => {
    try {
      const response = await fetch("http://localhost:8000/data");
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    const loginForm = {username, password}

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();
      setMessage(data);
      console.log("Login Response:", data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };


  // ✅ Handle login
  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file")

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: FormData,
      });

      const data = await response.json();
      console.log("Login Response:", data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleButton}>Fetch Data</button>
      <p>-------------------------------------</p>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>--------------------------------------------------------------</p>
      <form onSubmit = {handleFileUpload}>
        <input
        type = "file"
        value= {file}
        onChange={(e) => setFile (e.target.value)}/>
        <button type = "submit">Upload File</button>
        
     
       
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;
