import { useState } from "react";
import { FileText, Youtube } from "lucide-react";

// Full list of diet categories and programs
const dietCategories = {
  "Muscle Building": [
    {
      name: "BULK UP DIET",
      pdfUrl: "pdfs/BULK_Workout_and_Nutrition_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=bQ00EQtbBn0&themeRefresh=1",
    },
    {
      name: "BODYBUILDER DIET",
      pdfUrl: "pdfs/DIET_FOR_BODYBUILDER_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=7hbuxCLP9j0",
    },
    {
      name: "PEAK WEEK DIET",
      pdfUrl: "pdfs/Peak_Week_Diet_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=MBWqx_isHvw",
    },
    {
      name: "GAIN WEIGHT DIET",
      pdfUrl: "pdfs/CLEAN_MUSCLE_GAIN_Nutrition_Plan_by_Guru_Mann (1).pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=2LNxTZzu2rY",
    },
    
  ],
  "Weight Management": [
    {
      name: "WEIGHT LOSS DIET",
      pdfUrl: "pdfs/WEIGHT_LOSS_X_Bluprint_by_Guru_Mann.pdf",
      youtubeUrl: "http://www.youtube.com/gurumannfitness",
    },
    {
      name: "KETO DIET",
      pdfUrl: "pdfs/KETO_DIET_OVERVIEW_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=RgRyPh6zi-o",
    },
    {
      name: "CARB CYCLE DIET",
      pdfUrl: "pdfs/CARB_CYCLE.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=jmIYuxN0J4M",
    },
    {
      name: "FAT LOSS EXTREME",
      pdfUrl: "pdfs/extremefatloss6weekfatlossworkoutplan.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=0HdBApvaPA0",
    },
    
  ],
  "Health Conditions": [
    {
      name: "DIABETES CURE DIET",
      pdfUrl: "pdfs/CONTROL_DIABETES_eBook_BY_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=tEYuyGSzzSo",
    },
    {
      name: "HIGH BLOOD PRESSURE DIET",
      pdfUrl: "pdfs/High-BP_DIET_eBook_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=FNzFPubkxPQ",
    },
    {
      name: "CHOLESTEROL DIET",
      pdfUrl: "pdfs/CHOLESTEROL_DIET_eBook_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=aszGild3Y0s",
    },
    {
      name: "HEART CARE DIET",
      pdfUrl: "pdfs/THT_CHW-HeartHealthyEatingPlan_0.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=kk6BrqPV3b0&t=2s&ab_channel=MEDSimplified",
    },
    {
      name: "THYROID CONTROL DIET",
      pdfUrl: "pdfs/Thyroid_Diseases_and_Diet_Control.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=5seJiR5aCAM&ab_channel=Dr.WestinChilds",
    },
  ],
  "Special Diets": [
    {
      name: "DIET FOR RAMADAN",
      pdfUrl: "pdfs/DIET_FOR_RAMADAN_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=AaD2kBfLqfE",
    },
    {
      name: "DIET FOR PREGNANCY",
      pdfUrl: "pdfs/Nutrion_Plan_for_Pregnant_Woman_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=VcS0cVBbZnU",
    },
    {
      name: "DIET FOR NIGHT SHIFT",
      pdfUrl: "pdfs/Job_Shift_Meal_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=VeMh0w3jFN8",
    },
    {
      name: "DIET FOR KIDS",
      pdfUrl: "pdfs/KIDS_DIET_PLAN_BY_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=rARm9sVfwCw&list=PLPEuMohpXw6cDzoHaikLsu-Oy3TkFGvPT&index=3",
    },
  ],
};

export default function Diet() {
  const [selectedCategory, setSelectedCategory] = useState("Muscle Building");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter diets by category and search term
  const filteredDiets = dietCategories[selectedCategory].filter((diet) =>
    diet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="diet-plan-container">
      <h1>Diet Plan</h1>

      {/* Category Selection */}
      <div className="category-filter">
        {Object.keys(dietCategories).map((category) => (
          <button
            key={category}
            className={`category-btn ${category === selectedCategory ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search diet..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Diet Cards */}
      <div className="diet-card-container">
        {filteredDiets.map((diet, index) => (
          <div key={index} className="diet-card">
            <h2>{diet.name}</h2>
            <a href={diet.pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">
              <FileText /> PDF
            </a>
            <a href={diet.youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-link">
              <Youtube /> YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
