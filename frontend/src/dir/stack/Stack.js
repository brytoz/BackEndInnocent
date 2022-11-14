import React, { Suspense } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ResetPass from '../pages/ResetPass'
import { AuthContext } from '../contexts/AuthContext'
import Uploads from '../pages/Uploads'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

const PostLands = React.lazy(() => import('../pages/PostLands'));

const Stack = () => {
  const { currentUser } = React.useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />

            <Route
              path="/postLand"
              element={
                <RequireAuth>
                  <PostLands />
                </RequireAuth>
              }
            />

            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            <Route
              path="/uploads"
              element={
                <RequireAuth>
                  <Uploads />
                </RequireAuth>
              }
            />

            <Route path="/reset" element={<ResetPass />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Stack
