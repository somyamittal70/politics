import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Phone, Mail, User, AlertCircle } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    } else if (formData.location.trim().length < 2) {
      newErrors.location = "Location must be at least 2 characters";
    }

    // Message validation
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (touched[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate single field
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log(formData);
    alert("Consultation Request Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
    setErrors({});
    setTouched({});

    onClose();
  };

  const isFormValid = Object.keys(errors).length === 0 && 
    formData.name && 
    formData.email && 
    formData.phone && 
    formData.location;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative bg-white w-full max-w-sm rounded-[20px] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-[#0D1B3E] p-4">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-white hover:text-[#C8972B] transition"
                >
                  <X size={20} />
                </button>

                <span className="uppercase tracking-[0.15em] text-[#C8972B] text-xs font-semibold">
                  Consultation
                </span>

                <h2
                  className="text-2xl text-white mt-1"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Let's Connect
                </h2>

                <p className="text-white/70 mt-1 text-xs">
                  Fill the form and we'll contact you.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="p-4 bg-[#F7F2E8]"
              >
                {/* Name */}
                <div className="mb-3">
                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-3 top-2.5 text-[#C8972B]"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Full Name"
                      className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg text-xs border-2 outline-none transition ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }`}
                    />
                  </div>
                  {errors.name && touched.name && (
                    <div className="flex items-center gap-1 mt-0.5 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-2.5 text-[#C8972B]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email Address"
                      className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg text-xs border-2 outline-none transition ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }`}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="flex items-center gap-1 mt-0.5 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <div className="relative">
                    <Phone
                      size={14}
                      className="absolute left-3 top-2.5 text-[#C8972B]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone Number"
                      className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg text-xs border-2 outline-none transition ${
                        errors.phone && touched.phone
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }`}
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="flex items-center gap-1 mt-0.5 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="mb-3">
                  <div className="relative">
                    <MapPin
                      size={14}
                      className="absolute left-3 top-2.5 text-[#C8972B]"
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Location"
                      className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg text-xs border-2 outline-none transition ${
                        errors.location && touched.location
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8972B]"
                      }`}
                    />
                  </div>
                  {errors.location && touched.location && (
                    <div className="flex items-center gap-1 mt-0.5 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      {errors.location}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="mb-3">
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Requirements (optional)"
                    className={`w-full bg-white px-3 py-2 rounded-lg text-xs border-2 outline-none transition resize-none ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#C8972B]"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <div className="flex items-center gap-1 mt-0.5 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`
                    w-full
                    py-2.5
                    rounded-lg
                    font-semibold
                    text-white
                    text-xs
                    transition-all
                    duration-300
                    ${
                      isFormValid
                        ? "bg-[#E8541A] hover:bg-[#C8972B] cursor-pointer"
                        : "bg-gray-400 cursor-not-allowed opacity-60"
                    }
                  `}
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}