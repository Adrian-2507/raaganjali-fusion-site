import { motion } from "framer-motion";

const images = [
  { src: "/images/Grp1.jpg", alt: "Group Photo 1" },
  { src: "/images/Grp2.jpg", alt: "Group Photo 2" },
  { src: "/images/Grp3.jpg", alt: "Group Photo 3" },
  { src: "/images/Grp4.jpg", alt: "Group Photo 4" },
  { src: "/images/Grp5.jpg", alt: "Group Photo 5" },
  { src: "/images/Group2.jpg", alt: "Performance 1" },
  { src: "/images/Group3.jpg", alt: "Performance 2" },
  { src: "/images/Lakshmi1.jpg", alt: "Lakshmi performing" },
  { src: "/images/soumya2.jpg", alt: "Soumya performing" },
  { src: "/images/Malai2.jpg", alt: "Malai performing" },
  { src: "/images/Satvika3.jpg", alt: "Satvika performing" },
  { src: "/images/Ravi1.jpg", alt: "Ravi performing" },
  // ➕ add more if needed
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-orange mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Gallery
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Moments from our musical journey
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white/5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
