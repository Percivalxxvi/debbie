import React from "react";
import { Quote, BookOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../utils/motionVariants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  return (
    <main className="bg-neutral-950 text-gray-100 w-full select-none">
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

      {/* Featured Works */}
      <motion.section
        initial="hidden"
        whileInView="visible"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Why We Yawn", "Silent Prayers", "Echoes of Faith"].map(
              (title, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl transition"
                >
                  <BookOpen className="text-[#f2c311] mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">
                    A short preview of this written piece to spark interest.
                  </p>
                </motion.div>
              )
            )}
          </div>
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
      {/* Footer */}
      <footer className="flex items-center justify-between bg-[#f2c311] text-black py-4 px-6 text-center font-semibold text-sm">
        © {new Date().getFullYear()} Olamifeng · Nigeria · All Rights Reserved
        <h1 className="font-light">
          Powered by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://greylinex.vercel.app/"
            className="font-bold"
          >
            AOD Interactive
          </a>{" "}
        </h1>
      </footer>
    </main>
  );
};

export default Home;
