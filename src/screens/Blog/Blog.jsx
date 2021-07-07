import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import PostPreview from 'components/PostPreview';
import Footer from 'components/Footer';
import Title from 'components/Title';
import { PortfolioProvider } from 'context/context';
import { footerData } from 'mock/data';
import PageButtons from './components/PageButtons';

const Blog = ({ posts, currentPage, numPages }) => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <section id="blog">
        <div className="blog-header-wrapper">
          <Title title="Information Station" />
        </div>
        <Container>
          <div className="blog-body-wrapper">
            {posts.map((post) => (
              <PostPreview post={post} />
            ))}
          </div>

          <div className="blog-pagination-wrapper">
            <PageButtons currentPage={currentPage} numPages={numPages} />
          </div>
        </Container>
      </section>
      <Footer />
    </PortfolioProvider>
  );
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default Blog;
