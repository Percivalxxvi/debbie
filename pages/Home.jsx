import React from "react";
import { Quote, BookOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../utils/motionVariants";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const navigate = useNavigate();

  // Fetch featured posts directly
  const fetchFeaturedPosts = async () => {
    setLoadingFeatured(true);
    try {
      const res = await fetch(
        "https://olamifengbackend3.onrender.com/all_posts",
      );
      const data = await res.json();
      if (res.ok) {
        const featured = data.posts.filter(
          (post) => post.featured === true || post.featured === "true",
        );
        setFeaturedPosts(featured);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingFeatured(false);
    }
  };

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);
  return (
    <main className="bg-neutral-950 text-gray-100 w-full select-none">
      <Navbar page="home" />
      {/* Hero */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="h-120 flex items-center justify-center text-center px-6 w-full"
      >
        <motion.div variants={staggerContainer} className="max-w-4xl">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Writing, a form of
            <span className="block bg-clip-text text-transparent bg-[#f2c311]">
              Expression
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-8">
            A creative writer sharing stories, poetry, and reflections that
            explore faith, emotion, and the human experience.
          </motion.p>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/works"
            className="inline-block px-8 py-3 rounded-full border border-[#f2c311] bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] transition"
          >
            Explore My Works
          </motion.a>
        </motion.div>
      </motion.section>

      {/* About */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m a passionate creative writer crafting meaningful stories,
            reflective essays, and poetic expressions that resonate deeply with
            readers across cultures.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-neutral-900 p-8 rounded-xl border border-neutral-800"
        >
          <Quote className="text-[#f2c311] mb-4" />
          <p className="italic text-gray-400">
            “Words have the power to heal, challenge, and transform.”
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate={featuredPosts.length > 0 ? "visible" : "hidden"} // animate after posts load
        viewport={{ once: true }}
        className="py-20 px-6 bg-neutral-900/50"
      >
        <motion.div
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
            Featured Works
          </motion.h2>

          {loadingFeatured ? (
            <p className="text-gray-400">Loading featured works...</p>
          ) : featuredPosts.length === 0 ? (
            <p className="text-gray-400">No featured works yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post._id}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  animate={featuredPosts.length > 0 ? "visible" : "hidden"} // animate after posts load
                  onClick={() => navigate("/postdetails", { state: { post } })}
                  className="relative p-6 bg-neutral-900 border border-neutral-800 rounded-xl transition cursor-pointer"
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
          )}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-8">
          Available for collaborations, publications, and commissioned writing.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 border border-[#f2c311] bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] transition"
        >
          <Mail size={18} /> Contact Me
        </motion.a>
      </motion.section>
    </main>
  );
};

export default Home;

// src/pages/Home.jsx
// import React from "react";
// import { Quote, Mail } from "lucide-react";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn } from "../utils/motionVariants";
// import Navbar from "../components/Navbar";
// import FeaturedWorks from "../components/FeaturedWorks";

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const Home = () => {
//   return (
//     <main className="bg-neutral-950 text-gray-100 w-full select-none">
//       <Navbar page="home" />

//       {/* Hero Section */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         animate="visible"
//         className="h-120 flex items-center justify-center text-center px-6 w-full"
//       >
//         <motion.div variants={staggerContainer} className="max-w-4xl">
//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-6xl font-extrabold mb-6"
//           >
//             Writing, a form of
//             <span className="block bg-clip-text text-transparent bg-[#f2c311]">
//               Expression
//             </span>
//           </motion.h1>
//           <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-8">
//             A creative writer sharing stories, poetry, and reflections that
//             explore faith, emotion, and the human experience.
//           </motion.p>
//           <motion.a
//             variants={fadeUp}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             href="/works"
//             className="inline-block px-8 py-3 rounded-full border border-[#f2c311] bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] transition"
//           >
//             Explore My Works
//           </motion.a>
//         </motion.div>
//       </motion.section>

//       {/* About Section */}
//       <motion.section
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
//       >
//         <motion.div variants={fadeUp}>
//           <h2 className="text-3xl font-bold mb-4">About Me</h2>
//           <p className="text-gray-400 leading-relaxed">
//             I’m a passionate creative writer crafting meaningful stories,
//             reflective essays, and poetic expressions that resonate deeply with
//             readers across cultures.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           className="bg-neutral-900 p-8 rounded-xl border border-neutral-800"
//         >
//           <Quote className="text-[#f2c311] mb-4" />
//           <p className="italic text-gray-400">
//             “Words have the power to heal, challenge, and transform.”
//           </p>
//         </motion.div>
//       </motion.section>

//       {/* Featured Works Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-20 px-6 bg-neutral-900/50"
//       >
//         <motion.div
//           variants={staggerContainer}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
//             Featured Works
//           </motion.h2>

//           {/* Render featured posts dynamically */}
//           <FeaturedWorks />
//         </motion.div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-20 text-center"
//       >
//         <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
//         <p className="text-gray-400 mb-8">
//           Available for collaborations, publications, and commissioned writing.
//         </p>
//         <motion.a
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.96 }}
//           href="/contact"
//           className="inline-flex items-center gap-2 px-8 py-3 border border-[#f2c311] bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] transition"
//         >
//           <Mail size={18} /> Contact Me
//         </motion.a>
//       </motion.section>
//     </main>
//   );
// };

// export default Home;
