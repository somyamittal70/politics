import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
export default function ContactSection() {
  return (
    <section className="bg-[#F7F2E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-[#FC8814] text-sm font-semibold">
            Contact Us
          </p>

          <h2
            className="text-5xl md:text-6xl text-[#1A1A1A] mt-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's Connect
          </h2>

          <div className="w-20 h-[3px] bg-[#FC8814] mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl"
          >
            <h3
              className="text-3xl mb-8 text-[#1A1A1A]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Write To Us
            </h3>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 rounded-xl border border-[#FC8814]/20 px-4 outline-none focus:border-[#FC8814]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-14 rounded-xl border border-[#FC8814]/20 px-4 outline-none focus:border-[#FC8814]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-14 rounded-xl border border-[#FC8814]/20 px-4 outline-none focus:border-[#FC8814]"
                />

                <select className="w-full h-14 rounded-xl border border-[#FC8814]/20 px-4 outline-none focus:border-[#FC8814]">
                  <option>Select Location</option>
                  <option>Delhi</option>
                  <option>Gujarat</option>
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  <option>Rajasthan</option>
                </select>
              </div>

              <select className="w-full h-14 rounded-xl border border-[#FC8814]/20 px-4 outline-none focus:border-[#FC8814]">
                <option>Select Subject</option>
                <option>General Inquiry</option>
                <option>Campaign Support</option>
                <option>Media Request</option>
                <option>Volunteer Registration</option>
                <option>Feedback</option>
              </select>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-[#FC8814]/20 p-4 outline-none resize-none focus:border-[#FC8814]"
              />

              <button
                type="submit"
                className="w-full bg-[#FC8814] hover:bg-[#FC8814] text-white h-14  font-semibold tracking-wide transition-all duration-300"
              >
                SUBMIT MESSAGE
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* MAP */}
            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px]"
                loading="lazy"
              />
            </div>

            {/* INFO CARD */}
            <div className="bg-white rounded-[32px] p-8 shadow-xl">
              <h3
                className="text-3xl mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-[#FC8814] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#FC8814]">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      Ministry of Home Affairs, North Block, New Delhi, India -
                      110001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#FC8814]" />
                  <div>
                    <h4 className="font-semibold text-[#FC8814]">Phone</h4>
                    <p className="text-gray-600">+91 9768047680</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#FC8814]" />
                  <div>
                    <h4 className="font-semibold text-[#FC8814]">Email</h4>
                    <p className="text-gray-600">ssinghdham@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-[#FC8814] mb-4">
                  Follow Us
                </h4>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#FC8814] text-white flex items-center justify-center hover:bg-[#FC8814] hover:scale-110 transition-all duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#FC8814] text-white flex items-center justify-center hover:bg-[#FC8814] hover:scale-110 transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#FC8814] text-white flex items-center justify-center hover:bg-[#FC8814] hover:scale-110 transition-all duration-300"
                  >
                    <FaXTwitter size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#FC8814] text-white flex items-center justify-center hover:bg-[#FC8814] hover:scale-110 transition-all duration-300"
                  >
                    <FaYoutube size={18} />
                  </a>

                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
