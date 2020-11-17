import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./featured-tag-item.module.scss";

const FeaturedTagItem = ({ tag, heading, image, imageAlt }) => {
  return (
    <Link className={styles.featuredTagItemLink} to={`/blog/tags/${tag}`}>
      <div className={styles.featuredTagItemContainer}>
        <div className={styles.featuredTagItem}>
          <Img fluid={image} alt={imageAlt} />
          <h3 className="section-sub-heading">{heading}</h3>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedTagItem;
