import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import BlogCard from "./BlogCard";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [latestNews, setLatestNews] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API 
  const fetchData = async () => {
    try {
      const response = fetch('https://zoomaax-backend.onrender.com/api/articles');
      const data = await response.json();

      console.log("Fetched Data:", data); // Debugging the fetched data

      if (Array.isArray(data)) {
        // Categorize articles based on their category
        const latestNewsData = data.filter(
          (article) => article.category === "News"
        );
        const entertainmentData = data.filter(
          (article) => article.category === "Entertainment"
        );
        const moviesData = data.filter(
          (article) => article.category === "Movie Reviews"
        );

        // Limit each category to only 3 articles
        const latestNewsLimited = latestNewsData.slice(0, 3);
        const entertainmentLimited = entertainmentData.slice(0, 3);
        const moviesLimited = moviesData.slice(0, 3);

        console.log("Latest News (Limited to 3):", latestNewsLimited);  // Debug
        console.log("Entertainment (Limited to 3):", entertainmentLimited);  // Debug
        console.log("Movies (Limited to 3):", moviesLimited);  // Debug

        // Set the categorized data into respective states
        setLatestNews(latestNewsLimited);
        setEntertainment(entertainmentLimited);
        setMovies(moviesLimited);
      } else {
        console.error("Data is not in the expected format:", data);
      }

      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  // Effect to handle fetching of data when component mounts
  useEffect(() => {
    fetchData();

    // Scroll event to toggle back to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Hero />
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <>
          {/* Latest News Section */}
          <section className="py-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-4">News</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.length > 0 ? (
                latestNews.map((article) => {
                  console.log("Rendering Latest News Article:", article);
                  return <BlogCard key={article.id} {...article} />;
                })
              ) : (
                <p className="text-center text-gray-600">
                  No latest news available
                </p>
              )}
            </div>
          </section>

          {/* Entertainment Section */}
          <section className="py-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-4">
              Entertainment
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {entertainment.length > 0 ? (
                entertainment.map((article) => {
                  console.log("Rendering Entertainment Article:", article);
                  return <BlogCard key={article.id} {...article} />;
                })
              ) : (
                <p className="text-center text-gray-600">
                  No entertainment articles available
                </p>
              )}
            </div>
          </section>

          {/* Movie Reviews Section */}
          <section className="py-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-4">
              Movie Reviews
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {movies.length > 0 ? (
                movies.map((article) => {
                  console.log("Rendering Movie Article:", article);
                  return <BlogCard key={article.id} {...article} />;
                })
              ) : (
                <p className="text-center text-gray-600">
                  No movie reviews available
                </p>
              )}
            </div>
          </section>
        </>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
