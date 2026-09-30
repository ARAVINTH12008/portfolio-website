import { Box, Chip, Typography } from "@mui/material";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { colors } from "../theme";
import { experienceData } from "../constants/experience";

const ExperienceSection = () => {
  return (
    <SectionContainer id="experience">
      <SectionTitle
        title="Professional Experience"
        sectionId="experience"
        subtitle="My career progression from frontend development to enterprise solutions, cloud technologies and AI."
      />

      <Box
        sx={{
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            left: {
              xs: "16px",
              md: "24px",
            },
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: colors.border.primary,
          },
        }}
      >
        {experienceData.map((item) => (
          <Box
            key={`${item.company}-${item.duration}`}
            sx={{
              position: "relative",
              pl: {
                xs: 6,
                md: 8,
              },
              mb: 5,
            }}
          >
            {/* Timeline Dot */}

            <Box
              sx={{
                position: "absolute",
                left: {
                  xs: "8px",
                  md: "16px",
                },
                top: "20px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: colors.primary.main,
                border: `3px solid ${colors.background.primary}`,
              }}
            />

            {/* Experience Card */}

            <Box
              sx={{
                p: 4,
                borderRadius: "20px",
                border: `1px solid ${colors.border.primary}`,
                background: "rgba(15,23,42,0.55)",

                transition: "0.3s",

                "&:hover": {
                  borderColor: colors.primary.main,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  color: colors.secondary.light,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {item.duration}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: colors.text.primary,
                  fontWeight: 700,
                }}
              >
                {item.designation}
              </Typography>

              {item.careerTrack && (
                <Typography
                  sx={{
                    mt: 0.75,
                    color: colors.primary.light,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  {item.careerTrack}
                </Typography>
              )}

              <Typography
                sx={{
                  mt: 1,
                  mb: 2,
                  color: colors.text.secondary,
                }}
              >
                {item.company} • {item.location}
              </Typography>

              <Typography
                sx={{
                  color: colors.text.secondary,
                  mb: 3,
                }}
              >
                {item.description}
              </Typography>

              {/* Technologies */}

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 3,
                }}
              >
                {item.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      color: colors.primary.light,
                      border: `1px solid ${colors.primary.main}`,
                      background: "rgba(37,99,235,0.08)",
                    }}
                  />
                ))}
              </Box>

              {/* Achievements */}

              <Box>
                {item.achievements.map((achievement) => (
                  <Typography
                    key={achievement}
                    sx={{
                      color: colors.text.secondary,
                      mb: 1,
                    }}
                  >
                    • {achievement}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default ExperienceSection;
