// src/components/FeaturedWorks.jsx
import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionVariants";

const FeaturedWorks = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeaturedPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://olamifengbackend3.onrender.com/all_posts",
      );
      const data = await res.json();
      if (res.ok) {
        // Filter featured posts (ensure boolean)
        const featured = data.posts.filter(
          (post) => post.featured === true || post.featured === "true",
        );
        setFeaturedPosts(featured);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-400">Loading featured works...</p>
    );
  if (featuredPosts.length === 0)
    return <p className="text-center text-gray-400">No featured works yet.</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredPosts.map((post) => (
        <motion.div
          key={post._id}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="relative p-6 bg-neutral-900 border border-neutral-800 rounded-xl transition"
        >
          {/* Featured badge */}
          <span className="absolute top-2 right-2 text-xs px-2 py-1 bg-yellow-500 text-black rounded-full font-semibold">
            Featured
          </span>

          <BookOpen className="text-[#f2c311] mb-3" />
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-3">
            {post.body.length > 100
              ? post.body.slice(0, 100) + "..."
              : post.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedWorks;
