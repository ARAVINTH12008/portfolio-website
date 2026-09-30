import type { ReactNode } from "react";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { colors } from "../theme";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        color: colors.text.primary,
        backgroundColor: "transparent",
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          position: "relative",
          pt: "72px",
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
