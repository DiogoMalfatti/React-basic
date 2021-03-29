import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const PostCard = ({ title, cover, body, id }) => {
  return (
    <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
  );
}

PostCard.propTypes = {
  title: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};

export default PostCard;