import { useState } from "react";
import AuthUser from "../../types/AuthUser.type";

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = (): void => {
    setUser({
      name: "alo",
      email: "ychag@example.com",
    });
  };
  const handleLogout = (): void => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="m-2">
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
        {user ? (
          <>
            <h3>User's name is {user?.name}</h3>
            <h3>User's email is {user?.email}</h3>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default User;
