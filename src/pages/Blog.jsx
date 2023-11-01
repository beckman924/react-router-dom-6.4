import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              {post.id} - {post.title}
            </Link>
          </li>
        ))
      ) : (
        <p className="text-center">No posts found</p>
      )}
    </ul>
  );
};

export default Blog;
