import * as React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard' 
import ResetPass from '../pages/ResetPass' 
import { AuthContext } from "../contexts/AuthContext";




const Stack = () => {

  const { currentUser } = React.useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return !currentUser ? children : <Navigate to="/login" />;
  };


  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
         
          <Route path="/dashboard" element={
          <RequireAuth>
          <Dashboard />
        </RequireAuth>
      } />

          <Route path="/reset" element={<ResetPass />} />
        </Routes>

      </BrowserRouter>
    </React.Fragment>
  )
}

export default Stack
