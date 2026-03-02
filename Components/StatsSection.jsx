"use client";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: "50+", label: "Total Projects" },
    { number: "25+", label: "Successful Workshops" },
    { number: "20+", label: "Total Events" },
  ];

  return (
    <div className="w-full py-24 bg-black flex justify-center">
      <div className="w-[90%] sm:w-[70%] grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#0f0f0f] border border-[#27272a] rounded-2xl p-10 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white">
              {stat.number}
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}