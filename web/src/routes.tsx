import { createBrowserRouter } from "react-router";
import LandingPage from "@/pages/landing";



export const router = createBrowserRouter([
    {
      path: "/",
      Component: LandingPage
    },
  ]);
  