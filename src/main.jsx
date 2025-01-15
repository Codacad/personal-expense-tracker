import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Income from "./routes/Income.jsx";
import Expenses from "./routes/Expenses.jsx";
import Reports from "./routes/Reports.jsx";
import AddIncome from "./routes/AddIncome.jsx";
import AddExpense from "./routes/AddExpense.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import NotLoggedIn from "./components/NotLoggedIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/income/add",
        element: <AddIncome />,
      },
      {
        path: "/expense/add",
        element: <AddExpense />,
      },
      {
        path: "/login",
        element: (
          <NotLoggedIn>
            <Login />
          </NotLoggedIn>
        ),
      },
      {
        path: "/register",
        element: (
          <NotLoggedIn>
            <Register />
          </NotLoggedIn>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
