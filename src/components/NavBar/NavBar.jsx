import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className="nav-bar">
			<div>
			{user ? (
				<>
					<NavLink className='Home' to='/'>Home</NavLink>
					<h1>
						Welcome, {user.name}
					</h1> 
					<NavLink to='/' onClick={handleLogout}>Log out</NavLink>
					<NavLink to='/profile'>Profile</NavLink>
				</>
			) : (
				<>
					<NavLink className='Home nav-a' to='/'>Home</NavLink>
					<NavLink className='login nav-a' to="/login">Log In</NavLink>
					<NavLink className='signup nav-a' to="/signup">Sign Up</NavLink>
				</>
			)}
			</div>
		</nav>
	)
}

export default NavBar
