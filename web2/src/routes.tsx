import { createBrowserRouter } from "react-router";
import LandingPage from "@/features/landing/pages/landing";



export const router = createBrowserRouter([
    {
      path: "/",
      Component: LandingPage
    },
  ]);
  