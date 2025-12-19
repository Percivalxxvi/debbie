import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FaMedium, FaLinkedin, FaInstagram, FaWordpress } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-neutral-950 text-gray-100 w-full">
      {/* Hero */}
      <section className="h-64 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Get in
            <span className="block bg-clip-text text-transparent bg-[#f2c311]">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Reach out for collaborations, commissions, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center">
          <Mail className="text-[#f2c311] mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-400">hello@olamifeng.com</p>
        </div>
        <div className="flex flex-col items-center bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center">
          <Phone className="text-[#f2c311] mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-400">+234 800 123 4567</p>
        </div>
        <div className="flex flex-col items-center bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center">
          <MapPin className="text-[#f2c311] mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-400">Lagos, Nigeria</p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center h-80 bg-neutral-900">
        <h1 className="text-3xl font-bold text-center">Socials</h1>
        <div className="lg:flex lg:flex-wrap lg:p-6 flex flex-wrap items-center justify-center h-fit w-full gap-5">
          <a
            className="h-15 w-35 bg-[#f2c311]  hover:bg-black hover:border hover:text-[#f2c311] font-semibold text-xl rounded-xl text-center flex justify-center items-center gap-1 py-2"
            href="https://medium.com/@olamifeng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />
            Medium
          </a>
          <a
            className="h-15 w-35 bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] font-semibold text-xl rounded-xl text-center flex justify-center items-center gap-1 py-2"
            href="https://olamifeng.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWordpress />
            Wordpress
          </a>
          <a
            className="h-15 w-35 bg-[#f2c311]  hover:bg-black hover:border hover:text-[#f2c311] font-semibold text-xl rounded-xl text-center flex justify-center items-center gap-1 py-2"
            href="https://www.linkedin.com/company/olamifeng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            Linkedin
          </a>
          <a
            className="h-15 w-35 bg-[#f2c311]  hover:bg-black hover:border hover:text-[#f2c311] font-semibold text-xl rounded-xl text-center flex justify-center items-center gap-1 py-2"
            href="https://www.linkedin.com/company/olamifeng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Send a Message</h2>
        <form className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 space-y-6">
          <div>
            <label className="block text-gray-400 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c311]"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c311]"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="8"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c311]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#f2c311] border-[#f2c311] rounded-full hover:bg-black hover:border hover:text-[#f2c311] cursor-pointer transition"
          >
            <Mail size={18} /> Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
