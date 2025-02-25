import { Link } from "react-router-dom";
import blogPosts from "../data/posts";

const Home = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Blog Posts</h1>
    <ul className="space-y-4">
      {blogPosts.map(post => (
        <li key={post.id} className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
          <Link to={`/post/${post.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
