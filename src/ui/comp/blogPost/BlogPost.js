import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the slug
import "./BlogPost.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // You can use any highlight.js theme.

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from the route parameters
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the markdown file for the blog post
    import(`../../posts/${slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <div className="blog-post">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default BlogPost;
