import { motion } from "framer-motion";
import heroImage from "../../../assets/hero_bg.png";
import { useModal } from "../../../context-providers/useModal";
import { HashLink } from "react-router-hash-link";
import { FiUsers, FiAward, FiShield, FiTrendingUp } from "react-icons/fi";

const Hero = ({ id }) => {
  const { modalOpen, setModalOpen } = useModal();

  const onGetStarted = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div
      id={id}
      data-theme="light"
      style={{ colorScheme: "light" }}
      className="py-12 mt-9 bg-white text-black"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <h5 className="tracking-wide text-orange-500">
              360° BUSINESS GROWTH PARTNER
            </h5>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black">
              Marketing & <br />
              <span className="text-orange-700">Human Resources</span>
              <br />
              <span className="text-black">Solutions</span>
            </h1>

            <p className="my-6 text-xl leading-relaxed text-gray-600">
              MH360 is a leading business growth partner based in Sylhet,
              dedicated to helping organizations reach their full potential. We
              specialize in blending innovative digital marketing with strategic
              HR solutions to drive sustainable success. Through creative
              storytelling, data-driven decision-making, and effective people
              management, we empower brands to grow stronger, connect better
              with their audience, and build high-performing teams that last.
            </p>

            <div className="flex gap-3">
              <HashLink to="#service" className="w-1/2">
                <button
                  type="button"
                  className="w-full h-12 text-lg text-white bg-orange-700 rounded-2xl hover:bg-orange-800 transition"
                >
                  Explore Services
                </button>
              </HashLink>

              <button
                onClick={onGetStarted}
                type="button"
                className="w-1/2 h-12 text-lg bg-white text-blue-900 border border-blue-900 rounded-2xl hover:bg-orange-700 hover:text-white transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center">
            {/* Floating Card 1 */}
            <div className="absolute top-14 right-0 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl z-20">
              <p className="text-xs text-gray-400">DIGITAL MARKETING</p>
              <h4 className="font-bold">Strategy & Growth</h4>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-20 left-0 bg-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-20">
              <p className="text-xs">HR CONSULTANCY</p>
              <h4 className="font-bold">People & Culture</h4>
            </div>

            {/* HERO IMAGE */}
            <motion.img
              src={heroImage}
              alt="Hero illustration"
              className="w-[480px] relative z-10"
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Decorative Circles */}
            <div className="absolute w-[550px] h-[550px] border border-black/10 rounded-full" />
            <div className="absolute top-10 right-10 w-[280px] h-[280px] border border-black/10 rounded-full" />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 text-2xl transition group-hover:rotate-6">
              <FiUsers />
            </div>

            <h4 className="mb-3 text-2xl font-bold text-black">Satisfied</h4>

            <p className="text-gray-600 leading-relaxed">
              International clients who trust and grow with our solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1300"
            className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 text-2xl transition group-hover:rotate-6">
              <FiAward />
            </div>

            <h4 className="mb-3 text-2xl font-bold text-black">Experience</h4>

            <p className="text-gray-600 leading-relaxed">
              Years of expertise delivering modern digital experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1400"
            className="group rounded-3xl border border-green-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 text-2xl transition group-hover:rotate-6">
              <FiShield />
            </div>

            <h4 className="mb-3 text-2xl font-bold text-black">Trust</h4>

            <p className="text-gray-600 leading-relaxed">
              Building confidence through quality and reliable service.
            </p>
          </div>

          {/* Card 4 */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="group rounded-3xl border border-purple-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 text-2xl transition group-hover:rotate-6">
              <FiTrendingUp />
            </div>

            <h4 className="mb-3 text-2xl font-bold text-black">Strategy</h4>

            <p className="text-gray-600 leading-relaxed">
              Innovative planning that helps businesses reach the next level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
