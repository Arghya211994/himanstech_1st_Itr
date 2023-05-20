import React from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: "/portfolio__1.png",
    name: "Web-Development",
    category: "web-development",
  },
  {
    id: 2,
    image: "/portfolio__2.png",
    name: "WordPress",
    category: "wordpress",
  },
  {
    id: 3,
    image: "/portfolio__3.png",
    name: "Web-Development",
    category: "web-development",
  },
  {
    id: 4,
    image: "/portfolio__4.png",
    name: "App-Development",
    category: "app-development",
  },
  {
    id: 5,
    image: "/portfolio__7.png",
    name: "WordPress",
    category: "wordpress",
  },

  {
    id: 6,
    image: "/portfolio__6.png",
    name: "Web-Development",
    category: "web-development",
  },
];

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(data);
  const [activeButton, setActiveButton] = useState(false);

  const filter = (currCategory) => {
    const updated_portfolio = data.filter(
      (current) => current.category === currCategory
    );

    setPortfolio(updated_portfolio);

    setActiveButton(currCategory);
  };

  const onActive = (show) => {
    setPortfolio(data);

    setActiveButton(show);
  };

  return (
    <>
      <section className={`${styles.portfolio}`} id="portfolio">
        <h1 className={`${styles.heading}`}>
          Our <span style={{ color: "#5abc2e" }}>Portfolio</span>
        </h1>
        <main className={styles.customMargin}>
          <div className={`${styles.category_box}`}>
            <motion.button
              onClick={() => filter("web-development")}
              style={{
                color:
                  activeButton === "web-development" ? "rgb(163 230 53)" : "",
              }}
            >
              Web-Development
            </motion.button>

            <motion.button
              onClick={() => filter("app-development")}
              style={{
                color:
                  activeButton === "app-development" ? "rgb(163 230 53)" : "",
              }}
            >
              App-Development
            </motion.button>

            <motion.button
              onClick={() => filter("wordpress")}
              style={{
                color: activeButton === "wordpress" ? "rgb(163 230 53)" : "",
              }}
            >
              WordPress
            </motion.button>

            <motion.button
              onClick={() => onActive("show")}
              style={{
                color: activeButton === "show" ? "rgb(163 230 53)" : "",
              }}
            >
              Show all
            </motion.button>
          </div>

          <div className={`${styles.category_content}`}>
            {portfolio.map((currElem) => {
              return (
                <>
                  <motion.div
                    className={`${styles.category_contents}`}
                    key={currElem.id}
                    whileInView={{ scale: [0, 1] }}
                    animate={{
                      opacity: 1,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={currElem.image}
                      alt={currElem.name}
                      height={300}
                      width={1000}
                      style={{ objectFit: "fill" }}
                    />
                    <p>{currElem.name}</p>
                  </motion.div>
                </>
              );
            })}
          </div>
          <Link href="/portfolio" className={styles.btn}>
            Show All
          </Link>
        </main>
      </section>
    </>
  );
};

export default Portfolio;
