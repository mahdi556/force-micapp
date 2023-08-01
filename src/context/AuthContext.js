import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [userStatus, setUserStatus] = useState("guest");
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Check if user logged in
    const checkUserLoggedIn = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        setUserStatus("login");
      } else {
        setUser(null);
        // setUserStatus("guest");
      }
    };

    checkUserLoggedIn();
  }, []);
  const handleError = (message) => {
    const errors = [];
    Object.keys(message).map((key) => {
      message[key].map((e) => {
        errors.push(e);
      });
    });
    return errors.join();
  };

  const login = async (cellphone) => {
    try {
      // setLoading(true)
      await axios
        .post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/register`, {
          cellphone,
        })
        .then((response) => {
          setUserStatus("login_token");
        })
        .catch(function (error) {});
    } catch (err) {
      // toast.error(handleError(err))
    } finally {
      // setLoading(false)
    }
  };
  const sendOtp = async (otp, name, codeMelli) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/checkOtp`,
        {
          otp,
          name,
          codeMelli,
        }
      );

      setUser(res.data.user);
      setUserStatus("login");
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      // setLoading(false);
    }
  };
  const logout = async () => {
    try {
      // setLoading(true)
      await axios
        .post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/logout`)
        .then((response) => {
          setUserStatus("guest");
          setUser(null);
        })
        .catch(function (error) {});
    } catch (err) {
      // toast.error(handleError(err))
    } finally {
      // setLoading(false)
    }
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        loginModal,
        setLoginModal,
        userStatus,
        setUserStatus,
        sendOtp,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
