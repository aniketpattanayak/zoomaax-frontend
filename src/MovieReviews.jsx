import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
 
const MovieReviews = () => {
  const [movieArticles, setMovieArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await fetch('https://zoomaax-backend.onrender.com/api/articles');
        const data = await response.json();

        // Filter articles by 'Movie Reviews' category
        const movieData = data.filter(
          (article) => article.category === "Movie Reviews"
        );

        setMovieArticles(movieData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Movie Reviews</h1>
      <p className="text-gray-600 text-center mb-8">
        Explore our latest movie reviews and articles.
      </p>

      {/* Check if data is still loading */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        // Display the list of Movie Reviews articles
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movieArticles.length > 0 ? (
            movieArticles.map((article) => (
              <BlogCard key={article.id} {...article} />
            ))
          ) : (
            <p className="text-center text-gray-600">
              No movie reviews available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
