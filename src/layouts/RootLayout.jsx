import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import FAQ from "../hooks/FAQ";
import { useModal } from "../context-providers/useModal";
import Form from "../hooks/Form";

const RootLayout = () => {
  const {  modalOpen } = useModal();
  return (

    <div >{modalOpen ? <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="bg-linear-to-br from-white via-blue-50 to-blue-100 border border-blue-100 rounded-2xl shadow-2xl shadow-blue-100/50"><Form></Form></div> : <div className="flex flex-col mb-9">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>}</div>
    
  );
};

export default RootLayout;
