import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Services from "./views/Services/Services";
import Header from "./views/Header/Header";
import Home from "./views/Home/Home";
import Footer from "./views/Footer/Footer";
import GetInTouch from "./views/GetInTouch/GetInTouch";
import Languages from "./components/Languages/Languages";
import recentProjects from "./views/Recent Projects/recentProjects";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <p>Yoooooooooooooooo</p>
    <recentProjects />
    <Languages />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
