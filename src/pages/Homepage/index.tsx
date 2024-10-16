// // /**
// // =========================================================
// // * Material Dashboard 2 PRO React - v2.1.0
// // =========================================================

// // * Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
// // * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// // Coded by www.creative-tim.com

// //  =========================================================

// // * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// // */

// // import { useState } from "react";

// // // @mui material components
// // import Grid from "@mui/material/Grid";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import Icon from "@mui/material/Icon";

// // // Material Dashboard 2 PRO React components
// // import MDBox from "components/MDBox";
// // import MDTypography from "components/MDTypography";
// // import MDButton from "components/MDButton";

// // // Material Dashboard 2 PRO React examples
// // import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// // import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// // import Footer from "examples/Footer";
// // import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";

// // // Project page components
// // import Header from "layouts/pages/profile/components/Header";

// // // Images
// // import team1 from "assets/images/team-1.jpg";
// // import team2 from "assets/images/team-2.jpg";
// // import team3 from "assets/images/team-3.jpg";
// // import team4 from "assets/images/team-4.jpg";
// // import team5 from "assets/images/team-5.jpg";
// // import logoSlack from "assets/images/small-logos/logo-slack.svg";
// // import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// // import logoXD from "assets/images/small-logos/logo-xd.svg";
// // import logoAsana from "assets/images/small-logos/logo-asana.svg";
// // import logoInvision from "assets/images/small-logos/logo-invision.svg";
// // import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

// // function AllProjects() {
// //   // ComplexProjectCard dropdown menu state
// //   const [slackBotMenu, setSlackBotMenu] = useState(null);
// //   const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
// //   const [designToolsMenu, setDesignToolsMenu] = useState(null);
// //   const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
// //   const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

// //   // TeamProfileCard dropdown menu handlers
// //   const openSlackBotMenu = (event) => setSlackBotMenu(event.currentTarget);
// //   const closeSlackBotMenu = () => setSlackBotMenu(null);
// //   const openPremiumSupportMenu = (event) => setPremiumSupportMenu(event.currentTarget);
// //   const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
// //   const openDesignToolsMenu = (event) => setDesignToolsMenu(event.currentTarget);
// //   const closeDesignToolsMenu = () => setDesignToolsMenu(null);
// //   const openLookingGreatMenu = (event) => setLookingGreatMenu(event.currentTarget);
// //   const closeLookingGreatMenu = () => setLookingGreatMenu(null);
// //   const openDeveloperFirstMenu = (event) => setDeveloperFirstMenu(event.currentTarget);
// //   const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

// //   // Dropdown menu template for the ComplexProjectCard
// //   const renderMenu = (state, close) => (
// //     <Menu
// //       anchorEl={state}
// //       anchorOrigin={{ vertical: "top", horizontal: "left" }}
// //       transformOrigin={{ vertical: "top", horizontal: "right" }}
// //       open={Boolean(state)}
// //       onClose={close}
// //       keepMounted
// //     >
// //       <MenuItem onClick={close}>Action</MenuItem>
// //       <MenuItem onClick={close}>Another action</MenuItem>
// //       <MenuItem onClick={close}>Something else here</MenuItem>
// //     </Menu>
// //   );

// //   return (
// //     <DashboardLayout>
// //       <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
// //         <DashboardNavbar light absolute />
// //       </MDBox>
// //       <Header />
// //       <MDBox pb={3}>
// //         <Grid container alignItems="center">
// //           <Grid item xs={12} md={7}>
// //             <MDBox mb={1}>
// //               <MDTypography variant="h5">Some of Our Awesome Projects</MDTypography>
// //             </MDBox>
// //             <MDBox mb={2}>
// //               <MDTypography variant="body2" color="text">
// //                 This is the paragraph where you can write more details about your projects. Keep you
// //                 user engaged by providing meaningful information.
// //               </MDTypography>
// //             </MDBox>
// //           </Grid>
// //           <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
// //             <MDButton variant="gradient" color="info">
// //               <Icon>add</Icon>&nbsp; Add New
// //             </MDButton>
// //           </Grid>
// //         </Grid>
// //         <MDBox mt={5}>
// //           <Grid container spacing={3}>
// //             <Grid item xs={12} md={6} lg={4}>
// //               <MDBox mb={1.5} mt={1.5}>
// //                 <ComplexProjectCard
// //                   image={logoSlack}
// //                   title="slack bot"
// //                   description="If everything I did failed - which it doesn't, I think that it actually succeeds."
// //                   dateTime="02.03.22"
// //                   members={[team1, team2, team3, team4, team5]}
// //                   dropdown={{
// //                     action: openSlackBotMenu,
// //                     menu: renderMenu(slackBotMenu, closeSlackBotMenu),
// //                   }}
// //                 />
// //               </MDBox>
// //             </Grid>
// //             <Grid item xs={12} md={6} lg={4}>
// //               <MDBox mb={1.5} mt={1.5}>
// //                 <ComplexProjectCard
// //                   image={logoSpotify}
// //                   title="premium support"
// //                   description="Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you."
// //                   dateTime="22.11.21"
// //                   members={[team1, team2, team3]}
// //                   dropdown={{
// //                     action: openPremiumSupportMenu,
// //                     menu: renderMenu(premiumSupportMenu, closePremiumSupportMenu),
// //                   }}
// //                 />
// //               </MDBox>
// //             </Grid>
// //             <Grid item xs={12} md={6} lg={4}>
// //               <MDBox mb={1.5} mt={1.5}>
// //                 <ComplexProjectCard
// //                   image={logoXD}
// //                   title="design tools"
// //                   description="Constantly growing. We’re constantly making mistakes from which we learn and improve."
// //                   dateTime="06.03.20"
// //                   members={[team1, team2, team3, team4]}
// //                   dropdown={{
// //                     action: openDesignToolsMenu,
// //                     menu: renderMenu(designToolsMenu, closeDesignToolsMenu),
// //                   }}
// //                 />
// //               </MDBox>
// //             </Grid>
// //             <Grid item xs={12} md={6} lg={4}>
// //               <MDBox mb={1.5} mt={1.5}>
// //                 <ComplexProjectCard
// //                   image={logoAsana}
// //                   title="looking great"
// //                   description="You have the opportunity to play this game of life you need to appreciate every moment."
// //                   dateTime="14.03.24"
// //                   members={[team1, team2, team3, team4, team5, team3]}
// //                   dropdown={{
// //                     action: openLookingGreatMenu,
// //                     menu: renderMenu(lookingGreatMenu, closeLookingGreatMenu),
// //                   }}
// //                 />
// //               </MDBox>
// //             </Grid>
// //             <Grid item xs={12} md={6} lg={4}>
// //               <MDBox mb={1.5} mt={1.5}>
// //                 <ComplexProjectCard
// //                   image={logoInvision}
// //                   title="developer first"
// //                   description="For standing out. But the time is now to be okay to be the greatest you."
// //                   dateTime="16.01.22"
// //                   members={[team1, team2, team3, team4]}
// //                   dropdown={{
// //                     action: openDeveloperFirstMenu,
// //                     menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
// //                   }}
// //                 />
// //               </MDBox>
// //             </Grid>
// //             <Grid item xs={12} md={6} lg={4}>
// //               <MDBox mb={1.5} mt={1.5}>
// //                 <ComplexProjectCard
// //                   image={logoAtlassian}
// //                   title="Product Development"
// //                   description="We strive to embrace and drive change in our industry. We are happy to work at such a project."
// //                   dateTime="16.01.22"
// //                   members={[team1, team2, team3, team4]}
// //                   dropdown={{
// //                     action: openDeveloperFirstMenu,
// //                     menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
// //                   }}
// //                 />
// //               </MDBox>
// //             </Grid>
// //           </Grid>
// //         </MDBox>
// //       </MDBox>
// //       <Footer />
// //     </DashboardLayout>
// //   );
// // }

// // export default AllProjects;

// import { useState } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Icon from "@mui/material/Icon";
import { Box, Typography } from "@mui/material";
// // Material Dashboard 2 PRO React components

// // Material Dashboard 2 PRO React examples
// import DashboardLayout from "../readySections/dashBoardLayout";
// import DashboardNavbar from "../readySections/dashBoardNavbar";
import { DAccountState, DLoanState } from "@/types";
import ComplexProjectCard  from "../creativeTim/examples/ComplexProjectCard";
import DashboardLayout from "../creativeTim/readySections/dashBoardLayout";
import { Grid2 as Grid } from "@mui/material";
import DashboardNavbar from "../creativeTim/readySections/dashBoardNavbar";
import BaseLayout from "../creativeTim/examples/BaseLayout";
import DefaultStatisticsCard from "../creativeTim/examples/DefaultStatisticCard";
import Transaction from "../creativeTim/examples/Transaction";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "@/actions/store";
import * as _actionsAcc from "../../actions/DAccounts"
import * as _actionsLoans from "../../actions/DLoans"

import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

 const HomePageUserToConnect = (props:any) => {

  const {user,isLoading : authLoading} = useAuth()
  const [isLoading, setIsLoading ] = useState(true);
  const [cardProps, setCardProps] = useState<DAccountState[]>([]) 
  const [loansProps,setLoansProps] = useState<DLoanState[]>([])
  useEffect(()=>{
console.log("CardProps are ",cardProps)
  },[cardProps])
    // balance is optional, so you can leave it out or initial
    useEffect(() => {
    const fetchDataAccounts = async () => {
    if(user){
      console.log("The user after authroization is: ",user)
      try{
        await props.getAccounts();
        if(props.dAccountList){
          setCardProps(props.dAccountList)
        }
      }catch(error){
        console.log("Error handling fetching accounts:",error)
      }finally{
        setIsLoading(false)
      }
    }
    };

    const fetchDataLoans = async() =>{
      if(user){
        try{
          await props.getLoans();
          if(props.dLoansList){
            setLoansProps(props.dLoansList)
          }
        }catch(error){
          console.log("Error handling fetching accounts:",error)
        }finally{
          setIsLoading(false)
        }
      }
    }
    if(!authLoading){

      fetchDataAccounts();
      fetchDataLoans();
    }
  }, [user,authLoading,props.getAccounts]);

  if ( authLoading || isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box display="flex" flexDirection="column" gap={8}>
      <Typography variant="h3" color="inherit">
        Account
      </Typography>
      <Box mt={2}>
        <Grid container spacing={3}>
          {cardProps.map((account,index)=>{
            return(
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <ComplexProjectCard
              key={index}
                accountType={account.accountType}
                dateOpened={account.dateOpened}
                status={account.status}
                balance={account.balance}
              />
            </Grid>
            )
          })}
        </Grid>
      </Box>
      <Typography variant="h5" color="inherit">
        Active Loans
      </Typography>
      <Grid container spacing={2}>
      {loansProps.map((loan,index)=>{
        if(loan.status!==1){
          return null;
        }
            return(
              
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <DefaultStatisticsCard
              key={index}
                amount={loan.amount}
                interestRate={loan.interestRate}
                status = {loan.status}
                totalPaid={loan.totalPaid}
                monthlyInstallment={loan.monthlyInstallment}
                endDate={loan.endDate}
              />
            </Grid>
            )
          })}
        {/* <Grid size={{ lg: 4, md: 6, sm: 12 }}>
          <DefaultStatisticsCard
            title="Customers"
            count="3.200"
            percentage={{
              color: "success",
              value: "+12%",
              label: "since last month",
            }}
            date="2020/04/02" // Or true, depending on your use case
          />
        </Grid>
        <Grid size={{ lg: 4, md: 6, sm: 12 }}>
          <DefaultStatisticsCard
            title="Customers"
            count="3.200"
            percentage={{
              color: "success",
              value: "+12%",
              label: "since last month",
            }}
            date="2020/04/02" // Or true, depending on your use case
          />
        </Grid>
        <Grid size={{ lg: 4, md: 6, sm: 12 }}>
          <DefaultStatisticsCard
            title="Customers"
            count="3.200"
            percentage={{
              color: "success",
              value: "+12%",
              label: "since last month",
            }}
            date="2020/04/02" // Or true, depending on your use case
          />
        </Grid> */}
      </Grid>
      <Grid container>
        <Grid size={{lg:6,sm:12}}>
          <Box display="flex" flexDirection="column" gap={4} >
          <Transaction
            color="dark"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
           <Transaction
            color="dark"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
           <Transaction
            color="error"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
          </Box>
        </Grid>
        <Grid size={{lg:6,sm:12}}>
              {/* <Box>
                <PieChart/>
              </Box> */}
        </Grid>
      </Grid>
    </Box> 
  );
};
const mapStateToProps = (state:RootState) =>{

  return{
    dAccountList:state.DAccount.list,
    dLoansList : state.DLoans.list
}
}
const mapActionsToProps={
  getAccounts: _actionsAcc.fetchAll,
  getLoans : _actionsLoans.fetchAll
  // updateduSer:_actions.update,
}
export const HomePageUser = connect(mapStateToProps,mapActionsToProps)(HomePageUserToConnect)
