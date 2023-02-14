import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "crypt currency car curt ",
    github: "https://github.com",
    demo: "youtube.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "bilemiyorum ki nerden bileyim ",
    github: "https://github.com",
    demo: "youtube.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "karnim acikti yavvvvvv ",
    github: "https://github.com",
    demo: "youtube.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "asihflkashflkashflkashf ",
    github: "https://github.com",
    demo: "youtube.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "napanr le bu leee ",
    github: "https://github.com",
    demo: "youtube.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "oralarda mevsim yazmi",
    github: "https://github.com",
    demo: "youtube.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
