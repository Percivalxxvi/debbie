import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {}; // get post from location state

  if (!post) {
    return (
      <main className="bg-neutral-950 min-h-screen text-gray-100 select-none flex items-center justify-center">
        <p className="text-gray-400">Post not found or no data passed.</p>
      </main>
    );
  }

  return (
    <main className="bg-neutral-950 min-h-screen text-gray-100 select-none">
      <Navbar page="works" />

      <div className="max-w-3xl mx-auto py-20 px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-[#f2c311] hover:underline"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400">{post.body}</p>
      </div>
    </main>
  );
};

export default PostDetails;
