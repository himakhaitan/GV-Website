import { useState } from "react";

import { TfiWorld } from "react-icons/tfi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Label from "../../components/Label";
import classes from "../../styles/Home.module.css";

// Importing Data
import { categories, projects } from "../../data/project";

const Projects = ({}) => {
  const [category, setCategory] = useState("design");

  const changeHandler = (tag, e) => {
    setCategory(tag);
  };

  return (
    <div className={classes.home_sixth} id="projects">
      <div className={classes.home_sixth_header}>
        <div>
          <h1
            className={
              "margin-bottom-large color-tertiary " + classes.home_sixth_head
            }
          >
            Best <span className="color-secondary">Projects</span>.
          </h1>
          <div className={classes.home_sixth_labels}>
            {categories.map((item, index) => (
              <Label
                isSelected={category == item.name.toLowerCase()}
                key={index}
                Icon={<TfiWorld />}
                text={item.name}
                onClick={(e) => changeHandler(item.name.toLowerCase(), e)}
              />
            ))}
          </div>
        </div>
        <p className={classes.home_sixth_text + " margin-bottom-medium"}>
          Our portfolio includes diverse ventures from startups to established
          ventures, each project is a testament to our passion for creativity
          and innovation. These projects are the stories of brands we&#39;ve
          helped flourish, one innovative solution at a time.
        </p>
      </div>
      <div className={classes.home_sixth_display + " margin-top-large"}>
        {projects[category].map((item, index) => {
          return (
            <Link
              href="/"
              className={
                index == 1
                  ? classes.home_sixth_two + " " + classes.home_sixth_item
                  : classes.home_sixth_item
              }
            >
              <div>
                <img
                  className={classes.home_sixth_img}
                  src={`/images/projects/${category}/${item.image}.webp`}
                />
                <div className={classes.home_sixth_cta}>
                  <BsArrowUpRight />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
