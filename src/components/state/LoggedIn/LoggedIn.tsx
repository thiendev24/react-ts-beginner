import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsloggedIn] = useState<boolean>(false);
  const handleLogin = (): void => {
    setIsloggedIn(true);
  };
  const handleLogout = (): void => {
    setIsloggedIn(false);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={() => handleLogin()}
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
      <div>
        <h3>User is {isLoggedIn ? "logged in" : " logged out"}</h3>
      </div>
    </div>
  );
};

export default LoggedIn;
