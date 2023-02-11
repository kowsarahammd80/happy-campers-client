import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import useHook from '../../Components/useHook/useHook';

const AdminRoute = ({children}) => {
   
  const {user, loading} = useContext(AuthContext)
  const [isAdmin, adminLoading] = useHook(user?.email)
 const location = useLocation();
  
 if(loading || adminLoading){
     return <h1>loading...</h1> 
 }

 if(user && isAdmin){
   return children;
 }

 return <Navigate to="/login" state={{ from: location }} replace></Navigate> ;
};

export default AdminRoute;