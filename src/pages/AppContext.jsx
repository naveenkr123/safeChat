import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("user");
  const [valid, setValid] = useState(false);
  const [serverIP, setServerIP] = useState("10.5.50.155");
  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        valid,
        setValid,
        serverIP,
        setServerIP,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
