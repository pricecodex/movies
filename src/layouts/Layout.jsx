import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: "1920px",
          margin: "0 auto",
          padding: "40px 10px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
