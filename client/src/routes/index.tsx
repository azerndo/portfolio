import type { RouteObject } from "react-router";
import ErrorPage from "../ErrorPage";
import LandingPage from "../pages/LandingPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]