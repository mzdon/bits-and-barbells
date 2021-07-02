const path = require('path');

const NUM_POST_PREVIEW = 3;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const home = path.resolve('./src/templates/home.js');
  return graphql(
    `
      {
        posts: allContentfulPost(limit: ${NUM_POST_PREVIEW}) {
          nodes {
            id
            title
            banner {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            preview {
              raw
            }
            body {
              raw
            }
            updatedAt
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const { posts } = result.data;

    createPage({
      path: '/',
      component: home,
      context: {
        posts,
      },
    });
  });
};
