import { Box, Button, Chip, Stack, Typography } from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { contactInfo } from "../constants/contact";
import { colors, shadows } from "../theme";

const ResumeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(17, 24, 39, 0.55)",
        borderTop: `1px solid ${colors.border.primary}`,
        borderBottom: `1px solid ${colors.border.primary}`,
      }}
    >
      <SectionContainer id="resume" minHeight="70vh">
        <SectionTitle
          title="Resume"
          sectionId="resume"
          subtitle="View or download my latest resume to explore my professional experience, technical expertise, projects, and career journey."
        />

        <Box
          sx={{
            position: "relative",
            maxWidth: "960px",
            mx: "auto",
            overflow: "hidden",
            p: {
              xs: 3,
              sm: 4,
              md: 6,
            },
            textAlign: "center",
            border: `1px solid ${colors.border.primary}`,
            borderRadius: {
              xs: "20px",
              md: "28px",
            },
            background:
              "linear-gradient(145deg, rgba(30, 41, 59, 0.78), rgba(15, 23, 42, 0.75))",
            boxShadow: shadows.card,
            backdropFilter: "blur(18px)",
            transition:
              "transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease",

            "&:hover": {
              transform: "translateY(-4px)",
              borderColor: "rgba(96, 165, 250, 0.45)",
              boxShadow: "0 24px 60px rgba(37, 99, 235, 0.16)",
            },
          }}
        >
          {/* Decorative glow */}
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: "-120px",
              left: "50%",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              backgroundColor: "rgba(37, 99, 235, 0.14)",
              filter: "blur(90px)",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                width: {
                  xs: "72px",
                  md: "84px",
                },
                height: {
                  xs: "72px",
                  md: "84px",
                },
                mb: 3,
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(96, 165, 250, 0.35)",
                borderRadius: "22px",
                color: colors.common.white,
                background: `linear-gradient(
                  135deg,
                  ${colors.primary.main},
                  ${colors.secondary.dark}
                )`,
                boxShadow: shadows.glow,
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "2.4rem",
                  },
                }}
              />
            </Box>

            <Typography
              component="h3"
              variant="h4"
              sx={{
                color: colors.text.primary,
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              Aravinth Baskaran
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: colors.primary.light,
                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
                fontWeight: 700,
              }}
            >
              Senior Software Engineer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: "680px",
                mx: "auto",
                mt: 2.5,
                color: colors.text.secondary,
                lineHeight: 1.8,
              }}
            >
              Frontend-focused software engineer expanding into full-stack
              development using React, TypeScript, C#, ASP.NET Core,
              Microservices, Cloud, and AI technologies.
            </Typography>

            <Stack
              direction="row"
              useFlexGap
              spacing={1}
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                mt: 3,
              }}
            >
              {["React & TypeScript", "C# & .NET", "Cloud & AI"].map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    color: colors.primary.light,
                    border: `1px solid ${colors.primary.main}`,
                    backgroundColor: "rgba(37, 99, 235, 0.08)",
                    fontWeight: 600,
                  }}
                />
              ))}
            </Stack>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1.5}
              sx={{
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Button
                component="a"
                href={contactInfo.resume}
                download="Aravinth_Baskaran_Resume.pdf"
                variant="contained"
                startIcon={<DownloadRoundedIcon />}
                aria-label="Download Aravinth Baskaran resume"
                sx={{
                  minHeight: "52px",
                  px: 3.5,
                  color: colors.common.white,
                  background: `linear-gradient(
                    135deg,
                    ${colors.primary.main},
                    ${colors.secondary.dark}
                  )`,
                  boxShadow: shadows.button,
                  transition: "transform 200ms ease, box-shadow 200ms ease",

                  "&:hover": {
                    transform: "translateY(-2px)",
                    background: `linear-gradient(
                      135deg,
                      ${colors.primary.light},
                      ${colors.secondary.main}
                    )`,
                    boxShadow: "0 14px 36px rgba(37, 99, 235, 0.32)",
                  },
                }}
              >
                Download Resume
              </Button>

              <Button
                component="a"
                href={contactInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<VisibilityOutlinedIcon />}
                aria-label="View Aravinth Baskaran resume in a new tab"
                sx={{
                  minHeight: "52px",
                  px: 3.5,
                  color: colors.text.primary,
                  borderColor: "rgba(148, 163, 184, 0.36)",
                  backgroundColor: "rgba(15, 23, 42, 0.35)",
                  backdropFilter: "blur(10px)",

                  "&:hover": {
                    borderColor: colors.primary.light,
                    backgroundColor: "rgba(37, 99, 235, 0.1)",
                  },
                }}
              >
                View Resume
              </Button>
            </Stack>
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default ResumeSection;
