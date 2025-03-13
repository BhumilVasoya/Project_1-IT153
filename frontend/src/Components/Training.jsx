import { FileText, Youtube } from "lucide-react";
import { useState } from "react";


const dietCategories = [
    {
        name: "HIIT",
        pdfUrl: "https://darebee.com/pdf/programs/30-days-of-hiit.pdf",
        youtubeUrl: "https://youtu.be/9rQ5wxssQss?si=AbuUM9qnVF-py0-f",
      },
      {
        name: "SELF DEFENCE TRAINING",
        pdfUrl: "https://www.ucdc.edu/sites/default/files/uploads/documents/Other/Personal%20Safety.pdf",
        youtubeUrl: "https://youtu.be/M4_8PoRQP8w?si=6sI8bfJ33WKkxAvi",
      },
      {
        name: "SPECIAL FORCES",
        pdfUrl: "https://static1.squarespace.com/static/5ec40fa10f879d0420d5c29e/t/5efaaf9c070d8726ee97e67a/1593487267151/14+Week_THOR3_SFAS+Training+Plan.pdf",
        youtubeUrl: "https://youtu.be/oG6rSdYVZQw?si=2dE79hUWkj5HcRnV",
      },
];

export default function Training() {
  const [searchTerm, setSearchTerm] = useState("");
  
    const filteredCategories = dietCategories.filter((diet) =>
      diet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="diet-plan-container">
      <h1>Explore Advanced Training </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="diet-card-container">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((diet, index) => (
          <div key={index} className="diet-card">
            <h2 className="diet-title">{diet.name}</h2>
            <div className="diet-buttons">
            <a href={diet.pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">
            <FileText /> PDF
          </a>
          <a href={diet.youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-link">
            <Youtube /> YouTube
          </a>
            </div>
          </div>
        ))
      ) : (
      <p className="no-result">No matching categories found.</p>
    )}
    </div>
    </div>
  );
}
