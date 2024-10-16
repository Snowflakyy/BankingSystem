/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import PaymentsIcon from '@mui/icons-material/Payments';
// Material Dashboard 2 PRO React components
import { Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
interface TransactionProps{
    color:string;
    name:string;
    description?:string;
    value:string;
}
function Transaction({ color, name, description, value }:TransactionProps) {
  return (
    <Box key={name} component="li" py={1} pr={2} mb={1}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box mr={2}>
          <Icon
            fontSize="medium"
            sx={{
              width: "39px",
              display: "flex", // Flexbox to center the child
              alignItems: "center", // Vertically center the icon
              justifyContent: "center",
              height: "40px",
              flexShrink: 0,
              backgroundImage: `linear-gradient(180deg, #3E3D45 0%, #202020 100%)`,
              borderRadius: "12px", // backgroundColor: dark.main,
              color: "#fff"
            }}
          >
            <PaymentsIcon/>
          </Icon>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </Typography>
            <Typography variant="caption"  color="text" fontWeight="regular" sx={{
                opacity:0.6
            }}>
              {description}
            </Typography>
          </Box>
        </Box>
        <Typography variant="button" color={color} fontWeight="bold" >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

// Typechecking props of the Transaction

export default Transaction;
