import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../store'
const Nav = () => {
  const isAuth = localStorage.getItem('token')
  const token = useStore((state) =>state.token)
  const navigate = useNavigate()
  const setToken = useStore((state) => state.setToken)
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#intro">Home</a>
              </li>
            </ul>
  
            <ul className="navbar-nav d-flex flex-row">
             {(!! isAuth || !!token) &&( <li className="nav-item me-3  mr-5">
                <Link to="Add">
                <i class="fa-solid fa-plus"></i>
                </Link>
              </li>)}


              <li className="nav-item me-3 mr-5 d-flex align-items-center" >
                <Link to="login">
                <i class="fa-solid fa-user"></i>
                </Link>

              </li>
              {(!! isAuth || !!token) &&( 
              <li onClick={() => {
                localStorage.removeItem('token')
                setToken(false)
                navigate('/login')
               }  } className="nav-item me-3  mr-5">
                <Link to="Add">
                <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
              </li>)}

            </ul>
          </div>
        </div>
      </nav>


    )
}

export default Nav