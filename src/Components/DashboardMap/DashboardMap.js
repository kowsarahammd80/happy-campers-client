import React from 'react';

const DashboardMap = ({allUserData}) => {
   
  const {firstName, lastName, email, password} = allUserData

  return (

  <tr className="hover">

    <th className='font-semibold'>{firstName}</th>
    <td className='font-semibold'>{lastName}</td>
    <td className='font-semibold'>{email}</td>
    <td className='font-semibold'>{password}</td>

  </tr>

  );
};

export default DashboardMap;