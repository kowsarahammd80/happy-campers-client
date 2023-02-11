import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';

const useHook = (email) => {

  const [isAdmin, setIsAdmin] = useState(null)
  const [adminLoading, setAdminLoading] = useState(true)
  const {user} = useContext(AuthContext)

  useEffect(() => {

    console.warn(email)

    fetch(`http://localhost:5000/adminState/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.warn('from admin hook', data)
        setIsAdmin(data)
        setAdminLoading(false)

      })
  }, [email])

  return [isAdmin, adminLoading];
  
};

export default useHook;