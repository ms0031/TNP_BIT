import React, { createContext } from "react";
import useState from "react-usestateref";
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser, userRef] = useState(null);
  var [counter, setCounter, counterRef] = useState(0);
  return (
    <StudentContext.Provider value={{ user, setuser }}>
      {children}
    </StudentContext.Provider>
  );
};
