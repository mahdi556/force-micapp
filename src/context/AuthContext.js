import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userStatus, setUserStatus] = useState("guest");
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(true);
  const [loading, setLoading] = useState(false);
  // Check if user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch("/api/auth/me");
    const data = await res.json();

    if (res.ok) {
      // setUser(data.user);
      setUserStatus("login");
      setUser({user:data.user,token:data.token})
    } else {
      setUser(null);
      // setUserStatus("guest");
    }
  };
  useEffect(() => {
    
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
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/register`, {
          // .post(`http://127.0.0.1:3000/api/auth/register`, {
          cellphone,
        })
        .then((response) => {
          console.log(response.data.new);
          setUserStatus("login_token");
          if (response.data.new == 0) {
            setNewUser(false);
          } else {
            setNewUser(true);
          }
        })
        .catch(function (error) {});
    } catch (err) {
      // toast.error(handleError(err))
    } finally {
      setLoading(false);
    }
  };
  const sendOtp = async (otp, name, codeMelli) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/checkOtp`,
        {
          otp,
          name,
          codeMelli,
        }
      );
      setUserStatus("login");
      setUser({user:res.data.user,token:res.data.token})

    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
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
        showAlert,
        setShowAlert,
        newUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
