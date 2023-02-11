import React from 'react';
import { Link } from 'react-router-dom';

const RecoverPassword = () => {

  return (

    <div>
            <div>
             <h1 className='text-center text-2xl font-extrabold mt-20 '>RECOVER PASSWORD</h1>
          </div>

        {/* from start */}

         <div className='flex justify-center mt-10 mb-16'>

             <form className='w-3/4 lg:w-1/2'> 

             <input type="text" placeholder="Email" className="input input-bordered w-full rounded-none mb-5" />

             <br />

             <input type="text" placeholder="Password" className="input input-bordered w-full rounded-none mb-5" /> 
              
              <br/>

             <button type='submit' className='loginButton w-full py-3 mb-5 text-white font-semibold'>Submit</button> 
              
             

            
 
             </form>

         </div>
    </div>

  );

};

export default RecoverPassword; 