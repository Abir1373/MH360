import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useModal } from "../context-providers/useModal";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const servicesList = [
  "Digital Marketing Consultancy",
  "Branding & Design",
  "Event Management",
  "HR Consultancy",
  "Recruitment & Talent Acquisition",
  "Payroll & HR Compliance",
  "Training & Development",
];

const budgetOptions = [
  "৳ Under 50,000",
  "৳ 50,000 - 1,00,000",
  "৳ 1,00,000 - 2,50,000",
  "৳ 2,50,000 - 5,00,000",
  "৳ 5,00,000+",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "Flexible Time",
];

const Form = () => {
  const { modalOpen, setModalOpen } = useModal();
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

  // Submission handler function

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "Submitting Application...",
        html: "Please wait while we send your information.",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const templateParams = {
        subject: "New Service Inquiry",

        full_name: data.firstName,
        email: data.email,
        phone: data.phone || "N/A",

        company_name: data.companyName || "N/A",
        designation: data.yourDesignation || "N/A",

        services: data.services?.join(", ") || "None Selected",

        estimated_budget: data.estimatedBudget,
        estimated_timeline: data.estimatedTimeLine,

        project_details: data.projectDetails || "N/A",
        website: data.website || "N/A",
      };

      const result = await emailjs.send(
        "service_3bxcrsj", // Your Service ID
        "template_o9ysbhc", // Your Template ID
        templateParams,
        "ZFoOClZkNxZok8BYf", // Your Public Key
      );

      console.log("Email sent:", result.text);

      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "We have received your inquiry.",
        timer: 2500,
        showConfirmButton: false,
      });

      reset();
      setModalOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed!",
        text: "Could not submit your application. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Outer Card Wrapper */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
        {/* Header/Logo Line */}
        <div className="flex flex-row justify-between items-center w-full mb-8">
          <button
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2.5px solid #C0392B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(192,57,43,0.1)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#2563eb",
                }}
              >
                MH
              </span>
            </div>

            <span
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontWeight: 700,
                fontSize: 24,
                color: "#2563eb",
              }}
            >
              360
            </span>
          </button>

          {/* Close Icon Button */}
          <button
            type="button"
            className="btn btn-circle btn-error text-xl bg-orange-600 hover:bg-orange-700 text-white border-none shadow-md shadow-orange-600/20"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <IoMdClose />
          </button>
        </div>

        {/* 2-Column Responsive Grid Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
        >
          {/* Full Name (Spans full width on desktop) */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-700 mb-1.5 tracking-wide">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("firstName", { required: "Full name is required" })}
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs mt-1 font-medium">
                {errors.firstName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1.5 tracking-wide">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email structure",
                },
              })}
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 font-medium">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1.5 tracking-wide">
              Phone
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1.5 tracking-wide">
              Company Name
            </label>
            <input
              {...register("companyName")}
              type="text"
              placeholder="Acme Corp"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
          </div>

          {/* Your Designation */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1.5 tracking-wide">
              Your Designation
            </label>
            <input
              {...register("yourDesignation")}
              type="text"
              placeholder="Software Engineer"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
            />
          </div>

          {/* Services Checkbox Grid (Spans full width on desktop) */}
          <div className="flex flex-col md:col-span-2 mt-2">
            <label className="text-sm font-semibold text-gray-700 mb-3 tracking-wide">
              Select Services <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services", {
                      required: "Please select at least one service",
                    })}
                    className="checkbox checkbox-primary w-5 h-5 focus:ring-offset-0 focus:ring-0 checked:bg-orange-600 checked:border-orange-600"
                  />
                  <span className="text-sm text-gray-600 font-medium selection:bg-transparent">
                    {service}
                  </span>
                </label>
              ))}
            </div>

            {errors.services && (
              <p className="text-red-500 text-xs mt-2 font-medium">
                {errors.services.message}
              </p>
            )}
          </div>

          {/* ADDED: Estimated Budget Radio Grid (Spans full width on desktop) */}
          <div className="flex flex-col md:col-span-2 mt-4">
            <label className="text-sm font-semibold text-gray-700 mb-3 tracking-wide">
              Estimated Budget <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {budgetOptions.map((budget) => (
                <label
                  key={budget}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                >
                  <input
                    type="radio"
                    value={budget}
                    {...register("estimatedBudget", {
                      required: "Please select a budget range",
                    })}
                    className="radio radio-primary w-5 h-5 focus:ring-offset-0 focus:ring-0 checked:bg-orange-600 checked:border-orange-600"
                  />
                  <span className="text-sm text-gray-600 font-medium selection:bg-transparent">
                    {budget}
                  </span>
                </label>
              ))}
            </div>

            {errors.estimatedBudget && (
              <p className="text-red-500 text-xs mt-2 font-medium">
                {errors.estimatedBudget.message}
              </p>
            )}
          </div>

          {/* Estimated Timeline */}

          <div className="flex flex-col md:col-span-2 mt-4">
            <label className="text-sm font-semibold text-gray-700 mb-3 tracking-wide">
              Estimated Timeline <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timelineOptions.map((timeline) => (
                <label
                  key={timeline}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                >
                  <input
                    type="radio"
                    value={timeline}
                    {...register("estimatedTimeLine", {
                      required: "Please select a timeline range",
                    })}
                    className="radio radio-primary w-5 h-5 focus:ring-offset-0 focus:ring-0 checked:bg-orange-600 checked:border-orange-600"
                  />
                  <span className="text-sm text-gray-600 font-medium selection:bg-transparent">
                    {timeline}
                  </span>
                </label>
              ))}
            </div>

            {errors.estimatedTimeLine && (
              <p className="text-red-500 text-xs mt-2 font-medium">
                {errors.estimatedTimeLine.message}
              </p>
            )}
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Tell us about your project
            </label>

            <textarea
              rows={5}
              placeholder="Describe your project, goals, requirements, target audience, etc."
              {...register("projectDetails")}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
          </div>

          {/* Website */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Website (If Any)</label>

            <input
              type="url"
              placeholder="https://yourwebsite.com"
              {...register("website")}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
          </div>

          {/* Submit Button (Spans full width on desktop) */}
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-3.5 px-6 rounded-xl transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-600/20 hover:shadow-orange-700/30"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
