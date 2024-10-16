import React, { useState, useImperativeHandle, forwardRef, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PaymentsIcon from '@mui/icons-material/Payments'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import BarChartIcon from '@mui/icons-material/BarChart'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { grey, pink } from '@mui/material/colors'
import SidenavCollapse from '../Sidenav/SidenavCollapse'

interface LeftNavDrawerProps {
  onClose?: () => void
}

export interface LeftNavDrawerRef {
  toggleDrawer: (open: boolean) => void
}

const LeftNavDrawer = forwardRef<LeftNavDrawerRef, LeftNavDrawerProps>((props, ref) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && open) {
        handleDrawerClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const menuItems = [
    { name: 'UserHome', icon: <HomeIcon />, to: '/user-home' },
    { name: 'AdminHome', icon: <PaymentsIcon />, to: '/admin-home' },
    { name: 'ApplyForLoans', icon: <AccountBalanceIcon />, to: '/apply-for-loans' },
    { name: 'Analytics', icon: <BarChartIcon />, to: '/analytics' },
    { name: 'Accounts', icon: <AccountBoxIcon />, to: '/accounts' },
  ]

  useImperativeHandle(ref, () => ({
    toggleDrawer: (isOpen: boolean) => {
      setOpen(isOpen)
    },
  }))

  const handleDrawerClose = () => {
    if (props.onClose) {
      props.onClose()
    }
    setOpen(false)
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
      variant="persistent"
      sx={{
        width: 240,
        flexShrink: 1,
        '& .MuiDrawer-paper': {
          width: 240,
          border: "none",
          backgroundImage: `linear-gradient(180deg, #3E3D45 0%, #202020 100%)`,
          borderRadius: "12px",
          margin: "16px ",
          height: "100vh",
        },
      }}
    >
      <Box ref={drawerRef}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white" }}>
            Logo
          </Typography>
        </Box>
        <Divider sx={{ opacity: 0.6 }} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              component={Link}
              to={item.to}
              key={item.name}
              onClick={() => {
                setActiveItem(item.name)
                handleDrawerClose()
              }}
              sx={{
                width: "100%",
                backgroundColor: activeItem === item.name ? pink[400] : 'transparent',
                color: activeItem === item.name ? grey[900] : grey[50],
                '&:hover': {
                  backgroundColor: activeItem === item.name ? pink[700] : grey[400],
                },
                borderRadius: '4px',
                margin: '4px',
                padding: "16px",
                border: "none",
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto' }}>
          <ListItem
            component={Link}
            to="/profile"
            onClick={handleDrawerClose}
            sx={{
              textDecoration: 'none',
              color: grey[50],
              '&:hover': {
                backgroundColor: grey[400],
              },
            }}
          >
            <SidenavCollapse
              name="Profile"
              icon={<AccountBoxIcon />}
            />
          </ListItem>
        </Box>
      </Box>
    </Drawer>
  )
})

LeftNavDrawer.displayName = 'LeftNavDrawer'

export default LeftNavDrawer