import type { ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface SectionContainerProps {
  children: ReactNode;
  id: string;
  minHeight?: string | number;
}

const SectionContainer = ({
  children,
  id,
  minHeight = "60vh",
}: SectionContainerProps) => {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-section-title`}
      sx={{
        position: "relative",
        minHeight,
        scrollMarginTop: "72px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          maxWidth: "1280px !important",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
            lg: 6,
          },
          py: {
            xs: 9,
            sm: 11,
            md: 13,
            lg: 15,
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
