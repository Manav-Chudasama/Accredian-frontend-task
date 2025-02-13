import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "./animations/Motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courses = [
  {
    image: "images/web_dev.jpg",
    category: "Development",
    title: "Web Development Bootcamp",
    description:
      "Learn full-stack web development from scratch with modern technologies",
    price: "$99",
    duration: "12 weeks",
    instructor: {
      name: "John Smith",
      avatar: "/avatars/instructor-1.jpg",
      role: "Senior Developer",
    },
    stats: {
      students: "1.5k+",
      rating: 4.8,
      reviews: 350,
    },
  },
  {
    image: "images/data_sci.jpg",
    category: "Data Science",
    title: "Data Science Fundamentals",
    description: "Master the basics of data science and analytics with Python",
    price: "$89",
    duration: "8 weeks",
    instructor: {
      name: "Sarah Johnson",
      avatar: "/avatars/instructor-2.jpg",
      role: "Data Scientist",
    },
    stats: {
      students: "1.2k+",
      rating: 4.9,
      reviews: 280,
    },
  },
  {
    image: "images/uiux.jpg",
    category: "Design",
    title: "UI/UX Design Masterclass",
    description:
      "Create beautiful and functional user interfaces with modern design principles",
    price: "$79",
    duration: "6 weeks",
    instructor: {
      name: "Mike Chen",
      avatar: "/avatars/instructor-3.jpg",
      role: "UX Designer",
    },
    stats: {
      students: "950+",
      rating: 4.7,
      reviews: 220,
    },
  },
  {
    image: "images/digital_marketing.jpg",
    category: "Marketing",
    title: "Digital Marketing Strategy",
    description:
      "Learn modern digital marketing strategies and growth techniques",
    price: "$69",
    duration: "4 weeks",
    instructor: {
      name: "Emily Rodriguez",
      avatar: "/avatars/instructor-4.jpg",
      role: "Marketing Expert",
    },
    stats: {
      students: "800+",
      rating: 4.6,
      reviews: 190,
    },
  },
  {
    image: "images/mobile_app.jpg",
    category: "Development",
    title: "Mobile App Development",
    description: "Build iOS and Android apps with React Native",
    price: "$89",
    duration: "10 weeks",
    instructor: {
      name: "David Kim",
      avatar: "/avatars/instructor-5.jpg",
      role: "Mobile Developer",
    },
    stats: {
      students: "700+",
      rating: 4.7,
      reviews: 165,
    },
  },
];

const PopularCourses = () => {
  return (
    <section id="popular-courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Featured Courses
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Courses
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular courses that your friends will love
            </p>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <FadeIn delay={0.2 * (index % 3)}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-[500px] flex flex-col m-2 overflow-hidden group"
                  >
                    {/* Course Image with Overlay */}
                    <motion.div
                      className="relative h-48 flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="object-cover w-full h-full rounded-t-2xl"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end justify-between p-4"
                      >
                        <span className="text-white font-medium">
                          View Course Details
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                        {course.category}
                      </span>
                    </motion.div>

                    {/* Course Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex-grow">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300"
                        >
                          {course.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="text-gray-600 text-sm mb-4 line-clamp-2"
                        >
                          {course.description}
                        </motion.p>

                        {/* Instructor Info */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="flex items-center mb-4"
                        >
                          <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-100"
                          />
                          <div className="ml-3">
                            <div className="font-medium line-clamp-1">
                              {course.instructor.name}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-1">
                              {course.instructor.role}
                            </div>
                          </div>
                        </motion.div>

                        {/* Course Stats */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex items-center justify-between text-sm text-gray-500 mb-4"
                        >
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {course.stats.rating} ({course.stats.reviews}{" "}
                            reviews)
                          </div>
                          <div>{course.stats.students} students</div>
                        </motion.div>
                      </div>

                      {/* Price and Duration */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-between pt-4 border-t"
                      >
                        <div className="text-2xl font-bold text-purple-600">
                          {course.price}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {course.duration}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeIn>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
