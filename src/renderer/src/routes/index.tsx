import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Layout
import AppLayout from "@renderer/layouts";

// Lazy-loaded pages
const Dashboard = lazy(() => import("@renderer/pages/dashboard"));
const Configuration = lazy(() => import("@renderer/pages/configuration"));
const Analyzer = lazy(() => import("@renderer/pages/analyzer"));
const Utilities = lazy(() => import("@renderer/pages/utilities"));
const Login = lazy(() => import("@renderer/pages/auth/login"));
const ResetPassword = lazy(() => import("@renderer/pages/auth/resetPassword"));
const SetPassword = lazy(() => import("@renderer/pages/auth/setPassword"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "configuration", element: <Configuration /> },
      { path: "analyzer", element: <Analyzer /> },
      { path: "utilities", element: <Utilities /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/set-password", element: <SetPassword /> },
]);
