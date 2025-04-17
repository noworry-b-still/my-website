import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, BookOpen, Search } from "lucide-react";
import Elixir from "../images/elixir.jpeg";
import "./blog.css";

// Blog Component
const Blog = () => {
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "How To Install Elixir Locally",
      slug: "elixir-install-locally",
      date: "2024-10-04",
      author: "Dinesh Pandikona",
      excerpt: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
      categories: ["Programming", "Tutorial"],
      image: Elixir
    },
    // Add more blog posts as needed
  ];

  // Get unique categories from blog posts
  const allCategories = blogPosts.flatMap(post => post.categories);
  const uniqueCategories = ["All", ...new Set(allCategories)];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(filter.toLowerCase());

    const matchesCategory = selectedCategory === "All" ||
      post.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-container">
      {/* Header with animated particles */}
      <div className="blog-header">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="title-wrapper">
          <h1 className="blog-title">
            <BookOpen size={36} className="blog-icon" />
            Explore & Learn
            <div className="title-underline"></div>
          </h1>
        </div>

        <p className="blog-subtitle">
          Discover articles on programming, technology, and spirituality.
        </p>
      </div>

      {/* Filter and search controls */}
      <div className="blog-controls">
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              className="search-input"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="category-filters">
          {uniqueCategories.slice(0, 8).map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          {uniqueCategories.length > 8 && (
            <div className="category-dropdown">
              <button className="category-more">More +</button>
              <div className="dropdown-content">
                {uniqueCategories.slice(8).map((category) => (
                  <button
                    key={category}
                    className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="blog-posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <div className="post-categories">
                  {post.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="category-tag"
                      onClick={() => setSelectedCategory(category)}
                      style={{ cursor: 'pointer' }}
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="no-posts">
            <div className="no-posts-icon">🔍</div>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;