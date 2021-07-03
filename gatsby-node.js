const path = require('path');

const NUM_ALL_POSTS = 1000;
const NUM_PREVIEW_POSTS = 3;
const NUM_POSTS_PER_PAGE = 10;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // the home page
  const home = path.resolve('./src/templates/home.js');
  const blog = path.resolve('./src/templates/blog.js');
  const blogPost = path.resolve('./src/templates/blog-post.js');
  return graphql(
    `
      {
        posts: allContentfulPost(limit: ${NUM_ALL_POSTS}) {
          nodes {
            id
            slug
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

    const { nodes } = result.data.posts;

    // blog post
    nodes.forEach((post) => {
      createPage({
        path: `/blog/${post.slug}`,
        component: blogPost,
        context: {
          post,
        },
      });
    });

    // blog
    const numPages = Math.ceil(nodes.length / NUM_POSTS_PER_PAGE);
    Array.from({ length: numPages }).forEach((_, i) => {
      const pIdx = i * NUM_POSTS_PER_PAGE;
      const pEnd = pIdx + NUM_POSTS_PER_PAGE;
      const page = i + 1;
      createPage({
        path: i === 0 ? `/blog` : `/blog&p=${page}`,
        component: blog,
        context: {
          posts: nodes.splice(pIdx, pEnd),
          limit: NUM_POSTS_PER_PAGE,
          skip: pIdx,
          numPages,
          currentPage: page,
        },
      });
    });

    // home
    createPage({
      path: '/',
      component: home,
      context: {
        posts: nodes.splice(0, NUM_PREVIEW_POSTS),
      },
    });
  });
};
