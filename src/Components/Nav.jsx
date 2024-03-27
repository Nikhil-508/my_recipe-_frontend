import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark height-10px" >
  <div className="container">
    <Link to="/" className="navbar-brand">Food Recipe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/recipe/create-recipe' className="nav-link active" aria-current="page" >Create</Link>
        </li>
        <li className="nav-item">
          <Link to='/recipe/saved-recipe' className="nav-link">Saved Recipe</Link>
        </li>
      </ul>
        <button className="btn btn-outline-primary" type="submit">
            <Link to='/auth/register' className='text-decoration-none'>Login/Register</Link>
            </button>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Nav
