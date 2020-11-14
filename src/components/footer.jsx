import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FaInstagram } from "react-icons/fa";

import styles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
          }
          mailchimpUrl
        }
      }
    }
  `);

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerColumnName}>
          <span className={styles.name}>Minimalist Travel Family</span>
          <p className="f5">Traveling light across the world.</p>
        </div>
        <div className={styles.footerColumnLinks}>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
          <Link to="/blog" className={styles.navItem}>
            Blog
          </Link>
          <Link to="/about" className={styles.navItem}>
            About
          </Link>
          <hr />
          <div>
            <a
              href={data.site.siteMetadata.mailchimpUrl}
              target="__blank"
              className="nav-link mh3"
            >
              Subscribe
            </a>
            |
            <a href="/rss.xml" className="nav-link mh3">
              RSS
            </a>
            |
            <a href="/sitemap.xml" className="nav-link mh3">
              Sitemap
            </a>
          </div>
        </div>
        <div className={styles.footerColumnSocial}>
          <a
            href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" alt="instagram icon link" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
