import { Link } from "react-router-dom";
import blogPosts from "../data/posts";
import PropTypes from "prop-types";

const Post = ({ id }) => {
  const post = blogPosts.find(p => p.id === parseInt(id));
  if (!post) return <div className="p-6 text-center text-red-500">Post not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:text-blue-800 text-lg font-semibold">&larr; Back to Home</Link>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Post;
