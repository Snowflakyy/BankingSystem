import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as _actions from "../../actions/DLoans"
import { connect, useDispatch } from "react-redux";
import { DLoanState } from "@/types";
import { LoanProps } from "../../types/form"; // Ensure LoanProps is correctly defined



export const LoanApprovalToConnect = (props:any) => {  
   
   // loaninfo -> after get loan/id
const loanInfo = {
    name: "John Doe",
    age: 26,
    months: "78",
    amount: "5000",
    score1: 85,
    score2: 92,
    type: "Personal Loan",
    currency: "Bgn",
    id: "1"
  };


  
  const handleApprove =async (event:any, id:any) => {
    event.preventDefault();
    const loanData: LoanProps = {
    //   "amount":"20000",
    // "currencytype":"Eur",
    // "loantype":"Personal",
    // "DurationInMonths":"30",
    // "loanstatus": "Active"
        LoanType: loanInfo.type,
        amount: loanInfo.amount,
        DurationInMonths: loanInfo.months,
        CurrencyType: loanInfo.currency,
        LoanStatus:"Active"
      };

    // if (Object.keys(loanData).every(key => loanData[key as keyof LoanProps] !== null)) {
		
		try {
        const response = await props.approveLoan(id,loanData);
		if(response){
			// navigate("/")
		}
      } catch (error) {
        console.error("Approval failed:", error);
      }
    // } else {
    //   console.error("Please fill in all fields.");
    // }
//   };

    console.log("Loan Approved");
  };

  const handleDecline = () => {
    console.log("Loan Declined");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3} maxWidth="md" direction="column">
        <Grid>
          <h1>Loan Approval Details</h1>
        </Grid>

        <Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>{loanInfo.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Age</strong>
                  </TableCell>
                  <TableCell>{loanInfo.age}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Credit score</strong>
                  </TableCell>
                  <TableCell>{loanInfo.score1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Risk assesment score</strong>
                  </TableCell>
                  <TableCell>{loanInfo.score2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Amount</strong>
                  </TableCell>
                  <TableCell>${loanInfo.amount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Weeks to repay</strong>
                  </TableCell>
                  <TableCell>{loanInfo.months}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <strong>Type</strong>
                  </TableCell>
                  <TableCell>{loanInfo.type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => handleApprove(event, loanInfo.id)} 
              >
                Approve
              </Button>
            </Grid>
            <Grid>
              <Button
               variant="contained" 
               color="error" 
               onClick={handleDecline}
               >
                Decline
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state:DLoanState) =>{
	return({
	 
  })
  }
const mapActionsToProps={
	
	approveLoan:_actions.update,
  }
  export const LoanApprove = connect(mapStateToProps,mapActionsToProps)(LoanApprovalToConnect);
