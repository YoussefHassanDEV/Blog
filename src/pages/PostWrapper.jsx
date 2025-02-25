import { useParams } from "react-router-dom";
import Post from "../components/Post";

const PostWrapper = () => {
  const { id } = useParams();
  return <Post id={id} />;
};

export default PostWrapper;
