import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./featured-tag-item.module.scss";

const FeaturedTagItem = ({ tag, heading, image, imageAlt }) => {
  return (
    <div className={styles.featuredTagItemContainer}>
      <div className={styles.featuredTagItem}>
        <Link to={`/blog/tags/${tag}`}>
          <Img fluid={image} alt={imageAlt} />
          <h3 className="section-sub-heading">{heading}</h3>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTagItem;
