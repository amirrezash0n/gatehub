import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ui/ProtectedRoute";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: null,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
