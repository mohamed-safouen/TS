import { useContext } from "react";
import { UserContext } from "./UserContexr";


export const User = () => {
    const userContext = useContext(UserContext)
  const handleLogin = () => {
  
    userContext.setUser({
        name:'vishwas',
        email:"vishwas@example.com"
    })
   
  };
  const handleLogout = () => {
   
        userContext?.setUser(null)
    
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> User name is {userContext.user?.name} </div>
      <div> User mail is {userContext.user?.email}</div>
    </div>
  );
};
