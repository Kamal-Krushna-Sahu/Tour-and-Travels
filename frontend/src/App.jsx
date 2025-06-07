import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./components/layouts/AuthLayout.jsx";
import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import UserPage from "./pages/UserPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <AuthLayout />,
    // errorElement: ,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "newuser/signup",
        element: <Signup />,
      },
      {
        path:"admin",
        element: <AdminLogin />,
      }
    ],
  },

  {
    path:"/paymentsuccess",
    element:<PaymentSuccess />
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

// const router = createBrowserRouter([
//   {
//     // Authentication routes – the root "/" shows the Login page.
//     path: "/",
//     element: <AuthLayout />,
//     children: [
//       { index: true, element: <Login /> },
//       { path: "signup", element: <Signup /> }
//     ]
//   },
//   {
//     // Main website routes
//     path: "/main",
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> }
//       // Additional nested routes (e.g., dashboard) can be added here.
//     ]
//   }
// ]);

// // --- App Component ---
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
