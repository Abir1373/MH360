import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const Faqs = [
    {
      q: "What types of services does MH360 specialize in?",
      a: "We provide comprehensive business solutions including Digital Marketing Consultancy, Branding & Design, Event Management, HR Consultancy, Talent Acquisition, and Payroll Compliance.",
    },
    {
      q: "How long does it take to get a response after submitting the contact form?",
      a: "Our team reviews all inquiries promptly. You can expect a personalized response from one of our specialists within 24 business hours.",
    },
    {
      q: "Can I schedule a consultation outside of your standard business hours?",
      a: "While our standard hours are Saturday to Thursday from 9:00 AM to 6:00 PM, we can arrange custom meeting times for global clients depending on project urgency.",
    },
    {
      q: "Do you offer tailored packages for startups and small businesses?",
      a: "Yes. We analyze your unique goals and challenges to craft personalized strategies that align with your budget while driving meaningful, scalable growth.",
    },
    {
      q: "Where is MH360 located, and do you work with international clients?",
      a: "We are proudly based in Sylhet, Bangladesh, but we operate globally. Our digital infrastructure allows us to seamlessly collaborate with businesses all over the world.",
    },
  ];

  return (
    <section className="py-20 px-[6%] bg-[#F4F6FB] w-full" data-aos="fade-left">
      <div className="max-w-3xl mx-auto">
        {/* HEADER SECTION */}
        <div
          data-animid="faq-head"
          className="text-center mb-12 flex flex-col items-center"
        >
          <p className="text-xs font-bold tracking-[0.18em] text-orange-900 uppercase mb-2">
            Quick Answers
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-orange-900 rounded-full" />
        </div>

        {/* ACCORDION ITEMS LOOP */}
        {Faqs.map((item, i) => {
          const isOpen = openFaq === i;

          return (
            <div
              key={i}
              data-animid={`faq-${i}`}
              className="anim-fadeUp mb-4 w-full"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* TRIGGER BUTTON */}
              <div
                onClick={() => setOpenFaq(isOpen ? null : i)}
                className={`flex justify-between items-center bg-white px-6 py-5 cursor-pointer border border-gray-100 transition-all duration-300
                  ${isOpen ? "rounded-t-2xl border-b-transparent shadow-sm" : "rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200"}`}
              >
                <span
                  className={`font-bold text-base transition-colors duration-300 ${isOpen ? "text-orange-900" : "text-gray-800"}`}
                >
                  {item.q}
                </span>

                {/* ROTATING PLUS ICON */}
                <span
                  className={`text-sm p-2 rounded-full transition-all duration-300 
                    ${isOpen ? "bg-orange-900 text-white rotate-45" : "bg-orange-50 text-orange-900 group-hover:bg-orange-900 group-hover:text-white"}`}
                >
                  <FaPlus />
                </span>
              </div>

              {/* CONTENT PANEL */}
              {isOpen && (
                <div className="bg-white rounded-b-2xl px-6 pb-6 pt-2 border border-t-0 border-gray-100 shadow-sm animate-fadeIn">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
