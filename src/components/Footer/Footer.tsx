import { Box, Typography } from "@mui/material";

import { colors } from "../../theme";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,

        textAlign: "center",

        borderTop: `1px solid ${colors.border.primary}`,
      }}
    >
      <Typography
        sx={{
          color: colors.text.secondary,
        }}
      >
        © 2026 Aravinth Baskaran
      </Typography>

      <Typography
        sx={{
          mt: 1,
          color: colors.text.muted,
          fontSize: "0.85rem",
        }}
      >
        Built with ReactJS, TypeScript, Material UI & Vite
      </Typography>
    </Box>
  );
};

export default Footer;
