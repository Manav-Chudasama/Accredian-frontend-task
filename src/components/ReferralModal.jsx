import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { referralService } from "../services/api";

const ReferralModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrer: {
      name: "",
      email: "",
    },
    referee: {
      name: "",
      email: "",
      course: "web-development",
    },
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const courses = [
    { id: "web-development", name: "Web Development Bootcamp" },
    { id: "data-science", name: "Data Science Fundamentals" },
    { id: "ui-ux", name: "UI/UX Design Masterclass" },
    { id: "mobile-dev", name: "Mobile App Development" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await referralService.createReferral(formData);
      setStatus({ loading: false, success: true, error: null });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          referrer: { name: "", email: "" },
          referee: { name: "", email: "", course: "web-development" },
        });
        setStatus({ loading: false, success: false, error: null });
        onClose();
      }, 2000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || "Failed to send referral",
      });
    }
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-xl max-w-xl w-full relative overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Refer a Friend</h3>
                <p className="text-white/80 text-sm mt-1">
                  Share the joy of learning
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm"
                >
                  {status.error}
                </motion.div>
              )}

              {status.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Referral Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Your friend will receive an email invitation shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Your Details */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                      Your Details
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name*"
                        value={formData.referrer.name}
                        onChange={(e) =>
                          handleInputChange("referrer", "name", e.target.value)
                        }
                        className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email*"
                        value={formData.referrer.email}
                        onChange={(e) =>
                          handleInputChange("referrer", "email", e.target.value)
                        }
                        className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Friend's Details */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                      Friend&apos;s Details
                    </h4>
                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Friend's Name*"
                        value={formData.referee.name}
                        onChange={(e) =>
                          handleInputChange("referee", "name", e.target.value)
                        }
                        className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Friend's Email*"
                        value={formData.referee.email}
                        onChange={(e) =>
                          handleInputChange("referee", "email", e.target.value)
                        }
                        className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <select
                        required
                        value={formData.referee.course}
                        onChange={(e) =>
                          handleInputChange("referee", "course", e.target.value)
                        }
                        className="w-full p-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full ${
                      status.loading
                        ? "bg-gray-400"
                        : "bg-gradient-to-r from-purple-600 to-blue-600"
                    } text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300 mt-6 flex items-center justify-center`}
                  >
                    {status.loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Invitation"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReferralModal;
