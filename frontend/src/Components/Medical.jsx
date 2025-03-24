import { FileText, Youtube } from "lucide-react";
import { useState } from "react";


const program = [
  {
    title: "CHOLESTEROL DIET",
    subtitle: "Lower The Bad Cholesterol Increase The Good Cholesterol",
    image: "images/M1.jpg",
    pdfUrl: "/pdfs/CHOLESTEROL_DIET_eBook_by_Guru_Mann.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=aszGild3Y0s",
  },
  {
    title: "CONTROL DIABETES",
    subtitle: "Nutrition Plan To Control Diabetes",
    image: "images/M2.png",
    pdfUrl: "/pdfs/CONTROL_DIABETES_eBook_BY_Guru_Mann.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=tEYuyGSzzSo",
  },
  {
    title: "High-BP DIET",
    subtitle: "Lower Your Blood Pressure Naturally",
    image: "images/M3.jpg",
    pdfUrl: "/pdfs/High-BP_DIET_eBook_by_Guru_Mann.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=FNzFPubkxPQ",
  },
  {
    title: "DRUG REHAB NUTRITION",
    subtitle: "Anti-Drug Diet Plan",
    image: "images/M4.jpg",
    pdfUrl: "/pdfs/DRUG_REHAB_NUTITION_PLAN_by_Guru_Mann.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=5cZQYQlj6is",
  },
  {
    title: "FIGHT	CANCER",
    subtitle: "Nutrition Program For Cancer Patient",
    image: "images/M5.jpg",
    pdfUrl: "/pdfs/FIGHT_CANCER_PDF.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=X91LTangBWg",
  },
  {
    title: "THYROID DIET",
    subtitle: "Nutrition Plan To Control Thyroid & Stay Fit",
    image: "images/M6.jpg",
    pdfUrl: "/pdfs/THYROID_DIET_eBook_by_Guru_Mann.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=bh2kvA8wFgI",
  },
  
];

export default function Medical() {
  const [searchTerm, setSearchTerm] = useState("");
  
    const filteredCategories = program.filter((diet) =>
      diet.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="diet-plan-container">
      <h1>Medical Condition Programs </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="programs-grid">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((program, index) => (
          <div key={index} className="program-card">
                  <div className="program-image">
                      <img src={program.image} alt={program.title} />
                    </div>
                    <div className="program-content">
                      <h2>{program.title}</h2>
                      <p>{program.subtitle}</p>
                      <div className="program-buttons">
                      <a href={program.pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">
                        <FileText /> PDF
                      </a>
                      <a href={program.youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-link">
                        <Youtube /> YouTube
                      </a>
                      </div>
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
