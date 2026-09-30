import type { ReactNode } from "react";
import { Box, Container } from "@mui/material";

import { layout } from "../../constants/layout";

interface SectionContainerProps {
  children: ReactNode;
  id: string;
  minHeight?: string | number;
  maxWidth?: string;
  disableVerticalPadding?: boolean;
}

const SectionContainer = ({
  children,
  id,
  minHeight = "60vh",
  maxWidth = layout.contentWidth,
  disableVerticalPadding = false,
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
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: `${maxWidth} !important`,

          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
            lg: 6,
            xl: 7,
          },

          py: disableVerticalPadding
            ? 0
            : {
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
