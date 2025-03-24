import { useState } from "react";
import { FileText, Youtube } from "lucide-react";

const dietCategories = [
  {
    name: "HEALTH FITNESS",
    pdfUrl: "pdfs/4483_Physical fitness (1).pdf",
    youtubeUrl: "https://youtu.be/UIPvIYsjfpo?si=OA-eseZHQnddyzzj",
  },
  {
    name: "NUTRITIONAL FITNESS",
    pdfUrl: "pdfs/food_nutrition_health_and_fitness.pdf",
    youtubeUrl: "https://youtu.be/aADukThvjXQ?si=_bWQPpQaw8soPhom",
  },
  {
    name: "MENTAL AND EMOTIONAL FITNESS",
    pdfUrl: "pdfs/Mental-Emotional-Fitness-PDF.pdf",
    youtubeUrl: "https://youtu.be/ssksP3FbRUc?si=mQqOgFPffjeZEIGU",
  },
  {
    name: "SPORTS AND PERFORMANCE FITNESS",
    pdfUrl: "pdfs/High-performance-training-for-sports-by-David-Joyce-Daniel-Lewindon.pdf",
    youtubeUrl: "https://youtu.be/TdlvwQJzLLY?si=mP7d8m2AjujyOM7Z",
  },
  {
    name: "HOLISTIC AND WELLNESS FITNESS",
    pdfUrl: "pdfs/v10-issue2-article12.pdf",
    youtubeUrl: "https://youtu.be/4TtN0AN7Hc0?si=JGvDTWN5dtpWrp8X",
  },
];

export default function Fitness() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = dietCategories.filter((diet) =>
    diet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="diet-plan-container">
        <h1>Explore Health Fitness </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

      

      {/* Diet Cards */}
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
