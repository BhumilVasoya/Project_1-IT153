import React, { useState } from "react";
import { FileText, Youtube } from "lucide-react";


const programs1 = [
    {
        title: "Gainer",
        subtitle: "PECS & DELTS",
        image: "images/W1.jpg",
        pdfUrl: "/pdfs/GAINER_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=mZ-vAKfuPzw",
      },
      {
        title: "Pure Mass",
        subtitle: "MASS BUILDING PROGRAM",
        image: "images/W2.jpg",
        pdfUrl: "/pdfs/Pure_Mass_Nutrition_Plan_by_Guru_Mann_.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=cLWmZpaTodg",
      },
      {
        title: "Mass-Up",
        subtitle: "LETS GROW",
        image: "images/W3.jpg",
        pdfUrl: "/pdfs/MASS-UP_eBook.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=wP75L1KaX2A",
      },
      {
        title: "Size 8",
        subtitle: "Pure Vegetarian Muscle Building Program",
        image: "images/W4.jpg",
        pdfUrl: "/pdfs/SIZE_8_WORKOUT_PLAN_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=ch3XoWwa0H4&list=PLPEuMohpXw6cVYcJhXPQFIkgOAHDT8Zdp",
      },
      {
        title: "Bulk",
        subtitle: "Most Intense Bulk Program Ever",
        image: "images/W5.jpg",
        pdfUrl: "/pdfs/BULK_Workout_and_Nutrition_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=bQ00EQtbBn0&list=PLPEuMohpXw6dw90EGwV9VF1CTYNCJ8-dz",
      },
      {
        title: "Mass XL",
        subtitle: "Triple Threat Muscle Building Program",
        image: "images/W6.jpg",
        pdfUrl: "/pdfs/Mass_XL_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=sbx6HBNJW_A&list=PLPEuMohpXw6c7slE6YCp-WiOVGtwOMySC&index=2",
      },
      {
        title: "Desi Diet",
        subtitle: "Build Muscle with Indian Style Food",
        image: "images/W7.jpg",
        pdfUrl: "/pdfs/DESI_DIET_eBook_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=DfgCLMhn2D4&list=PLPEuMohpXw6cWo1NNfBhyH09QRgCzb1la",
      },
      {
        title: "Barbell 55",
        subtitle: "Strength & Muscle Building Program",
        image: "images/W8.jpg",
        pdfUrl: "/pdfs/Barbell_55_Workout_plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=OG255tSKNdE",
      },
      {
        title: "Clean Muscle Gain",
        subtitle: "12 Weeks Clean Bulk Up Program",
        image: "images/W9.jpg",
        pdfUrl: "pdfs/CLEAN_MUSCLE_GAIN_Nutrition_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=Q21DrJXpvj4",
      },
      {
        title: "Muscle Size 5x5",
        subtitle: "6 Week Size Gain Workout & Nutrition Program",
        image: "images/W10.jpg",
        pdfUrl: "/pdfs/MUSCLE_SIZE_5x5_-_WORKOUT_PLAN.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=ICcYm49SsMk&list=PLPEuMohpXw6cByv_lhzteEXfNnGVkFaNt",
      },
      {
        title: "GAINS WITH GURU MANN",
        subtitle: "60 DAYS MUSCLE GAINING PROGRAM",
        image: "images/W11.jpg",
        pdfUrl: "/pdfs/GAINS_WITH_GURU_MANN.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=NKfflqUq_eU",
      },
      {
        title: "LEAN MODE 5-10-20",
        subtitle: "8 WEEK FAT MELTING PROGRAM",
        image: "images/W12.jpg",
        pdfUrl: "/pdfs/LEAN_MODE_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=RTXl8ziDNUI&list=PLPEuMohpXw6f8-VdW6-JpQXGQztswTDzV",
      },
];

const programs2 = [
    {
        title: "6 WEEK SHREDDED",
        subtitle: "Complete Gym Training Program",
        image: "images/f1.jpg",
        pdfUrl: "/pdfs/e_Book.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=qODsX7q4IHk&list=PLPEuMohpXw6fwCjxkR4muE9kPDsGuaRDg",
      },
      {
        title: "MUSCULAR 8",
        subtitle: "8 Week Fat Loss Program",
        image: "images/f2.jpg",
        pdfUrl: "/pdfs/Muscular_8_eBook.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=OWaZWQoZH4Y&list=PLPEuMohpXw6c_DtUWOImmhDuon1fx0Ku-",
      },
      {
        title: "MUSCLEMANN",
        subtitle: "Super Intense Cutting Program",
        image: "images/f3.jpg",
        pdfUrl: "/pdfs/MuscleMann_Workout_Plan_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=5osQN9vh4ck&list=PLPEuMohpXw6ejnSgm8fyqQ8RopsUsIkm8",
      },
      {
        title: "MUSCLE MODE",
        subtitle: "6 Week Cutting Program",
        image: "images/f4.jpg",
        pdfUrl: "/pdfs/MuscleMode_WorkoutPlan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=2e9W-IlZpwo&list=PLPEuMohpXw6ctUsHjb-qVpk8YzUmvKo9R",
      },
      {
        title: "SHARP",
        subtitle: "12 Week Fat Loss Program - Training One Muscle Twice a Week",
        image: "images/f5.jpg",
        pdfUrl: "/pdfs/SHARP_Workout_and_Nutrition_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=tPpEFwuRdEw&list=PLPEuMohpXw6eW8k_8WDYKADqrmsmvYRiL",
      },
      {
        title: "6% FAT LOSS",
        subtitle: "Fat Loss & Cutting Program - No Meat, No Fish, No Eggs",
        image: "images/f6.jpg",
        pdfUrl: "/pdfs/MuscleMode_NutritionPlan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=XiS5IckE-Hk&list=PLPEuMohpXw6dWd4dGPVr0VqedHk2awT3f",
      },
      {
        title: "SHREDX",
        subtitle: "Vegetarian Fat Loss Program - No Meat | No Fish | No Chicken",
        image: "images/f7.jpg",
        pdfUrl: "/pdfs/SHRED_X_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=oUkK7YKPEtU",
      },
      {
        title: "ROAD MAP TO 6 PACK",
        subtitle: "12 Week Abs Popping Routine - Carb Cycle | Peak Week | Supplement Game",
        image: "images/f8.jpg",
        pdfUrl: "/pdfs/6_PACK_Workout_and_Nutrition_Plan_E-Book_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=qBNScmhR7DQ",
      },
      {
        title: "SHREDDED NEXT LEVEL",
        subtitle: "8 Weeks Advanced Fat Shredding Program",
        image: "images/f9.jpg",
        pdfUrl: "/pdfs/SHREDDED_NEXT_LEVEL_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=2F-uhPWOuB8&list=PLmvimH5cMub55KW1MUyCk-JsbqYR9-fQA",
      },
      {
        title: "GET RIPPED FITNESS MODEL",
        subtitle: "6 Weeks Male & Female Workout Program",
        image: "images/f10.jpg",
        pdfUrl: "/pdfs/GET_RIPPED_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=L3jq62nkbzQ&list=PLPEuMohpXw6eo7woAU5gpA1h72FJMlmWT",
      },
];



export default function Workout() {
  const [category, setCategory] = useState("muscle");
  const [searchTerm, setSearchTerm] = useState("");

  const programs = category === "muscle" ? programs1 : programs2;

  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="containerw">
      <h1>Workout Program</h1>
      <input
        type="text"
        placeholder="Search programs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      
    

    <div className="category-buttons">
      <button
        className={category === "muscle" ? "active" : ""}
        onClick={() => setCategory("muscle")}
      >
        Muscle Building
      </button>
      <button
        className={category === "fatloss" ? "active" : ""}
        onClick={() => setCategory("fatloss")}
      >
        Fat Loss
      </button>
    </div>

    <div className="programs-grid">
      {filteredPrograms.map((program, index) => (
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
      ))}
    </div>
  </div>
  );
}

