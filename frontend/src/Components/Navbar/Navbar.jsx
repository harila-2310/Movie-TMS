import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const onLogout=()=>{
        localStorage.clear();
        navigate('/login')
    }
  return (
    <div>
      <h2 onClick={onLogout}>Logout</h2>
    </div>
  )
}

export default Navbar