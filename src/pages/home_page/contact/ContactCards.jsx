import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactCards = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-6 w-full px-4 lg:px-0">
      {/* Location Card */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="group flex-1 p-8 rounded-2xl bg-white shadow-sm border border-gray-100 
        transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200"
      >
        <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange-900">
          <FaMapMarkerAlt className="text-2xl text-orange-900 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-gray-800 tracking-tight">
          Location
        </h3>

        <p className="font-semibold text-lg text-orange-900">
          Sylhet, Bangladesh
        </p>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          Based in Sylhet, we provide services globally with a focus on quality
          and trust.
        </p>
      </div>

      {/* Phone Card */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="group flex-1 p-8 rounded-2xl bg-white shadow-sm border border-gray-100 
        transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200"
      >
        <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange-900">
          <FaPhoneAlt className="text-xl text-orange-900 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-gray-800 tracking-tight">
          Phone
        </h3>

        <p className="font-semibold text-lg text-orange-900">
          +880 1234 567890
        </p>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          Call us anytime for quick support and project discussions.
        </p>
      </div>

      {/* Email Card */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="group flex-1 p-8 rounded-2xl bg-white shadow-sm border border-gray-100 
        transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200"
      >
        <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange-900">
          <FaEnvelope className="text-2xl text-orange-900 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-gray-800 tracking-tight">
          Email
        </h3>

        <p className="font-semibold text-lg text-orange-900">
          info@example.com
        </p>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          We usually respond within 24 hours. Feel free to reach out.
        </p>
      </div>
    </div>
  );
};

export default ContactCards;
