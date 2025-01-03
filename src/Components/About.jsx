/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import Video from "../images/bg.mp4";

// const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "A passionate Frontend Developer Intern with a drive to create exceptional user experiences through the use of HTML, CSS, and JavaScript. Seeking a position to leverage strong technical and problem-solving skills and extensive web development knowledge .";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "HTML, CSS, JS",
  "React",
  "Mobile user interfaces",
  "Bootstrap, Tailwind CSS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <video className="background" src={Video} autoPlay loop muted></video>
      <div
        className="about"
        style={{
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          height: "10%",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
