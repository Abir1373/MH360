import { useState } from "react";
import Hr from "../../home_page/gallery/gallery_folder/Hr";
import Events from "../../home_page/gallery/gallery_folder/Events";
import Marketing from "./gallery_folder/Marketing";
import Training from "./gallery_folder/Training";
import EveryImages from "../gallery/gallery_folder/EveryImages";

const Gallery = ({ id }) => {
  const [option, selectOption] = useState("All");
  const buttons = ["All", "Marketing", "Events", "HR", "Training"];

  return (
    <div className="flex flex-col gap-9" id={id}>
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
            width: 450,
            height: 450,
            top: -80,
            right: -60,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(192,57,43,0.14),transparent 70%)",
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
              OUR WORK
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
            <span style={{ color: "#C0392B" }}>Portfolio</span> &amp; Gallery
          </h1>
          <p
            className="anim-fadeUp"
            style={{
              animationDelay: "0.2s",
              color: "#a8b4d8",
              fontSize: 15.5,
              lineHeight: 1.82,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            A visual journey through our work — from strategic campaigns to
            impactful HR transformations.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "linear-gradient(to bottom, transparent, #F4F6FB)",
          }}
        />
      </section>

      {/* item : 2 */}
      <div className="flex flex-col">
        {/* item options  */}
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 m-9 p-2 mx-auto">
          {buttons.map((item) => (
            <button
              key={item}
              className={`btn text border-none rounded-3xl ${
                option === item ? "btn-primary" : "btn-outline btn-primary"
              }`}
              onClick={() => selectOption(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {/* item : 3 : datas  */}
        <div className="flex mx-auto">
          <div>{option === "All" && <EveryImages />}</div>
          <div>{option === "Marketing" && <Marketing />}</div>
          <div>{option === "Events" && <Events />}</div>
          <div>{option === "HR" && <Hr />}</div>
          <div>{option === "Training" && <Training />}</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
