import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { fakeAuthProvider } from "../services/auth";
import { Menu } from "./Menu";

let AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(null);

  useEffect(() => {
    const storageData = localStorage.getItem("user");
    if (storageData) {
      const parsedData = JSON.parse(storageData);

      if (parsedData?.user)
        signin(parsedData, () => { });
    }
  }, []);

  const persistUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      persistUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      persistUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const RequireAuth = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export const useAuth = () => {
  return React.useContext(AuthContext);
}

export const AuthStatus = () => {
  let auth = useAuth();

  if (!auth.user) { return null }

  return (
    <div>
      Welcome {auth.user.user} <br />
      <Menu />
    </div>
  );
}

