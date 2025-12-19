import React from "react";
import { Quote, BookOpen, Mail } from "lucide-react";
import { Phone, MapPin} from "lucide-react";
import { FaMedium, FaLinkedin, FaInstagram, FaWordpress } from "react-icons/fa";

const Home = () => {
  return (
    <main className="bg-neutral-950 text-gray-100 w-full">
      {/* Hero */}

      <section className="h-120 flex items-center justify-center text-center px-6 w-full">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Writing, a form of
            <span className="block bg-clip-text text-transparent bg-[#f2c311]">
              Expression
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            A creative writer sharing stories, poetry, and reflections that
            explore faith, emotion, and the human experience.
          </p>
          <a
            href="/works"
            className="inline-block px-8 py-3 rounded-full border border-[#f2c311] bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] transition"
          >
            Explore My Works
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m a passionate creative writer crafting meaningful stories,
            reflective essays, and poetic expressions that resonate deeply with
            readers across cultures.
          </p>
        </div>

        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <Quote className="text-[#f2c311] mb-4" />
          <p className="italic text-gray-400">
            “Words have the power to heal, challenge, and transform.”
          </p>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 px-6 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Featured Works</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Why We Yawn","Silent Prayers", "Echoes of Faith"].map(
              (title, index) => (
                <div
                  key={index}
                  className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl"
                >
                  <BookOpen className="text-[#f2c311] mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">
                    A short preview of this written piece to spark interest.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-8">
          Available for collaborations, publications, and commissioned writing.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 border border-[#f2c311] bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] transition"
        >
          <Mail size={18} /> Contact Me
        </a>
      </section>
    </main>
  );
};

export default Home;
