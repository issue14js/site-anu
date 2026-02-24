import React from 'react';
import { motion } from 'framer-motion';
import "./styles/style.css";
import img1 from "./assets/IMG-20260224-WA0007.jpg";
import img2 from "./assets/IMG-20260224-WA0001.jpg";
import img3 from "./assets/IMG-20260224-WA0002.jpg";
import img4 from "./assets/20260224_132344.png";
import img5 from "./assets/IMG-20260224-WA0011.jpg";
import img6 from "./assets/IMG-20260224-WA0005.jpg";


const artworks = [
  { id: 1, title: "Mithila Tradition", category: "Traditional", color: `${img1}` },
  { id: 2, title: "Classrom", category: "Education", color: `${img2}` },
  { id: 3, title: "General Painting", category: "Painting", color: `${img3}` },
  { id: 4, title: "D.M. Office Mural", category: "Wall Art", color: `${img4}` },
  { id: 5, title: "Student", category: "Learning", color: `${img5}` },
  { id: 6, title: "New Batch", category: "Education", color: `${img6}` },
];
<img src="./" alt="" />
const Gallery = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-orange-800 font-bold mb-4">Works & Cirtificates</h2>
          <p className="text-gray-600">A glimpse into the collection of 1,000+ creations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`h-80 ${art.color} rounded-xl shadow-md overflow-hidden relative group cursor-pointer`}
            >
              <img src={art.color} alt={art.title} className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-bold">{art.title}</h3>
                <p className="text-gray-200 text-sm">{art.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">

        </div>
      </div>
    </div>
  );
};

export default Gallery;     