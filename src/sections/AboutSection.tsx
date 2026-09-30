import { Box, Typography } from "@mui/material";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { colors } from "../theme";

const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(17, 24, 39, 0.55)",
        borderTop: `1px solid ${colors.border.primary}`,
        borderBottom: `1px solid ${colors.border.primary}`,
      }}
    >
      <SectionContainer id="about">
        <SectionTitle
          title="About Me"
          sectionId="about"
          subtitle="A frontend-focused software engineer expanding into .NET, microservices, cloud technologies, and AI-enabled development."
        />

        <Typography
          variant="body1"
          sx={{
            maxWidth: "760px",
          }}
        >
          This section will contain your professional summary, career journey,
          current focus, and long-term engineering goals.
        </Typography>
      </SectionContainer>
    </Box>
  );
};

export default AboutSection;
