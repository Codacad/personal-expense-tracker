import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "./state/apis/authApi";
import { setUser } from "./state/other/userAuthStatus";
function App() {
  const { user } = useSelector((state) => state.userAuthStatus);
  console.log(user);

  const useSessionTimeout = (user) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if (!user?.expires) return;

      const remainingTime = user.expires - Date.now();
      if (remainingTime <= 0) {
        handleSessionExpire();
        return;
      }

      const timeoutId = setTimeout(() => {
        handleSessionExpire();
      }, remainingTime);

      return () => clearTimeout(timeoutId); // Cleanup to prevent memory leaks
    }, [user, navigate, dispatch]);

    const handleSessionExpire = () => {
      dispatch(setUser({ isAuthenticated: false, user: null }));
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      navigate("/login");
    };
  };
  useSessionTimeout(user);
  return (
    <>
      <div className="App host-grotesk">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
