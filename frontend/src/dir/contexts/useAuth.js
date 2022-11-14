import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
  useReducer
} from 'react'
import axios from 'axios'
import AuthReducer from "./AuthReducer";
import {INITIAL_STATE} from "./AuthContext";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  axios.defaults.withCredentials = true

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
 

  const [fullname, setFullname] = useState(null)
  const [phoneNum, setPhone] = useState(null)
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)

  // check if user is logged in and keep user logged in

  useEffect(() => {
    async function getUser() {
      try {
        await axios.get(`${process.env.REACT_APP_DB}/me`).then((result) => {
          if (result) {
            
            setFullname(result.data.data.fullname)
            setPhone(result.data.data.phone)
            setToken(result.data.data.tokeen)
            setEmail(result.data.data.email)
          } else {
            return false
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [state.currentUser])

  // memoize the values
  const memoizedValue = useMemo(
    () => ({
      fullname,
      phoneNum,
      token,
      email,
    }),
    [fullname],
  )

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
