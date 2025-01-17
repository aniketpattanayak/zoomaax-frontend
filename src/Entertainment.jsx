import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
 
const Entertainment = () => {
  const [entertainmentArticles, setEntertainmentArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchEntertainment = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/articles`);
        const data = await response.json();

        // Filter articles by 'Entertainment' category
        const entertainmentData = data.filter(
          (article) => article.category === "Entertainment"
        );

        setEntertainmentArticles(entertainmentData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching entertainment articles:", error);
        setLoading(false);
      }
    };

    fetchEntertainment();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Entertainment</h1>
      <p className="text-gray-600 text-center mb-8">
        Explore our latest blogs and articles.
      </p>

      {/* Check if data is still loading */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        // Display the list of Entertainment articles
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entertainmentArticles.length > 0 ? (
            entertainmentArticles.map((article) => (
              <BlogCard key={article.id} {...article} />
            ))
          ) : (
            <p className="text-center text-gray-600">
              No entertainment articles available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Entertainment;
