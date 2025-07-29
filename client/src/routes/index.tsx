import type { RouteObject } from "react-router";
import ErrorPage from "../ErrorPage";
import LandingPage from "../pages/LandingPage";
import WaterflowCaseStudy from "../pages/projects/Waterflow";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "waterworks-management-system",
    element: <WaterflowCaseStudy />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]