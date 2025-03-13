import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import React, { useRef } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import SignIn from './Components/Signin';
import SignUp from './Components/SignUp';
import Workout from './Components/Workout';
import Diet from './Components/Diet';
import Fitness from './Components/Fitness';
import Training from './Components/Training';
import Bmi from './Components/Bmi';

function App() {
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const bmiRef = useRef(null);

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Routes */}
      <Route path="/workout" element={<Workout />}/>
      <Route path="/diet" element={<Diet />}/>
      <Route path="/fitness" element={<Fitness />}/>
      <Route path="/training" element={<Training />}/>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navbar
              onAboutClick={() => scrollToSection(aboutRef)}
              onServiceClick={() => scrollToSection(serviceRef)}
              onBmiClick={() => scrollToSection(bmiRef)}
              onContactClick={() => scrollToSection(contactRef)}
              
            />
            <section id="about" ref={aboutRef}>
              <About />
            </section>
            <section id="service" ref={serviceRef}>
              <Services />
            </section>
            <section id="bmi" ref={bmiRef}>
              <Bmi />
            </section>
            <section id="contact" ref={contactRef}>
              <Contact />
            </section>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
