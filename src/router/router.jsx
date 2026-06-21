import { createBrowserRouter } from "react-router";
import home from "../pages/home_page/home/Home";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: home,
      },
    ],
  },
]);
