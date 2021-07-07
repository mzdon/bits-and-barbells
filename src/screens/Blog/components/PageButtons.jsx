import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';

const getLinkDestination = (num) => `/blog${num > 0 ? `/$page=${num}` : ''}`;

const PageButtons = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <ul className="pagination-buttons-wrapper">
      <Link
        to={getLinkDestination(prevPage)}
        rel="prev"
        disabled={isFirst}
        className={isFirst ? 'is-disabled' : ''}
      >
        ← Previous Page
      </Link>
      {Array.from({ length: numPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link
            to={getLinkDestination(i === 0 ? 0 : i + 1)}
            className={`number-button ${i + 1 === currentPage ? ' is-current' : ''}`}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      <Link
        to={getLinkDestination(nextPage)}
        rel="next"
        disabled={isLast}
        className={isLast ? 'is-disabled' : ''}
      >
        Next Page →
      </Link>
    </ul>
  );
};

PageButtons.propTypes = {
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default PageButtons;
