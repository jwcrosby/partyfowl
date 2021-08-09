import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import nest from '../images/login.png'
import header from '../images/temporary-header.png'


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
					<span className='header-img' >Header Img Will Go Here</span> 
					<span className='form-links'>
					<NavLink className='login nav-a' to="/login"><img className='nest-icon' src={nest} alt="an egg" /><br/></NavLink>
					<NavLink className='signup nav-a' to="/signup">Sign Up</NavLink>
					</span>
				</>
			)}
			</div>
		</nav>
	)
}

export default NavBar
