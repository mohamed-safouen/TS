import { useState } from "react";
type AuthUser = {
    name : string
    email: string
}
export const User= () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({
        name: "John Doe",
        email:'j@exp.com'
    })
  };
  const handleLogout = () => {
    setUser(null)
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> User name is {user?.name} </div>
      <div> User mail is {user?.name} </div>
    </div>
  );
};
