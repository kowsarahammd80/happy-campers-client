import React, { useEffect, useState } from 'react';
import DashboardMap from '../DashboardMap/DashboardMap';

const Dashboard = () => {
   
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {

     fetch(`http://localhost:5000/allUserData`)
      .then(res => res.json())
      .then(data => setAllUsers(data))
      .catch(e => console.error(e))

  },[])

  return (

    <div className='mt-5 mb-20'>
       
       <div className='mt-10 mb-10'>
         <h1 className='text-center text-3xl font-extrabold'>User List</h1>
       </div>

        <div className="overflow-x-auto">

  <table className="table w-full">
    
    <thead>

      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>

    </thead>

    <tbody>
      
     
     
      {
        allUsers.map(allUser => <DashboardMap
         key={allUser._id} allUserData = {allUser}
        ></DashboardMap>)

      }
      
     
    </tbody>
    
  </table>
   
   <p className='text-xl font-bold ml-5'>{allUsers.length} Users</p>

</div>
    </div>

  );
};

export default Dashboard;