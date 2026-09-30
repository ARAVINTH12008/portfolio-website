import { Box, Typography, Chip } from "@mui/material";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { colors } from "../theme";

import { learningJourney } from "../constants/learning";

import { certifications } from "../constants/certifications";

const LearningSection = () => {
  return (
    <SectionContainer id="learning">
      <SectionTitle
        title="Learning & Certifications"
        sectionId="learning"
        subtitle="Continuous learning focused on Full-Stack Development, Cloud Technologies and Artificial Intelligence."
      />

      {/* Learning Timeline */}

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: colors.text.primary,
          fontWeight: 700,
        }}
      >
        My Learning Journey
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          mb: 8,
        }}
      >
        {learningJourney.map((item) => (
          <Box
            key={item.title}
            sx={{
              p: 4,

              borderRadius: "20px",

              border: `1px solid ${colors.border.primary}`,

              background: "rgba(15,23,42,0.55)",

              transition: "0.3s",

              "&:hover": {
                borderColor: colors.primary.main,
              },
            }}
          >
            <Typography
              sx={{
                color: colors.secondary.light,

                fontWeight: 700,

                mb: 1,
              }}
            >
              {item.year}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: colors.text.primary,

                mb: 2,

                fontWeight: 700,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: colors.text.secondary,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Certifications */}

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: colors.text.primary,
          fontWeight: 700,
        }}
      >
        Certifications & Learning Programs
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },

          gap: 3,
        }}
      >
        {certifications.map((item) => (
          <Box
            key={item.title}
            sx={{
              p: 3,

              borderRadius: "18px",

              border: `1px solid ${colors.border.primary}`,

              background: "rgba(15,23,42,0.55)",
            }}
          >
            <Typography
              sx={{
                mb: 2,
                color: colors.text.primary,
                fontWeight: 700,
              }}
            >
              {item.title}
            </Typography>

            <Chip
              label={item.provider}
              sx={{
                color: colors.primary.light,

                border: `1px solid ${colors.primary.main}`,

                background: "rgba(37,99,235,0.08)",
              }}
            />
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default LearningSection;
