import React from "react";
import "../../general.css"
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Recipes from "../Recipes/Recipes";
import Info from "../Info/Info";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import logo from "../../assets/images/yummy_logo.png"
import Default from "../Default/Default";

function App() {
    const nav = [{url: "/", text: "Home", exact: "true"},
        {url: "/recipes", text: "Recipes", exact: "false"},
        {url: "/info", text: "Info", exact: "true"}];

  return (
      <BrowserRouter>
          <MainTemplate footerCourseName="Applicazioni web: progettazione e sviluppo"
                        footerCourseLink="https://elearning.unimib.it/course/view.php?id=44672"
                        navItems={nav}
                        logo= {logo}>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/recipes" element={<Recipes />}/>
                  <Route path="/info" element={<Info />}/>
                  <Route path="/recipes/:number" element={<RecipeDetail />}/>
                  <Route path="*" element={<Default/>} />
              </Routes>
          </MainTemplate>
      </BrowserRouter>
  );
}

export default App;
