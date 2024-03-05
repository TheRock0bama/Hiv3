import React, {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import roles from '../context/roles.json'

const AdminProtected = ({children}) => {
    const {user} = UserAuth();
    const current_user = user.email;
    const adminEmailExists = roles.members.some(member=>member.aemail == current_user);
    console.log(adminEmailExists);

    if(!adminEmailExists)
    {
        return <Navigate to ='/' />
    }
        
    return children
};

export default AdminProtected;