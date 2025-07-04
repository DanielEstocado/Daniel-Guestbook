import React from 'react'
import { AuthProvider } from './context/AuthContext.jsx'
import Home from './components/Home.jsx'


const App = () => {

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
    
  )
}

export default App
