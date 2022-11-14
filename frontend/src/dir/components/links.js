import { FaUser } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import { AiFillDashboard } from 'react-icons/ai'
import { FiUpload } from 'react-icons/fi'


export const links = [
    {id:1, title: 'Dashboard', ref: "/dashboard", icon: <AiFillDashboard />},
    {id:2, title: 'Post Land for Rent', ref: "/postLand", icon: <BsFillHouseFill />},
    {id:3, title: 'My Uploads', ref: "/uploads", icon: <FaUser />},
    {id:4, title: 'My Profile', ref: "/profile", icon: <FiUpload />},
]