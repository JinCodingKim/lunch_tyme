import React from "react";
import routes from "./routes";
import Navigation from "./components/Navigation/Navigation";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import "./App.css";

const App = () => (
  <div>
    <Navigation />
    <section className="main-content">
      <SideNavigation />
      {routes}
    </section>
  </div>
);

export default App;
