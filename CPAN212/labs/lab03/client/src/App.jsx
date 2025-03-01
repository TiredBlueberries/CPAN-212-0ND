import { useState } from "react";
import "./App.css";


const App = () => {
  // State variables
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayDogImage, setDisplayDogImage] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch a random dog image from an API
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDisplayDogImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // Submit the fetched dog image to the server
  const submitDogImage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(displayDogImage);
      const data = await response.blob();
      const formData = new FormData();
      formData.append("file", data, "dogo.jpg");

      const uploadFile = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });

      const responseData = await uploadFile.json();
      setMessage(responseData.message);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch multiple random images from the Express server
  const fetchMultipleImages = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/multiple");
      const data = await response.json();
      console.log(data);

      const filePromises = data.map(async (filename) => {
        const fetchFile = await fetch(`http://localhost:8000/fetch/file/${filename}`);
        const fileBlob = await fetchFile.blob();
        console.log(fileBlob);

        const imageUrl = URL.createObjectURL(fileBlob);
        return imageUrl;
      });

      const imageUrls = await Promise.all(filePromises);
      setDisplayImages(imageUrls);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch a single random file from the server
  const fetchSingleFile = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/single");
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // Upload a selected file to the server
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <p>{message}</p>

      {/* Fetch Single Image Section */}
      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img src={displayImage} alt="Display Image" style={{ width: "200px", marginTop: "10px" }} />
        </div>
      )}

      {/* Upload Single File Section */}
      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={(e) => setSingleFile(e.target.files[0])} />
        <button type="submit">Upload Single File</button>
      </form>

      {/* Fetch Dog Image Section - Always Visible */}
      <h2>Get a Random Dog Image</h2>
      <button onClick={fetchDogImage}>Get the Dogo</button>
      {displayDogImage && (
        <div>
          <h3>Here is an AMAZING DOG</h3>
          <img src={displayDogImage} style={{ width: "300px" }} alt="Dog" />
          <button onClick={submitDogImage}>Submit to Server</button>
        </div>
      )}

      {/* Fetch Multiple Images Section */}
      <h2>Fetch Multiple Images</h2>
      <button onClick={fetchMultipleImages}>Fetch Multiple Images</button>
      {displayImages.length > 0 ? (
        displayImages.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Fetched ${index}`} style={{ width: "200px", height: "200px", margin: "10px" }} />
          </div>
        ))
      ) : (
        <p>No images to display yet</p>
      )}
    </div>
  );
};

export default App;