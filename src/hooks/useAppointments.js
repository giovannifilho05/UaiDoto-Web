import { createContext, useContext } from 'react'

const AppointmentsContext = createContext([])

export function AppointmentsProvider({ children }) {





  
  return (
  <AppointmentsContext.Provider value={{}}>
    {children}
  </AppointmentsContext.Provider>)
}

export function useAppointments() {
  const context = useContext(AppointmentsContext)

  return context
}