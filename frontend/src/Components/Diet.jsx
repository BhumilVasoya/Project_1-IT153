import { useState } from "react";
import { FileText, Youtube } from "lucide-react";

// Full list of diet categories and programs
const dietCategories = {
  "Muscle Building": [
    {
      name: "BULK UP DIET",
      pdfUrl: "http://www.gurumann.com/BULK_Workout_and_Nutrition_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=bQ00EQtbBn0&themeRefresh=1",
    },
    {
      name: "BODYBUILDER DIET",
      pdfUrl: "http://www.gurumann.com/DIET_FOR_BODYBUILDER_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=7hbuxCLP9j0",
    },
    {
      name: "PEAK WEEK DIET",
      pdfUrl: "http://www.gurumann.com/Peak_Week_Diet_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=MBWqx_isHvw",
    },
    {
      name: "GAIN WEIGHT DIET",
      pdfUrl: "http://www.gurumann.com/GAIN_WEIGHT_DIET_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=1sc4NAuIXs4",
    },
    {
      name: "LEAN MODE DIET",
      pdfUrl: "http://www.gurumann.com/LEAN_MODE_12_Weeks_Program.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=vB65AsAnkJ0",
    },
  ],
  "Weight Management": [
    {
      name: "WEIGHT LOSS DIET",
      pdfUrl: "http://www.gurumann.com/WEIGHT_LOSS_X_Bluprint_by_Guru_Mann.pdf",
      youtubeUrl: "http://www.youtube.com/gurumannfitness",
    },
    {
      name: "KETO DIET",
      pdfUrl: "http://www.gurumann.com/KETO_DIET_OVERVIEW_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=RgRyPh6zi-o",
    },
    {
      name: "CARB CYCLE DIET",
      pdfUrl: "http://www.gurumann.com/CARB_CYCLE.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=jmIYuxN0J4M",
    },
    {
      name: "FAT LOSS EXTREME",
      pdfUrl: "http://www.gurumann.com/FAT_LOSS_EXTREME_PLAN_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=H5fQMdELzkw",
    },
    {
      name: "SHRED SMART DIET",
      pdfUrl: "http://www.gurumann.com/SHRED_SMART_Diet_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=x6u6E96xIf8",
    },
  ],
  "Health Conditions": [
    {
      name: "DIABETES CURE DIET",
      pdfUrl: "http://www.gurumann.com/CONTROL_DIABETES_eBook_BY_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=tEYuyGSzzSo",
    },
    {
      name: "HIGH BLOOD PRESSURE DIET",
      pdfUrl: "http://www.gurumann.com/High-BP_DIET_eBook_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=FNzFPubkxPQ",
    },
    {
      name: "CHOLESTEROL DIET",
      pdfUrl: "http://www.gurumann.com/CHOLESTEROL_DIET_eBook_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=aszGild3Y0s",
    },
    {
      name: "HEART CARE DIET",
      pdfUrl: "http://www.gurumann.com/Heart_Care_Diet_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=zxM7A3r3puo",
    },
    {
      name: "THYROID CONTROL DIET",
      pdfUrl: "http://www.gurumann.com/THYROID_Control_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=lqEJ8ZQOUHQ",
    },
  ],
  "Special Diets": [
    {
      name: "DIET FOR RAMADAN",
      pdfUrl: "http://www.gurumann.com/DIET_FOR_RAMADAN_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=AaD2kBfLqfE",
    },
    {
      name: "DIET FOR PREGNANCY",
      pdfUrl: "http://www.gurumann.com/Nutrion_Plan_for_Pregnant_Woman_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=VcS0cVBbZnU",
    },
    {
      name: "DIET FOR NIGHT SHIFT",
      pdfUrl: "http://www.gurumann.com/Job_Shift_Meal_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=VeMh0w3jFN8",
    },
    {
      name: "DIET FOR KIDS",
      pdfUrl: "http://www.gurumann.com/Healthy_Kids_Meal_Plan_by_Guru_Mann.pdf",
      youtubeUrl: "https://www.youtube.com/watch?v=YvAZNxgDN3k",
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
