import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>
        <button className="nav-link px-3 text-white" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSearch" 
                aria-controls="navbarSearch" aria-expanded="false" 
                aria-label="Toggle search">
            <span className='navbar-toogler-icon'></span>
        </button>
        
        <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" 
                aria-label="Search" />
        <ul className='navbar-nav px-3'>
            <li className='nav-item text-nowrap'>
                <a className='nav-link' href='#'>Sign out</a>
            </li>
        </ul>
  </nav>
  )
}

export default Nav
