import {
  FaChartLine,
  FaPaintBrush,
  FaCalendarAlt,
  FaUsersCog,
  FaUserTie,
  FaGraduationCap,
  FaFileInvoiceDollar,
  FaArrowRight,
} from "react-icons/fa";

import services from "../../../assets/json files/services.json";
import { useModal } from "../../../context-providers/useModal";

const iconMap = {
  "Digital Marketing Consultancy": FaChartLine,
  "Branding & Design": FaPaintBrush,
  "Event Management": FaCalendarAlt,
  "HR Consultancy": FaUsersCog,
  "Recruitment & Talent Acquisition": FaUserTie,
  "Training & Development": FaGraduationCap,
  "Payroll & HR Compliance": FaFileInvoiceDollar,
};

const Service = ({ id }) => {
  const {  modalOpen,setModalOpen } = useModal();
    const onGetStarted = ({modalOpen,setModalOpen}) => {
      setModalOpen(!modalOpen);
      console.log(modalOpen);
    };
  return (
    <div id={id} className="flex flex-col gap-9">
      {/* item : 1 */}
      <section
        style={{
          padding: "80px 6% 100px",
          background:
            "linear-gradient(135deg,#080f2e 0%,#0f1a45 55%,#1a0838 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            top: -100,
            right: -80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(192,57,43,0.15),transparent 70%)",
            animation: "pulseGlow 5s infinite",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            className="anim-fadeUp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(192,57,43,.14)",
              border: "1px solid rgba(192,57,43,.4)",
              borderRadius: 30,
              padding: "7px 18px",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C0392B",
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: "#dde2f5",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.12em",
              }}
            >
              WHAT WE OFFER
            </span>
          </div>
          <h1
            className="anim-fadeUp"
            style={{
              animationDelay: "0.1s",
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2.4rem,5vw,3.8rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Our Core <span style={{ color: "#C0392B" }}>Services</span>
          </h1>
          <p
            className="anim-fadeUp"
            style={{
              animationDelay: "0.2s",
              color: "#a8b4d8",
              fontSize: 15.5,
              lineHeight: 1.82,
              maxWidth: 520,
              margin: "0 auto 36px",
            }}
          >
            A full suite of marketing and human resources solutions designed to
            accelerate every dimension of your business.
          </p>
          <div
            className="anim-fadeUp"
            style={{
              animationDelay: "0.3s",
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "linear-gradient(to bottom, transparent, #fff)",
          }}
        />
      </section>
      {/* item : 2 */}
      {/* import { FaArrowRight } from "react-icons/fa"; */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 ">
        {services.map((service, index) => {
          const Icon = iconMap[service.title];

          return (
            <div
              key={index}
              className="group flex flex-col justify-between p-8 rounded-2xl bg-white shadow-sm border border-gray-100 
        transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200"
            >
              <div
                className="text-left flex flex-col h-full justify-between"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div>
                  {/* Icon Box (Adapts to orange-900 on hover) */}
                  <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange-700">
                    {Icon && (
                      <Icon className="text-2xl text-orange-700 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                    )}
                  </div>

                  {/* Category Tag */}
                  <span className="inline-block mb-3 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-700">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-slate-700">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* CTA Link (Animates smoothly with group hover) */}
                <div onClick = {() => onGetStarted({setModalOpen,modalOpen})} className="flex items-center gap-2 font-bold text-orange-700 cursor-pointer w-fit mt-auto group/btn">
                  <span className="text-base transition-colors duration-300">
                    Get This Service
                  </span>
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
