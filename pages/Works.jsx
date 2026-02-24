// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import CreatePostModal from "../components/CreatePostModal";
// import { useUser } from "../context/UserContext";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const ADMIN_EMAIL = "joshuaoladeji12@gmail.com";

// const Works = () => {
//   const { user: currentUser } = useUser(); // 🔥 get logged-in user from context
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   // Fetch all posts
//   const fetchPosts = async () => {
//     try {
//       const res = await fetch(
//         "https://olamifengbackend3.onrender.com/all_posts",
//       );
//       const data = await res.json();
//       if (res.ok) setPosts(data.posts.reverse()); // newest first
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete a post
//   const deletePost = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;

//     try {
//       const res = await fetch(
//         `https://olamifengbackend3.onrender.com/delete_post/${id}`,
//         {
//           method: "DELETE",
//         },
//       );
//       const data = await res.json();

//       if (res.ok) {
//         alert("Post deleted successfully");
//         fetchPosts(); // refresh posts
//       } else {
//         alert("Failed to delete post: " + data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <main className="bg-neutral-950 min-h-screen text-gray-100 select-none">
//       <Navbar page="works" />

//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-6 text-center">Written Works</h1>

//         {/* 🔒 Admin-only create post */}
//         {currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() && (
//           <div className="flex justify-center mb-10">
//             <CreatePostModal refreshPosts={fetchPosts} />
//           </div>
//         )}

//         {loading ? (
//           <p className="text-center text-gray-400">Loading posts...</p>
//         ) : posts.length === 0 ? (
//           <p className="text-center text-gray-400">No posts available yet.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {posts.map((post) => (
//               <motion.div
//                 key={post._id}
//                 className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col justify-between"
//                 initial={{ opacity: 0, y: 20 }} // start slightly down and invisible
//                 animate={{ opacity: 1, y: 0 }} // animate to visible and correct position
//                 exit={{ opacity: 0, y: -20 }} // animate out when removed
//                 transition={{ duration: 0.4 }} // smooth timing
//                 // whileHover={{ scale: 1.03 }} // subtle grow on hover
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                   <p className="text-gray-400 text-sm line-clamp-3">
//                     {post.body}
//                   </p>
//                 </div>

//                 <div className="mt-4 flex justify-between">
//                   <button
//                     onClick={() =>
//                       navigate("/postdetails", { state: { post } })
//                     }
//                     className="text-sm text-black px-2 py-1 bg-[#f2c311] border border-[#f2c311] rounded-full hover:bg-black hover:text-[#f2c311] cursor-pointer"
//                   >
//                     Read More
//                   </button>

//                   {/* 🔒 Admin-only delete */}
//                   {currentUser?.email?.toLowerCase() ===
//                     ADMIN_EMAIL.toLowerCase() && (
//                     <button
//                       onClick={() => deletePost(post._id)}
//                       className="text-sm text-white px-2 py-1 bg-red-600 rounded-full hover:bg-red-500"
//                     >
//                       Delete
//                     </button>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default Works;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreatePostModal from "../components/CreatePostModal";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "joshuaoladeji12@gmail.com";

const Works = () => {
  const { user: currentUser } = useUser(); // get logged-in user
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://olamifengbackend3.onrender.com/all_posts",
      );
      const data = await res.json();
      if (res.ok) setPosts(data.posts.reverse()); // newest first
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a post (admin only)
  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(
        `https://olamifengbackend3.onrender.com/delete_post/${id}`,
        { method: "DELETE" },
      );
      const data = await res.json();

      if (res.ok) {
        alert("Post deleted successfully");
        fetchPosts(); // refresh posts
      } else {
        alert("Failed to delete post: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // Toggle featured (admin only)
  const toggleFeatured = async (id, currentValue) => {
    try {
      const res = await fetch(
        `https://olamifengbackend3.onrender.com/toggle_featured/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ featured: !currentValue }),
        },
      );
      const data = await res.json();

      if (res.ok)
        fetchPosts(); // refresh posts after toggle
      else alert("Failed to update featured: " + data.message);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="bg-neutral-950 min-h-screen text-gray-100 select-none">
      <Navbar page="works" />

      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Written Works</h1>

        {/* Admin-only create post */}
        {currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() && (
          <div className="flex justify-center mb-10">
            <CreatePostModal refreshPosts={fetchPosts} />
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-400">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-400">No posts available yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <motion.div
                key={post._id}
                className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.body}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() =>
                      navigate("/postdetails", { state: { post } })
                    }
                    className="text-sm text-black px-2 py-1 bg-[#f2c311] border border-[#f2c311] rounded-full hover:bg-black hover:text-[#f2c311] cursor-pointer"
                  >
                    Read More
                  </button>

                  {/* Admin-only actions */}
                  {currentUser?.email?.toLowerCase() ===
                    ADMIN_EMAIL.toLowerCase() && (
                    <div className="flex gap-2">
                      {/* Delete button */}
                      <button
                        onClick={() => deletePost(post._id)}
                        className="text-sm text-white px-2 py-1 bg-red-600 rounded-full hover:bg-red-500"
                      >
                        Delete
                      </button>

                      {/* Featured toggle button */}
                      <button
                        onClick={() => toggleFeatured(post._id, post.featured)}
                        className={`text-sm px-2 py-1 rounded-full ${
                          post.featured
                            ? "bg-yellow-500 text-black"
                            : "bg-gray-700 text-white"
                        }`}
                      >
                        {post.featured ? "Unfeature" : "Feature"}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Works;
