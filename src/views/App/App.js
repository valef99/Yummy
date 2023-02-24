import React from "react";
import "../../general.css"
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Recipes from "../Recipes/Recipes";
import About from "../About/About";
import logo from "../../assets/images/yummy_logo.png"
import Default from "../Default/Default";
import ScrollButton from "../../components/ScrollButton/ScrollButton"
import Wrapper from "../../components/Wrapper/Wrapper"

function App() {
    const nav = [{url: "/", text: "Home", exact: "true"},
        {url: "/recipes", text: "Recipes", exact: "false"},
        {url: "/info", text: "About us", exact: "true"}];

  return (
      <BrowserRouter>
          <MainTemplate footerCourseLink="https://elearning.unimib.it/course/view.php?id=44672"
                        navItems={nav}
                        logo= {logo}>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/recipes" element={<Recipes />}/>
                  <Route path="/info" element={<About />}/>
                  <Route path="/recipes/:number" element={<Wrapper />}/>
                  <Route path="*" element={<Default/>} />
              </Routes>
              <ScrollButton/>
          </MainTemplate>
      </BrowserRouter>
  );
}

export default App;
