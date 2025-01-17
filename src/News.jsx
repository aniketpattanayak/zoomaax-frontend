import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
 
const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://zoomaax-backend.onrender.com/api/articles');
        const data = await response.json();

        // Filter articles by 'News' category
        const newsData = data.filter((article) => article.category === "News");

        setNewsArticles(newsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news articles:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">News</h1>
      <p className="text-gray-600 text-center mb-8">
        Explore our latest blogs and articles.
      </p>

      {/* Check if data is still loading */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        // Display the list of News articles
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
          {newsArticles.length > 0 ? (
            newsArticles.map((article) => (
              <BlogCard key={article.id} {...article} />
            ))
          ) : (
            <p className="text-center text-gray-600">No news articles available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default News;
