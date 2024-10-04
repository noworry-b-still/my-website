import { Link } from "react-router-dom";
import "./blog.css";

// Sample blog post data (you could fetch this from a file or database in a real project)
const blogPosts = [
  {
    title: "My First Blog Post",
    slug: "my-first-post",
    date: "2024-10-01",
    excerpt: "This is a brief summary of the first blog post.",
  },
  {
    title: "Another Interesting Post",
    slug: "another-post",
    date: "2024-09-25",
    excerpt: "Here’s a quick peek at what this blog post is about.",
  },
  // Add more blog post objects here
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
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
