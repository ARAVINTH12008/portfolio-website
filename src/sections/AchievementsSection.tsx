import { Box, Typography } from "@mui/material";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { achievements } from "../constants/achievements";
import { colors } from "../theme";

const AchievementsSection = () => {
  return (
    <SectionContainer id="achievements">
      <SectionTitle
        title="Career Highlights"
        sectionId="achievements"
        subtitle="Key milestones, professional growth and continuous learning achievements throughout my engineering journey."
      />

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          },

          gap: 4,
        }}
      >
        {achievements.map((item) => (
          <Box
            key={item.title}
            sx={{
              p: 4,

              borderRadius: "24px",

              border: `1px solid ${colors.border.primary}`,

              background: "rgba(15,23,42,0.55)",

              transition: "0.3s ease",

              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: colors.primary.main,

                boxShadow: "0 20px 40px rgba(37,99,235,0.18)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                mb: 2,
              }}
            >
              {item.icon}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: colors.text.primary,
                fontWeight: 700,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: colors.text.secondary,
                lineHeight: 1.8,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default AchievementsSection;
