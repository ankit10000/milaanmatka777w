import React, { useState, useEffect } from "react";
import { styled, Container, Box, Typography, Link } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
// Replace this line:
// import Sidebar from "./sidebar/Sidebar";
import CustomSidebar from "./sidebar/CustomSidebar";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

const FullLayout = () => {
  useEffect(() => {
    console.log('✅ FullLayout mounted, current path:', window.location.pathname);
  }, []);
  
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <MainWrapper className="mainwrapper">
      {/* Use CustomSidebar */}
      <CustomSidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      
      <PageWrapper className="page-wrapper">
        <Header
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />
        
        <Container
          sx={{
            paddingTop: "20px",
            maxWidth: '1200px!important',
          }}
        >
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
            {console.log('✅ Rendering Outlet')}
            <Outlet />
          </Box>
        </Container>
        
        <Box sx={{pt:6, pb:3, display:'flex', justifyContent:'center'}}>
          <Typography>
            © 2025 All rights reserved by
            <Link target="_blank" href="https://www.adminmart.com">
              <span> AdminMart.com</span>
            </Link>
          </Typography>
          <Typography>
            . Distributed by
            <Link target="_blank" href="https://themewagon.com">
              <span> ThemeWagon</span>
            </Link>
          </Typography>
        </Box>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;