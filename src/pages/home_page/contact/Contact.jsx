import { MdAccessTimeFilled } from "react-icons/md";
import ContactCards from "./ContactCards";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contact = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      services: [],
      estimatedBudget: "",
      estimatedTimeLine: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "Sending Email...",
        html: "Please wait while we send your message.",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Match these keys exactly inside your EmailJS template using {{key_name}}
      const templateParams = {
        subject: "New Message from Website", // Fixes the missing subject line
        from_name: data.name,
        reply_to: data.email,
        phone_number: data.phone,
        message: data.message,
      };

      const result = await emailjs.send(
        "service_3bxcrsj", // service id
        "template_9fmhz9r", // template id
        templateParams,
        "ZFoOClZkNxZok8BYf", // public key
      );

      console.log("Email sent:", result.text);

      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Your message has been sent successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      reset();
    } catch (error) {
      console.error("Email error:", error);

      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Could not send email. Please try again.",
      });
    }

    console.log(data);
  };

  return (
    <div className="flex flex-col gap-9 mb-9" id={id}>
      {/* HERO SECTION */}
      <section
        className="relative pt-24 pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #080f2e 0%, #0f1a45 55%, #1a0838 100%)",
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow Orb */}
        <div
          className="absolute -top-20 -right-20 w-130 h-130 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(192,57,43,0.18), transparent 65%)",
            animation: "pulseGlow 6s ease-in-out infinite",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 mb-8">
            <div className="w-2.5 h-2.5 bg-[#C0392B] rounded-full animate-pulse" />
            <span className="text-[#dde2f5] text-sm font-medium tracking-[0.125em] uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Let's <span className="text-[#C0392B]">Grow</span> Together
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#a8b4d8] leading-relaxed font-light">
            Ready to take your business to the next level? Reach out — our team
            responds within one business day.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white" />
      </section>

      {/* CONTACT CARDS */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <ContactCards />
      </div>

      {/* FORM SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* LEFT SIDE - INFO */}
          <div className="lg:col-span-2 space-y-10" data-aos="fade-right">
            <div>
              <h2 className="text-orange-700 font-semibold tracking-[0.08em] uppercase text-sm mb-3">
                SEND A MESSAGE
              </h2>
              <h1 className="text-4xl md:text-4xl font-serif font-bold leading-tight text-gray-900 tracking-tighter">
                We'd Love to Hear From You
              </h1>
            </div>

            <div className="h-1.5 w-20 bg-linear-to-r from-orange-700 via-amber-600 to-orange-700 rounded-full" />

            <p className="text-[15.5px] leading-relaxed text-gray-600 font-light">
              Tell us about your goals and challenges, and our team will craft a
              personalized solution designed to guide you toward the right
              strategy and meaningful results.
            </p>

            {/* Business Hours */}
            <div className="bg-white border border-gray-100 rounded-3xl p-9 shadow-sm">
              <div className="flex items-center gap-4 mb-7">
                <MdAccessTimeFilled className="text-4xl text-orange-700" />
                <h3 className="text-2xl font-semibold text-orange-700">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-6 text-[17px]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    Saturday – Thursday
                  </span>
                  <span className="text-gray-600">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">Friday</span>
                  <span className="text-gray-500 font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-linear-to-br from-[#F8FAFC] to-white border-l-4 border-[#C0392B] pl-8 py-8 rounded-3xl italic">
              <p className="text-xl md:text-2xl leading-relaxed text-[#1B2B6B] font-serif">
                "Contact us today to grow smarter, faster & stronger."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-10">
                Deliver Your Message
              </h2>

              <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2.5 text-[15px] tracking-wide">
                      FULL NAME *
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="w-full h-14 px-6 rounded-2xl border border-gray-200 focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all text-base placeholder:text-gray-400"
                      placeholder="Dewan Abir Mahmud"
                    />
                  </div>

                  <div>
                    <label className="block text-blue-900 font-semibold mb-2.5 text-[15px] tracking-wide">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full h-14 px-6 rounded-2xl border border-gray-200 focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all text-base placeholder:text-gray-400"
                      placeholder="abirm3188@gmail.com"
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>

                  <div>
                    <label className="block text-blue-900 font-semibold mb-2.5 text-[15px] tracking-wide">
                      PHONE NUMBER
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full h-14 px-6 rounded-2xl border border-gray-200 focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all text-base placeholder:text-gray-400"
                      placeholder="017-XXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-blue-900 font-semibold mb-2.5 text-[15px] tracking-wide">
                      SERVICE NEEDED
                    </label>
                    <select className="w-full h-14 px-6 rounded-2xl border border-gray-200 focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all text-base bg-white">
                      <option value="" disabled selected>
                        Select a service
                      </option>
                      <option value="Digital Marketing Consultancy">
                        Digital Marketing Consultancy
                      </option>
                      <option value="Branding & Design">
                        Branding & Design
                      </option>
                      <option value="Event Management">Event Management</option>
                      <option value="HR Consultancy">HR Consultancy</option>
                      <option value="Recruitment & Talent Acquisition">
                        Recruitment & Talent Acquisition
                      </option>
                      <option value="Training & Development">
                        Training & Development
                      </option>
                      <option value="Payroll & HR Compliance">
                        Payroll & HR Compliance
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-blue-900 font-semibold mb-2.5 text-[15px] tracking-wide">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={6}
                    className="w-full px-6 py-5 rounded-3xl border border-gray-200 focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20 outline-none transition-all text-base resize-y placeholder:text-gray-400"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-16 bg-linear-to-r from-orange-700 to-orange-600 hover:from-orange-800 hover:to-orange-700 text-white text-xl font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-orange-600/30 active:scale-[0.985]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
