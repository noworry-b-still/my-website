import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import styled from "styled-components";
import Elixir from "../images/elixir.jpeg";

// Styled Components
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #4b5563;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BlogPost = styled.article`
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 200px;
  background: #f3f4f6;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const Categories = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CategoryTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    color: white;
  }
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: #2563eb;
    }
  }
`;

const PostExcerpt = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #6b7280;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

// Blog Component
const Blog = () => {
  const blogPosts = [
    {
      title: "How To Install Elixir Locally",
      slug: "elixir-install-locally",
      date: "2024-10-04",
      author: "Dinesh Pandikona",
      excerpt: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
      categories: ["Programming", "Tutorial"],
      image: Elixir,
    }
  ];

  return (
    <BlogContainer>
      <BlogHeader>
        <Title>Blog</Title>
        <Subtitle>
          Explore articles about programming, technology, and software development
        </Subtitle>
      </BlogHeader>

      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogPost key={post.slug}>
            <PostImage>
              <img src={post.image} alt={post.title} />
            </PostImage>

            <PostContent>
              <Categories>
                {post.categories.map((category) => (
                  <CategoryTag key={category}>{category}</CategoryTag>
                ))}
              </Categories>

              <PostTitle>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </PostTitle>

              <PostExcerpt>{post.excerpt}</PostExcerpt>

              <PostMeta>
                <MetaItem>
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </MetaItem>
                <MetaItem>
                  <User size={16} />
                  <span>{post.author}</span>
                </MetaItem>
              </PostMeta>

              <ReadMore to={`/blog/${post.slug}`}>
                Read More →
              </ReadMore>
            </PostContent>
          </BlogPost>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;