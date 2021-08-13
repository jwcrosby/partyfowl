import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import nest from '../images/login.png'
import fowl from '../images/partyfowl-nav.png'
import goose from '../images/goose.png'


const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className="nav-bar">
			<div className='nav-parent'>
			{user ? (
				<>
					<NavLink className='Home nav-a' to='/'><img className='goose-icon' src={fowl} alt="Logo" /></NavLink>
					<span className='header-img' ><img className='goose-icon' src={goose} alt="a goose" /></span>  
					<div className='user-links'>
					<NavLink className='nav-a logout' to='/' onClick={handleLogout}>Log out</NavLink>
					<NavLink className='nav-a profile' to='/profile'>Profile</NavLink>
					</div>
				</>
			) : (
				<>
					<NavLink className='Home nav-a' to='/'><img className='goose-icon' src={fowl} alt="Logo" /></NavLink>
					<span className='header-img' ><img className='goose-icon flying' src={goose} alt="a goose" /></span> 
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
