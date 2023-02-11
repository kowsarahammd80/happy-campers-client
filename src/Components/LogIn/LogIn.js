import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';
import './LogIn.css'

const LogIn = () => {

  const {login, loading} = useContext(AuthContext)

  const [error, setError] = useState("")

  const navigate = useNavigate()
  
  const handleLogin = (event) => {
     
    event.preventDefault()

    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    login(email, password)
     .then(result => {
       const user = result.user
       setError("")
       if(loading){
        return <Loading/>
       }
       console.log(user)
       form.reset()
       navigate('/')
     })
     .catch(e => {
       setError(e.message)
       console.error(e.message)
     })
 
  }


  return (
    <div>

         
          <div>
             <h1 className='text-center text-2xl font-extrabold mt-20 '>LOGIN</h1>
          </div>

        {/* from start */}

         <div className='flex justify-center mt-10 mb-16'>

             <form onSubmit={handleLogin} className='w-3/4 lg:w-1/2'> 

             <input type="text" placeholder="Email" name="email" className="input input-bordered w-full rounded-none mb-5" />

             <br />

             <input type="password" placeholder="Password" name="password" className="input input-bordered w-full rounded-none mb-5" /> 
              
              <br/>

              <p className='text-red-500 font-semibold'>{error}</p>

             <button type='submit' className='loginButton w-full py-3 mb-5 text-white font-semibold'>LOGIN</button> 
              
              {/* create account route / forgat password */}

             <div className='flex flex-col lg:flex-row justify-center'>

                <Link to ="/createAccount" className='mr-0 lg:mr-4 text-center lg:text-start'>Create account</Link>

                <span className='text-center'>/</span>

                <Link to="/recover" className='ml-0 lg:ml-4 text-center lg:text-start'>Forgot your password?</Link>
                
             </div>
 
             </form>

         </div>
          
  

    </div>
  );
};

export default LogIn;