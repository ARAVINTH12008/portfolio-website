import { Box, Chip, Typography } from "@mui/material";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { colors } from "../theme";
import { aboutProfile } from "../constants/about";
import { careerTimeline } from "../constants/careerTimeline";

const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(17,24,39,0.55)",
        borderTop: `1px solid ${colors.border.primary}`,
        borderBottom: `1px solid ${colors.border.primary}`,
      }}
    >
      <SectionContainer id="about">
        <SectionTitle
          title="About Me"
          sectionId="about"
          subtitle="My professional journey, technical expertise and continuous learning mindset."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.2fr 0.8fr",
            },
            gap: 4,
          }}
        >
          {/* Left Card */}

          <Box
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "rgba(15,23,42,0.6)",
              border: `1px solid ${colors.border.primary}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: colors.text.primary,
                fontWeight: 700,
              }}
            >
              Professional Summary
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                lineHeight: 2,
                whiteSpace: "pre-line",
              }}
            >
              {aboutProfile.summary}
            </Typography>
          </Box>

          {/* Right Card */}

          <Box
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "rgba(15,23,42,0.6)",
              border: `1px solid ${colors.border.primary}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: colors.text.primary,
                fontWeight: 700,
              }}
            >
              Current Focus
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {aboutProfile.currentFocus.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    color: colors.primary.light,
                    border: `1px solid ${colors.primary.main}`,
                    background: "rgba(37,99,235,0.08)",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Career Journey */}

        <Box
          sx={{
            mt: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 5,
              color: colors.text.primary,
              fontWeight: 700,
            }}
          >
            Career Journey
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 3,
            }}
          >
            {careerTimeline.map((item) => (
              <Box
                key={item.year}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  background: "rgba(15,23,42,0.5)",
                  border: `1px solid ${colors.border.primary}`,
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
                  variant="h6"
                  sx={{
                    color: colors.text.primary,
                    fontWeight: 700,
                    mb: 1,
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
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default AboutSection;
