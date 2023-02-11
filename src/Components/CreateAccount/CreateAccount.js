import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';


const CreateAccount = () => {

  const {createUser, setProfile, loading} = useContext(AuthContext)

  const [error, setError] = useState("")

  const navigate = useNavigate()
  
  const handleRegister = (event) => {
     
    event.preventDefault()

    const form = event.target
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
   
    // console.log(firstName, lastName, email, password)

    // const userName = {

    //    firstName: firstName,
    //    lastName: lastName

    // }

    createUser(email, password)
     .then(result => {
      const user = result.user
        if(loading){
          return <Loading/>
        }
      // console.log(user)
      setUserName(firstName)
      userDataPost(firstName, lastName, email, password)
      form.reset()
      
      navigate('/login')
     })
     .catch(e => {
      setError(e.message)
      console.error(e.message)
    })  

  }


  const setUserName = (firstName,) => {

      
    const profile ={

      displayName: firstName,

    }
      
     setProfile(profile)
      .then(() => {})
      .catch(e => console.error(e))

  }

  const userDataPost = (firstName, lastName, email, password) => {
      
     const userData = {

         firstName: firstName,
         lastName: lastName,
         email: email,
         password: password,

     }

    fetch(`http://localhost:5000/registerData`,{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
     .then(res => res.json())
     .then(data => {
       console.log(data)
     })
     .catch(e => console.error(e))

  }

  

  return (
    <div>
       
                
       <div>

             <h1 className='text-center text-2xl font-extrabold mt-20 '>

              CREATE ACCOUNT

             </h1>

          </div>

        {/* from start */}

         <div className='flex justify-center mt-10 mb-16'>

             <form onSubmit={handleRegister} className='w-3/4 lg:w-1/2'> 

             <input type="text"
              placeholder="First Name" 
              name='firstName'
              className="input input-bordered w-full rounded-none mb-5" />

             <br />
             <input type="text" 
             placeholder="last Name" 
             name='lastName'
             className="input input-bordered w-full rounded-none mb-5" />

             <br />
             <input type="text" 
             placeholder="Email" 
             name='email'
             className="input input-bordered w-full rounded-none mb-5" />

             <br />

             <input type="password" 
             placeholder="Password" 
             name='password'
             className="input input-bordered w-full rounded-none mb-5" /> 
              
              <br/>

              <p className='text-red-500 font-semibold'>{error}</p>

             <button type='submit' className='loginButton w-full py-3 mb-5 text-white font-semibold'>LOGIN</button> 
              
              {/* Already have an account? / Back to Login */}

             <div className='flex lg:flex-none flex-col lg:flex-row justify-center lg:justify-start'>

                <Link className='mr-0 lg:mr-4 text-center lg:text-start'>Already have an account?</Link>

                <Link to="/login" className='ml-0 text-center lg:text-start'>Back to Login</Link>
                
             </div>
 
             </form>

         </div>

    </div>
  );
};

export default CreateAccount;