import { createContext, useContext } from "react"

const LabContext = createContext(null);

export default function LabProvider({ children }) {
  return (
    <LabContext.Provider value={""}>
      {children}
    </LabContext.Provider>
  )
}

export const useLabs = () => useContext(LabContext);