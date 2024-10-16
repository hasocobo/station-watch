import { createContext, useContext, useState } from "react"

const exampleUser = {
  name: "Hasan",
  surname: "Çoban",
  role: "admin"
}

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(exampleUser);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);