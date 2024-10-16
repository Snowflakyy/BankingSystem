import { Box, Typography } from '@mui/material'
import React from 'react'
import { UsersTable } from '../creativeTim/examples/Table'
import * as S from '../../components';
import { Navigate, useNavigate,Outlet } from 'react-router-dom';
import { PublicRoute } from '../../routes/PublicRoute/PublicRoute';

import { Public } from '@mui/icons-material';
import { ChildrenProps } from '@/types/children';

//icon+FullName, Active Loans, Pending Loans, Accounts





export const AdminHome = () => {
  const navigate=useNavigate()
  
   
  
  return (
    
   <Box display="flex" flexDirection="column" gap={6}>
    <Box display="flex" justifyContent="space-between">
    <Typography variant="h3" color='inherit' fontWeight="bold">
      Users
    </Typography>
    <Box display="flex" justifyContent="center">
    <S.Button variant="secondary" >
      Pending Loans
    </S.Button>
    <S.Button variant="secondary" onClick={()=>navigate("/admin-home/user-profiles")} >
      UserProfiles
    </S.Button>
    </Box>
    </Box>
    <Box mt={1} >
      <Outlet/>
      </Box>
   </Box>
   
  )

}

