import React from "react";
import PropTypes from "prop-types";
import BlogPostsTemplate from "../../components/blog-list/BlogPosts";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);

  return (
    <BlogPostsTemplate
      author={entry.getIn(["data", "author"])}
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      draft={entry.getIn(["data", "draft"])}
      excerpt={entry.getIn(["data", "excerpt"])}
      image={entry.getIn(["data", "image"])}
      imageAlt={entry.getIn(["data", "imageAlt"])}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
