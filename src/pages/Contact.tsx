import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Contact Us</h1>
      <form
        action="https://formspree.io/f/xblkzewz"
        method="POST"
        className="flex flex-col gap-4 bg-white text-navy p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="p-3 border rounded-md"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message..."
          className="p-3 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Send Message
        </button>
        <input type="hidden" name="_subject" value="New message from Raaganjali website!" />
      </form>

      <div className="mt-8 text-lg">
        <p>📧 <strong>Email:</strong> <a href="mailto:raaganjali.finland@gmail.com" className="text-orange-400">raaganjali.finland@gmail.com</a></p>
        <p>📞 <strong>Srikanth Aripirala:</strong> +358 406 720 695</p>
        <p>📞 <strong>Ravichand Velpula:</strong> +358 400 770 421</p>
      </div>
    </motion.section>
  );
};

export default Contact;
