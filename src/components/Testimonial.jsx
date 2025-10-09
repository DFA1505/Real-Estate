import React from "react";
import { testimonialsData } from "../assets/assets";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto dark:text-gray-400">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="grid grid-cols-1 gap-3  md:grid-cols-1 lg:grid-cols-4 ml-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt=""
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl text-gray-700 font-medium dark:text-white">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm dark:text-gray-400">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4 mt-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <FaStar key={index} className="text-yellow-600" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
