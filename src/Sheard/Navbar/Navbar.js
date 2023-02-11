import React, { useContext } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Navbar = () => {

  const {user, logOutUser} = useContext(AuthContext)

  const logOut = () => {

     logOutUser()
      .then(() => {})
      .catch(e => console.error(e))

  }
  
  const nabRoute = (

    <>

    <li className="font-semibold">
       <Link>About</Link>
    </li>

    <li className="font-semibold">
      <Link>Shop</Link>
    </li>

    <li className="font-semibold">
      <Link>Subscribe & Save</Link>
    </li>

    <li className="font-semibold">
      <Link>Bundle</Link>
    </li>

    <li className="font-semibold">
      <Link>Recipe</Link>
    </li>

    <li className="font-semibold">
      <Link>Find</Link>
    </li>

    <li className="font-semibold">
      <Link>More</Link>
    </li>

    </>
  )

  return (

    <div className="mx-0 lg:mx-14">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
               {nabRoute}

            </ul>

          </div>

          <Link to='/' className="btn btn-ghost normal-case text-2xl">Logo</Link>

        </div>
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1">
            
           {nabRoute}

          </ul>

        </div>

        <div className="navbar-end">
             
             {/* card */}

             <div className="mr-10">
               <h1 className="text-2xl avatar-color"><i class="fa-solid fa-cart-shopping"></i></h1>
             </div>

        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <h1 className="text-2xl avatar-color"><i class="fa-solid fa-user"></i></h1>
        </div>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">

        
           
         <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        

        {
          user?.uid ? 
          <>
             <li><button onClick={logOut} className="btn btn-ghost">Logout</button></li>
          </>
          :
          <>
            <li>
          <Link to="login" className="justify-between">
            Lon in
            
          </Link>
        </li>

        <li>
          <Link to="createAccount">Create account</Link>
        </li>

          </>
        }     

      </ul>

    </div>

        </div>

      </div>
      </div>
    
  );
};

export default Navbar;
