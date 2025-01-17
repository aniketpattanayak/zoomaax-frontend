import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { title } = useParams(); // Extract title from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch all articles
        const response = await fetch("http://localhost:3000/api/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();

        // Find the matching article by comparing normalized titles
        const matchingArticle = data.find(
          (item) =>
            item.title.toLowerCase().trim() === decodeURIComponent(title).toLowerCase().trim()
        );

        if (matchingArticle) {
          setArticle(matchingArticle);
        } else {
          throw new Error("Article not found");
        }
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchArticle();
  }, [title]);

  if (loading) {
    return <div className="container mx-auto py-10 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-10 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">{article.title}</h1>
      <p className="text-gray-600 text-center mb-4">{article.description}</p>

      {/* Wrapper to keep image and likes container the same width */}
      <div className="flex justify-center flex-col items-center mb-4">
        {/* Centered Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full max-w-lg h-56 object-cover rounded-lg mb-4" // Increased width to max-w-lg and adjusted height
        />
        
        {/* Like container */}
        <div className="flex justify-center items-center space-x-4 w-full max-w-lg bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{article.likes} Likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://img.icons8.com/ios-filled/24/comments.png"
              alt="Comments"
              className="w-5 h-5"
            />
            <span>{article.comments} Comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://img.icons8.com/ios-filled/24/visible.png"
              alt="Views"
              className="w-5 h-5"
            />
            <span>{article.views} Views</span>
          </div>
        </div>
      </div>

      <div className="text-gray-800 mb-4">{article.fullContent}</div>
    </div>
  );
};

export default ArticleDetail;
