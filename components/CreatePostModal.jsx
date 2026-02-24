import React, { useState } from "react";

const CreatePostModal = ({ refreshPosts }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://olamifengbackend3.onrender.com/create_post";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      if (res.ok) {
        setTitle("");
        setBody("");
        setOpen(false);
        refreshPosts();
      } else {
        alert("Failed to create post");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-[#f2c311] text-black rounded-full hover:bg-black hover:text-[#f2c311] cursor-pointer"
      >
        Create New Post
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-neutral-900 p-6 rounded-xl w-150">
            <h2 className="text-xl font-bold mb-4 text-white">New Post</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 rounded border border-gray-600 bg-neutral-800 text-white focus:outline-none"
              />

              <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                className="w-full h-80 px-3 py-2 rounded border border-gray-600 bg-neutral-800 text-white focus:outline-none"
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  disabled={loading}
                  className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-3 py-1 rounded flex items-center gap-2 transition ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#f2c311] text-black hover:bg-black hover:text-[#f2c311]"
                  }`}
                >
                  {loading && (
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  )}
                  {loading ? "Posting..." : "Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePostModal;
