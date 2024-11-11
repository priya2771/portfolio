/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Toggle from "./Components/toggle";
import "./App.css";
// import { useState } from "react";
import useLocalStorage from "use-local-storage";
/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Priyanka Manjarekar",
  title: "Front-End WebDeveloper",
  email: "priyankamanjarekar2001@gmail.com",
  gitHub: "https://github.com/priya2771",
  instagram: "",
  linkedIn:
    "https://www.linkedin.com/in/priyanka-manjarekar-08442522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div id="main" data-theme={isDark ? "dark" : "light"}>
      <Header />
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
