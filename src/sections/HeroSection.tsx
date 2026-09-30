import { useEffect, useState } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import { layout } from "../constants/layout";
import { portfolioProfile } from "../constants/portfolio";
import { colors, shadows } from "../theme";

const MotionBox = motion.create(Box);

const HeroSection = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const roleInterval = window.setInterval(() => {
      setActiveRoleIndex(
        (currentIndex) =>
          (currentIndex + 1) % portfolioProfile.rotatingRoles.length,
      );
    }, 2600);

    return () => {
      window.clearInterval(roleInterval);
    };
  }, [shouldReduceMotion]);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      return;
    }

    targetSection.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${colors.border.primary}`,
      }}
    >
      {/* Decorative background grid */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.22,
          backgroundImage: `
            linear-gradient(
              rgba(148, 163, 184, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
          pointerEvents: "none",
        }}
      />

      {/* Left gradient glow */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "5%",
          left: {
            xs: "-180px",
            md: "-100px",
          },
          width: {
            xs: "360px",
            md: "520px",
          },
          height: {
            xs: "360px",
            md: "520px",
          },
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.13)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Right gradient glow */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          right: {
            xs: "-190px",
            lg: "-60px",
          },
          bottom: "4%",
          width: {
            xs: "380px",
            md: "560px",
          },
          height: {
            xs: "380px",
            md: "560px",
          },
          borderRadius: "50%",
          background: "rgba(6, 182, 212, 0.1)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      <SectionContainer
        id="home"
        maxWidth={layout.heroWidth}
        minHeight="calc(100vh - 72px)"
        disableVerticalPadding
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            minHeight: "calc(100vh - 72px)",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 1.15fr) minmax(380px, 0.85fr)",
            },
            alignItems: "center",
            gap: {
              xs: 7,
              md: 9,
              lg: 10,
            },
            py: {
              xs: 8,
              sm: 10,
              md: 11,
              lg: 9,
            },
          }}
        >
          {/* Left content */}
          <MotionBox
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
              width: "100%",
              maxWidth: {
                xs: "720px",
                lg: "800px",
              },
              mx: {
                xs: "auto",
                lg: 0,
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            {/* Availability badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: {
                  xs: 3,
                  md: 3.5,
                },
                px: 1.5,
                py: 0.75,
                border: `1px solid rgba(94, 234, 212, 0.25)`,
                borderRadius: "999px",
                color: colors.accent.light,
                backgroundColor: "rgba(20, 184, 166, 0.08)",
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  position: "relative",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: colors.success,

                  "&::after": {
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "50%",
                    content: '""',
                    backgroundColor: "rgba(34, 197, 94, 0.22)",
                    animation: shouldReduceMotion
                      ? "none"
                      : "availabilityPulse 2s infinite",
                  },

                  "@keyframes availabilityPulse": {
                    "0%": {
                      opacity: 0.8,
                      transform: "scale(0.7)",
                    },

                    "70%": {
                      opacity: 0,
                      transform: "scale(1.8)",
                    },

                    "100%": {
                      opacity: 0,
                      transform: "scale(1.8)",
                    },
                  },
                }}
              />

              <Typography
                component="span"
                sx={{
                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.78rem",
                  },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {portfolioProfile.availability}
              </Typography>
            </Box>

            <Typography
              component="p"
              sx={{
                mb: 1,
                color: colors.secondary.light,
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.2rem",
                },
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              {portfolioProfile.greeting}
            </Typography>

            <Typography
              id="home-section-title"
              component="h1"
              sx={{
                m: 0,
                color: colors.text.primary,
                fontSize: {
                  xs: "2.75rem",
                  sm: "4rem",
                  md: "4.75rem",
                  lg: "5.1rem",
                  xl: "5.6rem",
                },
                fontWeight: 800,
                lineHeight: {
                  xs: 1.05,
                  md: 1,
                },
                letterSpacing: "-0.055em",
              }}
            >
              Aravinth
              <Box
                component="span"
                sx={{
                  display: {
                    xs: "block",
                    sm: "inline",
                  },
                  ml: {
                    xs: 0,
                    sm: 1.5,
                  },
                  background: `linear-gradient(
                    135deg,
                    ${colors.primary.light},
                    ${colors.secondary.main},
                    ${colors.accent.light}
                  )`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Baskaran
              </Box>
            </Typography>

            {/* Rotating role */}
            <Box
              aria-live="polite"
              sx={{
                display: "flex",
                minHeight: {
                  xs: "74px",
                  sm: "82px",
                },
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                },
                mt: {
                  xs: 2,
                  md: 2.5,
                },
              }}
            >
              <Typography
                component="div"
                sx={{
                  color: colors.text.secondary,
                  fontSize: {
                    xs: "1.55rem",
                    sm: "2rem",
                    md: "2.25rem",
                  },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.025em",
                }}
              >
                Building as a
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    minWidth: {
                      xs: "220px",
                      md: "300px",
                    },
                    ml: 1,
                  }}
                >
                  <AnimatePresence mode="wait">
                    <Box
                      key={activeRoleIndex}
                      component={motion.span}
                      initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        filter: "blur(8px)",
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      sx={{
                        color: colors.primary.light,
                        display: "inline-block",
                      }}
                    >
                      {portfolioProfile.rotatingRoles[activeRoleIndex]}
                    </Box>
                  </AnimatePresence>
                </Box>
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                maxWidth: "720px",
                mx: {
                  xs: "auto",
                  lg: 0,
                },
                mt: 1,
                color: colors.text.secondary,
                fontSize: {
                  xs: "1rem",
                  sm: "1.08rem",
                  md: "1.15rem",
                },
                lineHeight: 1.85,
              }}
            >
              {portfolioProfile.description}
            </Typography>

            {/* CTA buttons */}
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1.5}
              sx={{
                alignItems: {
                  xs: "stretch",
                  sm: "center",
                },
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                },
                mt: {
                  xs: 4,
                  md: 4.5,
                },
              }}
            >
              <Button
                type="button"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() => scrollToSection("projects")}
                sx={{
                  minHeight: "52px",
                  px: 3,
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
                View My Work
              </Button>

              <Button
                component="a"
                href="/resume/Aravinth_Baskaran_Resume.pdf"
                download="Aravinth_Baskaran_Resume.pdf"
                variant="outlined"
                size="large"
                startIcon={<DownloadRoundedIcon />}
                sx={{
                  minHeight: "52px",
                  px: 3,
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
                Download Resume
              </Button>
            </Stack>

            {/* Location and focus areas */}
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={{
                xs: 2,
                sm: 3,
              }}
              sx={{
                alignItems: {
                  xs: "center",
                  lg: "flex-start",
                },
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                },
                mt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  color: colors.text.muted,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: colors.secondary.main,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: "inherit",
                  }}
                >
                  {portfolioProfile.location}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  color: colors.text.muted,
                }}
              >
                <CheckCircleRoundedIcon
                  sx={{
                    fontSize: "1rem",
                    color: colors.success,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: "inherit",
                  }}
                >
                  React, .NET, AI and Cloud
                </Typography>
              </Box>
            </Stack>
          </MotionBox>

          {/* Right visual */}
          <MotionBox
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 36,
                    scale: 0.96,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
              position: "relative",
              display: "flex",
              width: "100%",
              maxWidth: {
                xs: "580px",
                lg: "620px",
              },
              mx: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: "12%",
                borderRadius: "50%",
                background: `linear-gradient(
                  135deg,
                  rgba(37, 99, 235, 0.25),
                  rgba(6, 182, 212, 0.17)
                )`,
                filter: "blur(72px)",
              }}
            />

            {/* Developer profile card */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                border: "1px solid rgba(148, 163, 184, 0.22)",
                borderRadius: {
                  xs: "22px",
                  md: "28px",
                },
                background:
                  "linear-gradient(145deg, rgba(30, 41, 59, 0.84), rgba(15, 23, 42, 0.82))",
                boxShadow: "0 32px 90px rgba(2, 6, 23, 0.55)",
                backdropFilter: "blur(22px)",
              }}
            >
              {/* Card toolbar */}
              <Box
                sx={{
                  display: "flex",
                  minHeight: "52px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: {
                    xs: 2,
                    sm: 2.5,
                  },
                  borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
                  backgroundColor: "rgba(15, 23, 42, 0.52)",
                }}
              >
                <Stack direction="row" spacing={0.75}>
                  {["#EF4444", "#F59E0B", "#22C55E"].map((color) => (
                    <Box
                      key={color}
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </Stack>

                <Typography
                  component="span"
                  sx={{
                    color: colors.text.muted,
                    fontFamily: "monospace",
                    fontSize: "0.72rem",
                  }}
                >
                  aravinth.profile.ts
                </Typography>

                <TerminalRoundedIcon
                  sx={{
                    color: colors.text.muted,
                    fontSize: "1rem",
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                  },
                }}
              >
                {/* Initials */}
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    width: {
                      xs: "106px",
                      sm: "126px",
                    },
                    height: {
                      xs: "106px",
                      sm: "126px",
                    },
                    mx: "auto",
                    mb: 3,
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(96, 165, 250, 0.4)",
                    borderRadius: "28px",
                    color: colors.common.white,
                    background: `linear-gradient(
                      135deg,
                      ${colors.primary.main},
                      ${colors.secondary.dark}
                    )`,
                    boxShadow: shadows.glow,
                    transform: "rotate(-3deg)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "2.3rem",
                        sm: "2.8rem",
                      },
                      fontWeight: 800,
                      letterSpacing: "-0.06em",
                      transform: "rotate(3deg)",
                    }}
                  >
                    AB
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute",
                      right: "-7px",
                      bottom: "-7px",
                      display: "flex",
                      width: "32px",
                      height: "32px",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `3px solid ${colors.background.tertiary}`,
                      borderRadius: "50%",
                      color: colors.common.white,
                      backgroundColor: colors.success,
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        fontSize: "1rem",
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  component="p"
                  sx={{
                    textAlign: "center",
                    color: colors.text.primary,
                    fontSize: {
                      xs: "1.35rem",
                      sm: "1.6rem",
                    },
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Senior Software Engineer
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    mt: 0.75,
                    textAlign: "center",
                    color: colors.text.muted,
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.98rem",
                    },
                  }}
                >
                  React · TypeScript · .NET · AI
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 1.25,
                    mt: 4,
                  }}
                >
                  {portfolioProfile.focusAreas.map((focusArea, index) => (
                    <Box
                      key={focusArea}
                      sx={{
                        display: "flex",
                        minHeight: "74px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.75,
                        px: 1.25,
                        py: 1.5,
                        border: "1px solid rgba(148, 163, 184, 0.16)",
                        borderRadius: "14px",
                        backgroundColor: "rgba(15, 23, 42, 0.48)",
                      }}
                    >
                      {index === 0 && (
                        <CodeRoundedIcon
                          sx={{
                            color: colors.primary.light,
                            fontSize: "1.25rem",
                          }}
                        />
                      )}

                      {index === 1 && (
                        <TerminalRoundedIcon
                          sx={{
                            color: colors.secondary.light,
                            fontSize: "1.25rem",
                          }}
                        />
                      )}

                      {index === 2 && (
                        <AutoAwesomeRoundedIcon
                          sx={{
                            color: colors.accent.light,
                            fontSize: "1.25rem",
                          }}
                        />
                      )}

                      <Typography
                        component="span"
                        sx={{
                          textAlign: "center",
                          color: colors.text.secondary,
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        {focusArea}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    mt: 3,
                    p: {
                      xs: 2,
                      sm: 2.5,
                    },
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    borderRadius: "16px",
                    backgroundColor: "rgba(37, 99, 235, 0.08)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: colors.text.primary,
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1.8rem",
                        },
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      {portfolioProfile.experience}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mt: 0.6,
                        color: colors.text.muted,
                      }}
                    >
                      {portfolioProfile.experienceLabel}
                    </Typography>
                  </Box>

                  <Chip
                    label="Continuous learner"
                    size="small"
                    sx={{
                      color: colors.accent.light,
                      border: "1px solid rgba(94, 234, 212, 0.24)",
                      backgroundColor: "rgba(20, 184, 166, 0.08)",
                      fontWeight: 700,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </MotionBox>

          {/* Scroll indicator */}
          <Button
            type="button"
            aria-label="Scroll to the About section"
            onClick={() => scrollToSection("about")}
            sx={{
              position: "absolute",
              bottom: {
                xs: "14px",
                md: "18px",
              },
              left: "50%",
              display: {
                xs: "none",
                md: "inline-flex",
              },
              minWidth: "44px",
              width: "44px",
              height: "44px",
              p: 0,
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: "50%",
              color: colors.text.muted,
              backgroundColor: "rgba(15, 23, 42, 0.35)",
              transform: "translateX(-50%)",

              "&:hover": {
                color: colors.text.primary,
                borderColor: colors.primary.light,
                backgroundColor: "rgba(37, 99, 235, 0.1)",
              },
            }}
          >
            <Box
              component={motion.span}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 4, 0],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                display: "flex",
              }}
            >
              <KeyboardArrowDownRoundedIcon />
            </Box>
          </Button>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default HeroSection;
