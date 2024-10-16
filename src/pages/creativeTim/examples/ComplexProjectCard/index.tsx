import React from 'react';
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Invoice from './invoice';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { DAccountState } from '@/types';



const ComplexProjectCard = ({
  color = 'dark',
  accountType,
  dateOpened = '',
  balance,
}:DAccountState) => {
  const accountTypeDefiner = (def: number): string => {
    switch (def) {
      case 0:
        return "Savings";
      case 1:
        return "Current";
      case 2:
        return "Student Checking";
      case 3:
        return "Basic";
      default:
        return "Savings";
    }
  };

  return (
    <Card sx={{ overflow: "visible" }}>
      <Box p={2}>
        <Box display="flex" alignItems="center">
          <Icon
            fontSize="large"
            sx={{
              width: "75px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "74px",
              flexShrink: 0,
              backgroundImage: `linear-gradient(180deg, #3E3D45 0%, #202020 100%)`,
              borderRadius: "12px",
              color: "white",
              mt: -6,
            }}
          >
            <AccountBalanceIcon />
          </Icon>
          <Box ml={2} mt={-2} lineHeight={0}>
            <Typography
              variant="h6"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {accountTypeDefiner(accountType)}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Invoice name="Loan 1" date="2022/02/04" price="$20,000" />
        <Divider />
        <Invoice name="Loan 2" date="2022/03/15" price="$15,000" />
        <Divider />
        <Invoice name="Loan 3" date="2022/04/30" price="$10,000" />
        <Divider />
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography>
              {dateOpened}
            </Typography>
          </Box>
            <Box
              display="flex"
              flexDirection="row"
              lineHeight={0}
              alignItems="center"
            >
              <Typography variant="h6" fontWeight="medium" color="dark">
                Balance:
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {balance > 0 ? balance + "$" : "0.00$"}
              </Typography>
            </Box>
        
        </Box>
      </Box>
    </Card>
  );
};

export default ComplexProjectCard;