import "../App.css";
import {useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

  const [user, setUser] = useState({ name: "", email: "" });

  const { logout } = useAuth();



  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn?.querySelector("i");
  
    // Retrieve user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  
    const toggleMenu = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    };
  
    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };
  
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", toggleMenu);
      navLinks.addEventListener("click", closeMenu);
    }
  
    // Ensure ScrollReveal is available and initialize it after component renders
    const sr = ScrollReveal();
  
    const scrollRevealOption = {
      distance: "100px",
      origin: "bottom",
      duration: 1000,
      reset: true, // Ensures animation runs again on re-scroll
    };
  
    sr.reveal(".header__container p", scrollRevealOption);
    sr.reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
    sr.reveal(".home-title", { ...scrollRevealOption, delay: 700 });
    sr.reveal(".header", { ...scrollRevealOption, origin: "top", delay: 300 });
    sr.reveal(".section__container.header__container", {
      ...scrollRevealOption,
      delay: 900,
      beforeReveal: (el) => {
        el.style.transition = "all, opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s";
      },
    });
  
    return () => {
      if (menuBtn && navLinks) {
        menuBtn.removeEventListener("click", toggleMenu);
        navLinks.removeEventListener("click", closeMenu);
      }
    };
  }, []);

      const handleLogout = () => {
        logout();
        setUser({ name: "", email: "" });
        localStorage.removeItem("user");
      };
    
      return (
        <div>
          <header className="header">
            <nav>
              <div className="nav__bar">
                <div className="logo">
                  <a href="/">
                    <img src="images/logo-1.png" alt="logo" />
                  </a>
                </div>
                <div className="nav__menu__btn" id="menu-btn">
                  <i className="ri-menu-line"></i>
                </div>
              </div>
              <ul className="nav__links" id="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Programs</a></li>
                <li><a href="#bmi">BMI</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="profile-menu">
                <FaUserCircle className="profile-icon" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="dropdown-content">
                <DropdownMenu.Item className="dropdown-item">
                  {user.name || "User"}
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  {user.email || "user@example.com"}
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="dropdown-separator" />
                <DropdownMenu.Item className="dropdown-item" onClick={handleLogout}>
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
            </nav>
    
            <div className="section__container header__container" id="home">
              <p>Strength-Fitness-Success</p>
              <div className="home-title">
                <h1>Your Fitness, Our Priority</h1>
              </div>
            </div>
          </header>
    
          
    
          
        </div>
      );
    };

export default Navbar;
