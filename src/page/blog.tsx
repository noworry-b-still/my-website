import { Link } from "react-router-dom";
import "./blog.css";

// Sample blog post data (you could fetch this from a file or database in a real project)
const blogPosts = [
  {
    title: "How To Install Elixir Locally",
    slug: "elixir-install-locally",
    date: "2024-10-04",
    author: "Dinesh Pandikona",
    excerpt:
      "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
  },
];

const Blog = () => {
  return (
    <div className="blog-list">
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug} className="blog-post">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <p>
              <small>{post.date}</small>
              <small>By {post.author}</small>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
