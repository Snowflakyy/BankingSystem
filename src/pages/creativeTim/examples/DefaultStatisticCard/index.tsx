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

// Import statements
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { Grid2 as Grid } from "@mui/material";
import { Box, LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMaterialUIController } from "../../context";
import { DLoanState } from "@/types";

// Define the props interface using TypeScript
interface DefaultStatisticsCardProps extends DLoanState {

}

const DefaultStatisticsCard: React.FC<DefaultStatisticsCardProps> = ({
  amount,
  interestRate,
  endDate,
  status,
  totalPaid,
  monthlyInstallment,
}) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  // Calculate the total amount to be paid (assuming a fixed duration; adjust as needed)
  const amountLeftToBePaid = amount - totalPaid // Example: 12 months
  const percentagePaid = Math.min(
    (totalPaid / amountLeftToBePaid) * 100,
    100
  ); 
  const ConvertStatus = ()=>{
    switch(status){
      case 0:
        return "Active"
        break;
        case 1:
          return "Pending"
          break;
          case 2:
            return "PaidOff";
            break;
            case 3:
              return "Denied"
              default:
                return "Denied"
    }
  }
  // Ensure it doesn't exceed 100%

  return (
    <Card
      sx={{
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow:
            "0px 0px 0px 4px rgba(240, 68, 56, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        },
      }}
    >
      <Box p={2} display="flex" flexDirection="column">
        {/* Header Section */}
        <Box
          mb={0.5}
          lineHeight={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography
            variant="button"
            fontWeight="medium"
            color="text.primary"
            textTransform="capitalize"
          >
            Loan Status
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            textAlign="right"
            lineHeight={1}
          >
            <Typography variant="button" fontWeight="bold">
              Deadline:
            </Typography>
            <Typography variant="caption" color="text.secondary" fontWeight="regular">
              {endDate}
            </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <Box lineHeight={2}>
          {/* Amount */}
          <Box display="flex" justifyContent="flex-start">
            <Typography variant="h5" fontWeight="bold">
              ${amount}
            </Typography>
          </Box>

          {/* Progress Bar */}
          <Grid container spacing={1} alignItems="center">
            <Grid size={{xs:8}}>
              <Box mt={0.25} width="100%">
                <LinearProgress
                  variant="determinate"
                  value={percentagePaid}
                  color={percentagePaid >= 100 ? "success" : "primary"}
                />
              </Box>
            </Grid>
            <Grid size={{xs:4}}>
              <Box display="flex" justifyContent="flex-end">
                <Typography
                  variant="button"
                  fontWeight="bold"
                  color={percentagePaid >= 100 ? "success.main" : "error.main"}
                >
                  {percentagePaid.toFixed(2)}%
                  <Typography variant="button" fontWeight="regular" color="text.secondary">
                    &nbsp;paid
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Additional Details */}
          <Grid container spacing={1} >
            <Grid size={{xs:6}}>

            <Typography variant="body2" sx={{textAlign:"center"}}>
              <strong>Interest Rate:</strong> {interestRate}%
            </Typography>
            </Grid>
            <Grid size={{xs:6}}>
              
            <Typography variant="body2" sx={{textAlign:"center"}}>
              <strong>Status:</strong> {ConvertStatus()}
            </Typography>
              </Grid>
              <Grid size={{xs:6}}>
              
            <Typography variant="body2" sx={{textAlign:"center"}}>
              <strong>Total Paid:</strong> ${totalPaid}
            </Typography>
              </Grid>
              <Grid size={{xs:6}}>
            <Typography variant="body2" sx={{textAlign:"center"}}>
              <strong>Monthly Installment:</strong> ${monthlyInstallment}
            </Typography>
              
              </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
};

// Setting PropTypes for runtime type checking (optional with TypeScript)v

export default DefaultStatisticsCard;
