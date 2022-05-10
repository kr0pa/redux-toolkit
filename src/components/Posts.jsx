import { useSelector } from "react-redux";
import { selectedPosts } from "../features/postsSlice";
import "./Posts.css";

function Posts() {
  const posts = useSelector(selectedPosts);

  const renderedPosts = posts?.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <h4>{post.content}</h4>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default Posts;
