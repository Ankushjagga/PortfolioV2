import React from 'react'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearSession, getRole, getToken } from '../../Utilis/api';
import { clearAllSliceStates, logout } from '../../redux/authSlice';

const ADMIN_LINKS = [
  { to: "/adminProjects", label: "Projects", icon: "fa-solid fa-diagram-project" },
  { to: "/adminSkills", label: "Skills", icon: "fa-solid fa-user" },
  { to: "/adminMessages", label: "Messages", icon: "fa-solid fa-phone" },
  { to: "/adminEducation", label: "Education", icon: "fa-solid fa-graduation-cap" },
  { to: "/adminExperience", label: "Experience", icon: "fa-solid fa-brain" },
]

const AdminHeader = () => {
  const token = getToken();
  const role = getRole();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    clearSession();
    dispatch(logout());
    dispatch(clearAllSliceStates());
    navigate("/login");
    toast.success("logout Sucessfully !", {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
    });
  }

  return (
    <nav className='navbar'>
      <div className='title'>
        <NavLink to="/adminDashboard" aria-label='Admin dashboard'>
          <span className='logoNav'>AJ</span>
        </NavLink>
      </div>

      <ul className='adminLinkss'>
        {ADMIN_LINKS.map(({ to, label, icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => `headerNav ${isActive ? "active" : ""}`}
            >
              <i className={icon}></i> {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {token && role === "admin"
        ? <button type='button' className='nav-link lin' onClick={handleLogout}>Logout</button>
        : <h3 className='adminPanel'>ADMIN PANEL</h3>
      }
    </nav>
  )
}

export default AdminHeader
