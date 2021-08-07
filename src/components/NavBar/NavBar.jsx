import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className="nav-bar">
			<div>
			{user ? (
				<>
					<h1>
						Welcome, {user.name}
					</h1> 
					<NavLink to='' onClick={handleLogout}>Log out</NavLink>
					<NavLink to="/users">Users</NavLink>
				</>
			) : (
				<>
					<NavLink to="/login">Log In</NavLink>
					<NavLink to="/users">Users</NavLink>
					<NavLink to="/signup">Sign Up</NavLink>
				</>
			)}
			</div>
		</nav>
	)
}

export default NavBar
