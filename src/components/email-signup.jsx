import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./email-signup.module.scss";

const EmailSignup = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mailchimpUrl
        }
      }
    }
  `);

  return (
    <div className={styles.signupSection}>
      <h2 className="section-heading">Subscribe to the blog!</h2>
      <form
        className={styles.form}
        action={data.site.siteMetadata.mailchimpUrl}
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <fieldset>
          <label className="clip" htmlFor="first-name">
            First Name
          </label>
          <input
            className={styles.formInputField}
            placeholder="First Name"
            type="text"
            name="FIRST NAME"
            id="first-name"
          />
          <label className="clip" htmlFor="email-address">
            Email Address
          </label>
          <input
            className={styles.formInputField}
            placeholder="Email Address"
            type="text"
            name="EMAIL"
            id="email-address"
          />
          <input
            className={styles.formSubmit}
            type="submit"
            name="subscribe"
            value="Sign Up"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default EmailSignup;
