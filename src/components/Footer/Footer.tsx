import { Box, Typography } from "@mui/material";
import { colors } from "../../theme";

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: `1px solid ${colors.border.primary}`,
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography color={colors.text.secondary}>
        © 2026 Aravinth Baskaran
      </Typography>
    </Box>
  );
};

export default Footer;
