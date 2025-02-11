import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Code highlighting
import "./BlogPost.css"; // Updated CSS file

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../../posts/${slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </article>
    </div>
  );
};

export default BlogPost;
