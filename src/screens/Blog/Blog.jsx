import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import PostPreview from 'components/PostPreview';
import Footer from 'components/Footer';
import Title from 'components/Title';
import { PortfolioProvider } from 'context/context';
import { footerData } from 'mock/data';

const Blog = ({ posts }) => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <section id="blog">
        <div className="blog-wrapper">
          <Container>
            <Title title="Information Station" />
            {posts.map((post) => (
              <PostPreview post={post} />
            ))}
          </Container>
        </div>
      </section>
      <Footer />
    </PortfolioProvider>
  );
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
};

export default Blog;
