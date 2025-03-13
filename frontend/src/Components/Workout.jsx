import React, { useState } from "react";
import { FileText, Youtube } from "lucide-react";


const programs1 = [
    {
        title: "Gainer",
        subtitle: "PECS & DELTS",
        image: "images/W1.jpg",
        pdfUrl: "http://www.gurumann.com/GAINER_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=mZ-vAKfuPzw",
      },
      {
        title: "Pure Mass",
        subtitle: "MASS BUILDING PROGRAM",
        image: "images/W2.jpg",
        pdfUrl: "http://www.gurumann.com/Pure_Mass_Nutrition_Plan_by_Guru_Mann_.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=cLWmZpaTodg",
      },
      {
        title: "Mass-Up",
        subtitle: "LETS GROW",
        image: "images/W3.jpg",
        pdfUrl: "http://www.gurumann.com/MASS-UP_eBook.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=wP75L1KaX2A",
      },
      {
        title: "Size 8",
        subtitle: "Pure Vegetarian Muscle Building Program",
        image: "images/W4.jpg",
        pdfUrl: "http://www.gurumann.com/SIZE_8_WORKOUT_PLAN_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=ch3XoWwa0H4&list=PLPEuMohpXw6cVYcJhXPQFIkgOAHDT8Zdp",
      },
      {
        title: "Bulk",
        subtitle: "Most Intense Bulk Program Ever",
        image: "images/W5.jpg",
        pdfUrl: "http://www.gurumann.com/BULK_Workout_and_Nutrition_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=bQ00EQtbBn0&list=PLPEuMohpXw6dw90EGwV9VF1CTYNCJ8-dz",
      },
      {
        title: "Mass XL",
        subtitle: "Triple Threat Muscle Building Program",
        image: "images/W6.jpg",
        pdfUrl: "http://www.gurumann.com/Mass_XL_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=sbx6HBNJW_A&list=PLPEuMohpXw6c7slE6YCp-WiOVGtwOMySC&index=2",
      },
      {
        title: "Desi Diet",
        subtitle: "Build Muscle with Indian Style Food",
        image: "images/W7.jpg",
        pdfUrl: "http://www.gurumann.com/DESI_DIET_eBook_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=DfgCLMhn2D4&list=PLPEuMohpXw6cWo1NNfBhyH09QRgCzb1la",
      },
      {
        title: "Barbell 55",
        subtitle: "Strength & Muscle Building Program",
        image: "images/W8.jpg",
        pdfUrl: "http://www.gurumann.com/Barbell_55_Workout_plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=OG255tSKNdE",
      },
      {
        title: "Clean Muscle Gain",
        subtitle: "12 Weeks Clean Bulk Up Program",
        image: "images/W9.jpg",
        pdfUrl: "http://www.gurumann.com/Barbell_55_Workout_plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=Q21DrJXpvj4",
      },
      {
        title: "Muscle Size 5x5",
        subtitle: "6 Week Size Gain Workout & Nutrition Program",
        image: "images/W10.jpg",
        pdfUrl: "http://www.gurumann.com/MUSCLE_SIZE_5x5_-_WORKOUT_PLAN.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=ICcYm49SsMk&list=PLPEuMohpXw6cByv_lhzteEXfNnGVkFaNt",
      },
      {
        title: "GAINS WITH GURU MANN",
        subtitle: "60 DAYS MUSCLE GAINING PROGRAM",
        image: "images/W11.jpg",
        pdfUrl: "http://www.gurumann.com/GAINS_WITH_GURU_MANN.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=NKfflqUq_eU",
      },
      {
        title: "LEAN MODE 5-10-20",
        subtitle: "8 WEEK FAT MELTING PROGRAM",
        image: "images/W12.jpg",
        pdfUrl: "http://www.gurumann.com/LEAN_MODE_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=RTXl8ziDNUI&list=PLPEuMohpXw6f8-VdW6-JpQXGQztswTDzV",
      },
];

const programs2 = [
    {
        title: "6 WEEK SHREDDED",
        subtitle: "Complete Gym Training Program",
        image: "images/f1.jpg",
        pdfUrl: "http://www.gurumann.com/GAINER_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=mZ-vAKfuPzw",
      },
      {
        title: "MUSCULAR 8",
        subtitle: "8 Week Fat Loss Program",
        image: "images/f2.jpg",
        pdfUrl: "http://www.gurumann.com/Pure_Mass_Nutrition_Plan_by_Guru_Mann_.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=cLWmZpaTodg",
      },
      {
        title: "MUSCLEMANN",
        subtitle: "Super Intense Cutting Program",
        image: "images/f3.jpg",
        pdfUrl: "http://www.gurumann.com/MASS-UP_eBook.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=wP75L1KaX2A",
      },
      {
        title: "MUSCLE MODE",
        subtitle: "6 Week Cutting Program",
        image: "images/f4.jpg",
        pdfUrl: "http://www.gurumann.com/SIZE_8_WORKOUT_PLAN_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=ch3XoWwa0H4&list=PLPEuMohpXw6cVYcJhXPQFIkgOAHDT8Zdp",
      },
      {
        title: "SHARP",
        subtitle: "12 Week Fat Loss Program - Training One Muscle Twice a Week",
        image: "images/f5.jpg",
        pdfUrl: "http://www.gurumann.com/BULK_Workout_and_Nutrition_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=bQ00EQtbBn0&list=PLPEuMohpXw6dw90EGwV9VF1CTYNCJ8-dz",
      },
      {
        title: "6% FAT LOSS",
        subtitle: "Fat Loss & Cutting Program - No Meat, No Fish, No Eggs",
        image: "images/f6.jpg",
        pdfUrl: "http://www.gurumann.com/Mass_XL_Workout_Plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=sbx6HBNJW_A&list=PLPEuMohpXw6c7slE6YCp-WiOVGtwOMySC&index=2",
      },
      {
        title: "SHREDX",
        subtitle: "Vegetarian Fat Loss Program - No Meat | No Fish | No Chicken",
        image: "images/f7.jpg",
        pdfUrl: "http://www.gurumann.com/DESI_DIET_eBook_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=DfgCLMhn2D4&list=PLPEuMohpXw6cWo1NNfBhyH09QRgCzb1la",
      },
      {
        title: "ROAD MAP TO 6 PACK",
        subtitle: "12 Week Abs Popping Routine - Carb Cycle | Peak Week | Supplement Game",
        image: "images/f8.jpg",
        pdfUrl: "http://www.gurumann.com/Barbell_55_Workout_plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=OG255tSKNdE",
      },
      {
        title: "SHREDDED NEXT LEVEL",
        subtitle: "8 Weeks Advanced Fat Shredding Program",
        image: "images/f9.jpg",
        pdfUrl: "http://www.gurumann.com/Barbell_55_Workout_plan_by_Guru_Mann.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=Q21DrJXpvj4",
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

