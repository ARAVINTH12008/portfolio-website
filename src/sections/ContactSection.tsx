import { Box, Button, Stack, Typography } from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { contactInfo } from "../constants/contact";
import { colors } from "../theme";

const ContactSection = () => {
  const emailLink = `mailto:${contactInfo.email}?subject=Portfolio enquiry for Aravinth Baskaran`;

  return (
    <SectionContainer id="contact" minHeight="70vh">
      <SectionTitle
        title="Let's Connect"
        sectionId="contact"
        subtitle="Feel free to reach out for professional opportunities, technical discussions, collaborations, or software engineering projects."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: {
            xs: 3,
            md: 4,
          },
        }}
      >
        {/* Contact information card */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            border: `1px solid ${colors.border.primary}`,
            borderRadius: {
              xs: "20px",
              md: "24px",
            },
            background:
              "linear-gradient(145deg, rgba(30, 41, 59, 0.72), rgba(15, 23, 42, 0.7))",
            backdropFilter: "blur(16px)",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              backgroundColor: "rgba(6, 182, 212, 0.1)",
              filter: "blur(75px)",
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              component="h3"
              variant="h4"
              sx={{
                color: colors.text.primary,
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              Have an opportunity or idea?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: "560px",
                mt: 2,
                color: colors.text.secondary,
                lineHeight: 1.8,
              }}
            >
              I am interested in discussing frontend, full-stack, .NET, cloud,
              and AI-focused engineering opportunities. Send an email or connect
              with me through LinkedIn and GitHub.
            </Typography>

            <Stack
              spacing={2.5}
              sx={{
                mt: 4,
              }}
            >
              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(96, 165, 250, 0.25)",
                    borderRadius: "12px",
                    color: colors.primary.light,
                    backgroundColor: "rgba(37, 99, 235, 0.08)",
                  }}
                >
                  <EmailOutlinedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: colors.text.muted,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Email
                  </Typography>

                  <Typography
                    component="a"
                    href={emailLink}
                    sx={{
                      display: "inline-block",
                      mt: 0.4,
                      color: colors.text.primary,
                      fontWeight: 600,
                      textDecoration: "none",
                      wordBreak: "break-word",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {contactInfo.email}
                  </Typography>
                </Box>
              </Box>

              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(96, 165, 250, 0.25)",
                    borderRadius: "12px",
                    color: colors.primary.light,
                    backgroundColor: "rgba(37, 99, 235, 0.08)",
                  }}
                >
                  <PhoneOutlinedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: colors.text.muted,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Phone
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.4,
                      color: colors.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    {contactInfo.phone}
                  </Typography>
                </Box>
              </Box>

              {/* Location */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "42px",
                    height: "42px",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(103, 232, 249, 0.25)",
                    borderRadius: "12px",
                    color: colors.secondary.light,
                    backgroundColor: "rgba(6, 182, 212, 0.08)",
                  }}
                >
                  <LocationOnOutlinedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: colors.text.muted,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Location
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.4,
                      color: colors.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    {contactInfo.location}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Social links card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            border: `1px solid ${colors.border.primary}`,
            borderRadius: {
              xs: "20px",
              md: "24px",
            },
            backgroundColor: "rgba(15, 23, 42, 0.55)",
            backdropFilter: "blur(16px)",
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            sx={{
              color: colors.text.primary,
              fontWeight: 800,
            }}
          >
            Professional Profiles
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 1.5,
              color: colors.text.secondary,
            }}
          >
            Explore my source code, projects, professional network, and
            development journey.
          </Typography>

          <Stack
            spacing={1.5}
            sx={{
              mt: 4,
            }}
          >
            {/* LinkedIn */}
            <Button
              component="a"
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<LinkedInIcon />}
              endIcon={<ArrowOutwardRoundedIcon />}
              aria-label="Open Aravinth Baskaran LinkedIn profile"
              sx={{
                minHeight: "54px",
                justifyContent: "flex-start",
                px: 2.5,
                color: colors.text.primary,
                borderColor: "rgba(96, 165, 250, 0.32)",
                backgroundColor: "rgba(37, 99, 235, 0.06)",

                "& .MuiButton-endIcon": {
                  ml: "auto",
                },

                "&:hover": {
                  borderColor: colors.primary.light,
                  backgroundColor: "rgba(37, 99, 235, 0.14)",
                },
              }}
            >
              LinkedIn
            </Button>

            {/* GitHub */}
            <Button
              component="a"
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              endIcon={<ArrowOutwardRoundedIcon />}
              aria-label="Open Aravinth Baskaran GitHub profile"
              sx={{
                minHeight: "54px",
                justifyContent: "flex-start",
                px: 2.5,
                color: colors.text.primary,
                borderColor: "rgba(148, 163, 184, 0.32)",
                backgroundColor: "rgba(148, 163, 184, 0.05)",

                "& .MuiButton-endIcon": {
                  ml: "auto",
                },

                "&:hover": {
                  borderColor: colors.text.secondary,
                  backgroundColor: "rgba(148, 163, 184, 0.12)",
                },
              }}
            >
              GitHub
            </Button>

            {/* Email */}
            <Button
              component="a"
              href={emailLink}
              variant="contained"
              startIcon={<EmailOutlinedIcon />}
              endIcon={<ArrowOutwardRoundedIcon />}
              aria-label="Send an email to Aravinth Baskaran"
              sx={{
                minHeight: "54px",
                justifyContent: "flex-start",
                px: 2.5,
                color: colors.common.white,
                background: `linear-gradient(
                  135deg,
                  ${colors.primary.main},
                  ${colors.secondary.dark}
                )`,
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",

                "& .MuiButton-endIcon": {
                  ml: "auto",
                },

                "&:hover": {
                  background: `linear-gradient(
                    135deg,
                    ${colors.primary.light},
                    ${colors.secondary.main}
                  )`,
                  boxShadow: "0 12px 34px rgba(37, 99, 235, 0.32)",
                },
              }}
            >
              Send Email
            </Button>
          </Stack>

          <Box
            sx={{
              mt: "auto",
              pt: 4,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: colors.text.muted,
              }}
            >
              Senior Software Engineer
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                color: colors.text.muted,
                fontSize: "0.78rem",
              }}
            >
              React, TypeScript, .NET, Cloud and AI
            </Typography>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default ContactSection;
