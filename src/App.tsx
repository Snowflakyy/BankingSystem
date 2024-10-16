// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
// import { ThemeProvider } from 'styled-components';
// import { store } from "./actions/store"
// import { Provider } from 'react-redux';
// import { GlobalStyles,theme } from './styles';
// import * as S from "./pages"
// import { HomePageUser } from './pages/creativeTim/Homepage';
// // import { RequireAuth } from './collections/LoginForm/RequireAuth';
// // import { Welcome } from './collections/LoginForm/RequireAuth/Welcome';
// // import Layout from './actions/Layout';
// function App() {
//   return (
//     <Router>
//       <GlobalStyles/>
//         <Routes>
//           <Route path='/' element={<S.HomePage/>}/>
//           <Route path='/login' element={<S.LoginUpPage/>}/>
//           <Route path='/signup' element={<S.SignUpPage/>}/>
//           <Route path='/duser' element={<HomePageUser/>}/>

//           </Routes>
//           </Router>

//       /* <Router>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element ={<S.HomePage/>}/>
//           <Route path="/login" element={<S.LoginUpPage/>}/>
//           <Route path='/signup' element={<S.SignUpPage/>}/>

//           <Route element={<RequireAuth/>}>
//           <Route path="/welcome" element={<Welcome/>}/>
//           </Route>

//         </Route>
//       </Routes>
//       </Router>
//        */
//   );
// }
// export default App;

// // export default App;

// // import React from "react";
// // import "./App.css";
// // import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// // import Main from "./pages/Main/Main";
// // import Login from "./pages/Login";
// // import Navbar from "./component/Navbar";
// // import CreatePost from "./pages/create-post/CreatePost";
// // import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

// // const queryClient = new QueryClient()

// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //           <QueryClientProvider client={queryClient}>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Main />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/createpost" element={<CreatePost />} />
// //         </Routes>
// //         </QueryClientProvider>
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import Sidenav from "./pages/creativeTim/examples/Sidenav";
import routes from "./routes/routes";
import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "./pages/creativeTim/context";
import * as S from "./pages";
import { ProtectedRoute } from "./routes/ProtectedRoute/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import axios from "axios";
import { Import } from "lucide-react";
import BaseLayout from "./pages/creativeTim/examples/BaseLayout";
import { Chatbot } from "./components";
import { AuthProvider } from "./hooks/useAuth";
interface RouteType {
  collapse?: boolean;
  route?: string;
  component?: React.ReactNode;
  key: string;
}

// const App: React.FC = () => {
//   const [controller, dispatch] = useMaterialUIController();
//   const {
//     miniSidenav,
//     direction,
//     layout,
//     openConfigurator,
//     sidenavColor,
//     transparentSidenav,
//     whiteSidenav,
//     darkMode,
//   } = controller;
//   const [onMouseEnter, setOnMouseEnter] = useState<boolean>(false);

//   // const handleOnMouseEnter = () => {
//   //   if (miniSidenav && !onMouseEnter) {
//   //     setMiniSidenav(dispatch, false);
//   //     setOnMouseEnter(true);
//   //   }
//   // };

//   // const handleOnMouseLeave = () => {
//   //   if (onMouseEnter) {
//   //     setMiniSidenav(dispatch, true);
//   //     setOnMouseEnter(false);
//   //   }
//   // };

//   const handleConfiguratorOpen = () =>
//     setOpenConfigurator(dispatch, !openConfigurator);

//   const getRoutes = (allRoutes: RouteType[]): React.ReactNode =>
//     allRoutes.map((route) => {
//       return (
//         <Route path={route.route} element={route.component} key={route.key} />
//       );
//     });

//   const configsButton = (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       width="3.25rem"
//       height="3.25rem"
//       bgcolor="white"
//       boxShadow={1}
//       borderRadius="50%"
//       position="fixed"
//       right="2rem"
//       bottom="2rem"
//       zIndex={99}
//       color="text.primary"
//       sx={{ cursor: "pointer" }}
//       onClick={handleConfiguratorOpen}
//     >
//       <Icon fontSize="small" color="inherit">
//         settings
//       </Icon>
//     </Box>
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {/* {layout === "dashboard" && (
//         <>
//           <Sidenav
//             color={sidenavColor}
//             brandName="BankAcc Management"
//             routes={routes}
//             // onMouseEnter={handleOnMouseEnter}
//             // onMouseLeave={handleOnMouseLeave}
//           />
//           {configsButton}
//         </>
//       )} */}
//       <Routes>
//         {getRoutes(routes)}
//         <Route path="/duser" element={<HomePageUser />} />
//         <Route path="/login" element={<S.LoginUpPage />} />
//         <Route path="/signup" element={<S.SignUpPage />} />

//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </ThemeProvider>
//   );
// };
const App: React.FC = () => {
  const { user, login, logout } = useAuth();
  const [chatbotVisible, setChatBotVisible] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState<boolean>(false);

  const handleConfiguratorOpen = () => setChatBotVisible(!chatbotVisible);

  const configsButton = (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgcolor="white"
      boxShadow={1}
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="text.primary"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </Box>
  );

  // Function to set the token in the header
  const setAuthHeader = (token: string) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };

  // Set the auth header whenever the user changes
  React.useEffect(() => {
    if (user) {
      const token = localStorage.getItem("token");

      if (token) {
        console.log("neshto");
        setAuthHeader(token);
      }
    }
  }, [user]);
  return (
    <>
      <CssBaseline />

      <BaseLayout>
        {configsButton}
        {chatbotVisible ? <Chatbot /> : <></>}
        <Routes>
          {/* Public routes */}
          <Route path="/signup" element={<S.SignUpPage />} />
          <Route path="/login" element={<S.LoginUpPage />} />
          <Route path="/user-home" element={<S.HomePageUser />} />
          <Route path="/admin-home" element={<S.AdminHome />} />
          <Route
            path="/admin-home/loan-requests"
            element={<S.AdminLoanRequests />}
          />
          <Route
            path="/admin-home/user-profiles"
            element={<S.AdminUserProfiles />}
          >
            <Route path=":userId" element={<S.UserProfileInfo />} />
          </Route>
        </Routes>
      </BaseLayout>
    </>
  );
};

export default App;

// {/* Protected user routes */}
// <Route
//   path="/user-home"
//   element={
//     <ProtectedRoute redirectedPath="/login" isAllowed={!!user}>
//       <S.HomePageUser />
//     </ProtectedRoute>
//   }
// >
//     <Route path="user-profile" element={<S.MyProfile/>}/>
//   <Route path="loans" element={<S.UserLoansPage />}>
//     <Route path="apply" element={<S.ApplyForLoan />} />
//     {/* <Route path="active" element={<ActiveLoans />} /> */}
//   </Route>
//   <Route path="payments" element={<S.UserPayments />} />
//   <Route path="profile" element={<S.MyProfile />} />
//   {/* <Route path="transactions" element={<UserTransactions />} /> */}
// </Route>

// {/* Protected admin routes */}
// <Route
//   path="/admin-home"
//   element={
//     <ProtectedRoute  isAllowed={true}>
//       <S.AdminHome/>
//     </ProtectedRoute>
//   }
// >
//   <Route path="loan-requests" element={<S.AdminLoanRequests />}>
//     <Route path=":requestId" element={<S.LoanRequestInfo />} />
//   </Route>
//   <Route path="user-profiles" element={<S.AdminUserProfiles />}>
//     <Route path=":userId" element={<S.UserProfileInfo />} />
//   </Route>
// </Route>

// {/* Redirect any unmatched routes to home */}
// <Route path="*" element={<Navigate to="/" replace />} />
