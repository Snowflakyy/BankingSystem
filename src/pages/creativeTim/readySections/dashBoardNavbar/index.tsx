

import { useState, useEffect, useRef } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import Input from "@mui/material/Input";
// Material Dashboard 2 PRO React components
import { Box } from "@mui/material";
// import MDInput from "components/MDInput";
// import MDBadge from "components/MDBadge";

// Material Dashboard 2 PRO React examples
import Breadcrumbs from "../../examples/Breadcrumbs";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuth} from "../../../../hooks/useAuth"
// import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
// import {
//   navbar,
//   navbarContainer,
//   navbarRow,
//   navbarIconButton,
//   navbarDesktopMenu,
//   navbarMobileMenu,
// } from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "../../context";
import LeftNavDrawer, { LeftNavDrawerRef } from "../../examples/Sidenav2";
function DashboardNavbar() {
  const [navbarType, setNavbarType] = useState("sticky");
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  const drawerRef = useRef<LeftNavDrawerRef>(null);
const {logout} = useAuth()
  const handleDrawerToggle = () => {
    if (drawerRef.current) {
      drawerRef.current.toggleDrawer(true);
    }
  };

  const handleCloseMenu = () => setOpenMenu(false);
const handleLogout = () => logout();
  // Render the notifications menu
//   const renderMenu = () => (
//     <Menu
//       anchorEl={openMenu}
//       anchorReference={null}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "left",
//       }}
//       open={Boolean(openMenu)}
//       onClose={handleCloseMenu}
//       sx={{ mt: 2 }}
//     >
//       <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
//       <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
//       <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
//     </Menu>
//   );


  // Styles for the navbar icons
  const iconsStyle = () => ({
    color:"#3E3D45"
  });

  return (
    <>
    <AppBar
      position="sticky"
      color="inherit"
>
      <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
        
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="logout"
              edge="end"
              onClick={handleLogout}
              sx={{ mr: 2 }}
            >
              <LogoutIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <LeftNavDrawer ref={drawerRef} onClose={() => drawerRef.current?.toggleDrawer(false)} />
          <Toolbar />
  </>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
