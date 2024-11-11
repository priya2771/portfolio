/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Portfolio Website",
    description:
      " Simple portfolio website using HTML, CSS and JS. It is self intro website.",
    url: "https://priya2771.github.io/my_portfolio/",
  },
  {
    title: "Login Page",
    description:
      " Log in into website using email id , a web page that allows users to register for a product or service by providing their information",
    url: "https://priya2771.github.io/Login_page/",
  },
  {
    title: "Image-galley Website",
    description:
      " This simple and elegant photo gallery is built using React JS, HTML, CSS, and JavaScript, showcasing carousel of images in many ways.",
    url: "https://priya2771.github.io/my_photo/",
  },
  {
    title: "Website Developement",
    description:
      "It is sample website for website developement company. Using Tailwind CSS for styling",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="port">
        <div style={{ alignSelf: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1689023539491-221a5c9e6c71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="pimg"
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
