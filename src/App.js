import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch, Link, NavLink } from "react-router-dom";
import Calendar from "./Calendar"; 
import NotePage from "./NotePage"; 
import FishShortStory from "./FishShortStory"; 
import PerfectAngleStory from "./PerfectAngleStory"; 
import GettinFoodStory from "./GettinFoodStory";
import MissYouPage from "./MissYouPage"; 

import "./index.css";

const App = () => {
  return (
    <Router basename="/gelececk-appointment">
      <div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Miss You
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" activeClassName="active">
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/note" activeClassName="active">
                A Lil Note
              </NavLink>
            </li>
            <li>
              <NavLink to="/fish-story" activeClassName="active">
                Fish Short Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/angle-story" activeClassName="active">
                Perfect Angle Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/food-story" activeClassName="active">
                Food Story
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MissYouPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/note" element={<NotePage />} />
          <Route path="/fish-story" element={<FishShortStory />} /> 
          <Route path="/angle-story" element={<PerfectAngleStory />} /> 
          <Route path="/food-story" element={<GettinFoodStory />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
