import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description, image, category }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">
          {/* Pass the title in the URL */}
          <Link to={`/article/${title}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-400 italic">{category}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLike}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={liked ? "red" : ""} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-gray-600">{likes} Likes</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="https://img.icons8.com/ios-filled/24/comments.png" alt="Comments" className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">10 Comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://img.icons8.com/ios-filled/24/visible.png" alt="Views" className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">120 Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
