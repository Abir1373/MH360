import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./router/router";
import AOS from "aos";
import "aos/dist/aos.css";

import { ModalProvider } from "./context-providers/ModalProvider";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <div className="font-cormorant">
        <RouterProvider router={router} />
      </div>
    </ModalProvider>
  </StrictMode>,
);
