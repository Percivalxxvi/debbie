import { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext();

// Hook to access it
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged-in user stored in state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
