import { useState, useEffect } from "react";
import { useModal } from "../context-providers/useModal";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "service" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { modalOpen, setModalOpen } = useModal();

  // Clean handler that simply changes state to true

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 68;
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  const onGetStarted = ({ modalOpen, setModalOpen }) => {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6%",
          background: "white",
          color: "black",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 2px 30px rgba(11,20,60,0.3)" : "none",
          fontSize: "20px",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
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

        {/* Desktop Menu */}
        <div
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: "none",
                border: "none",
                color: "black",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => onGetStarted({ setModalOpen, modalOpen })}
            style={{
              background: "linear-gradient(135deg,#C0392B,#e74c3c)",
              color: "#fff",
              border: "none",
              padding: "10px 24px",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 17,
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          style={{
            background: "none",
            border: "none",
            color: "black",
            display: "none",
            cursor: "pointer",
            fontSize: 24,
          }}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            zIndex: 999,
            background: "#0b143c",
            padding: "1rem 2rem",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                color: "#fff",
                padding: "12px 0",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }

          .nav-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
