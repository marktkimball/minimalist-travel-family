import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import AboutContent from "../components/about-content";

import styles from "./about.module.scss";

const AboutPage = ({ data }) => {
  return (
    <Layout title="About" pathName="/about">
      <h1 className="page-heading">About</h1>

      <AboutContent
        heading={data.aboutSectionOne.frontmatter.heading}
        copy={data.aboutSectionOne.html}
        image={data.aboutSectionOne.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionOne.frontmatter.imageAlt}
      />

      <section className={styles.finalSectionWrapper}>
        <div>
          <h2 className="section-heading">Thanks for stopping by!</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.aboutSectionFinal.html,
            }}
          ></div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    aboutSectionOne: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "about-1" } }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionFinal: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "about-final" } }
    ) {
      html
    }
  }
`;

export default AboutPage;
