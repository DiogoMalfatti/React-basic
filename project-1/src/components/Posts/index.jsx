import propTypes from 'prop-types';
import './styles.css';
import PostCard from '../PostCard';

const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard 
        key={post.id} 
        title={post.title} 
        body={post.body} 
        id={post.id} 
        cover={post.cover} />
    ))}
  </div>
);

// Posts.defaultProps = {
//   posts: [],
// };

Posts.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      cover: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }),
  ),
};

export default Posts;