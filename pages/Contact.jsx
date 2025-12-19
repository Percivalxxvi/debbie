import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaMedium, FaLinkedin, FaInstagram, FaWordpress } from "react-icons/fa";
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

const Contact = () => {
  return (
    <main className="bg-neutral-950 text-gray-100 w-full">
      {/* Hero */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="h-64 flex items-center justify-center text-center px-6"
      >
        <motion.div variants={staggerContainer} className="max-w-3xl">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Get in
            <span className="block bg-clip-text text-transparent bg-[#f2c311]">
              Touch
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Reach out for collaborations, commissions, or just to say hello.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {[
          { icon: Mail, title: "Email", text: "hello@olamifeng.com" },
          { icon: Phone, title: "Phone", text: "+234 800 123 4567" },
          { icon: MapPin, title: "Location", text: "Lagos, Nigeria" },
        ].map(({ icon: Icon, title, text }, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center transition"
          >
            <Icon className="text-[#f2c311] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Socials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center h-80 bg-neutral-900 gap-4"
      >
        <h1 className="text-3xl font-bold text-center">Socials</h1>

        <div className="flex flex-wrap items-center justify-center gap-5 w-full px-6">
          {[
            {
              icon: FaMedium,
              label: "Medium",
              link: "https://medium.com/@olamifeng",
            },
            {
              icon: FaWordpress,
              label: "Wordpress",
              link: "https://olamifeng.wordpress.com/",
            },
            {
              icon: FaLinkedin,
              label: "Linkedin",
              link: "https://www.linkedin.com/company/olamifeng/",
            },
            {
              icon: FaInstagram,
              label: "Instagram",
              link: "https://www.linkedin.com/company/olamifeng/",
            },
          ].map(({ icon: Icon, label, link }, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-15 w-35 bg-[#f2c311] hover:bg-black hover:border hover:text-[#f2c311] font-semibold text-xl rounded-xl flex justify-center items-center gap-1 py-2 transition"
            >
              <Icon />
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Send a Message</h2>

        <form className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 space-y-6">
          {["Name", "Email"].map((label, index) => (
            <div key={index}>
              <label className="block text-gray-400 mb-2">{label}</label>
              <input
                type={label === "Email" ? "email" : "text"}
                placeholder={`Your ${label}`}
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c311]"
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows="8"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c311]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#f2c311] border-[#f2c311] rounded-full hover:bg-black hover:border hover:text-[#f2c311] transition"
          >
            <Mail size={18} /> Send Message
          </motion.button>
        </form>
      </motion.section>
    </main>
  );
};

export default Contact;
