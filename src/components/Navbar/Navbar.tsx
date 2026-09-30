import { useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { layout } from "../../constants/layout";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { colors } from "../../theme";
import { navigationItems } from "../../constants/navigation";
import useActiveSection from "../../hooks/useActiveSection";

const NAVBAR_HEIGHT = 72;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.sectionId),
    [],
  );

  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      return;
    }

    const reducedMotionEnabled = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    targetSection.scrollIntoView({
      behavior: reducedMotionEnabled ? "auto" : "smooth",
      block: "start",
    });

    setIsDrawerOpen(false);
  };

  const handleLogoClick = () => {
    scrollToSection("home");
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: `${NAVBAR_HEIGHT}px`,
          justifyContent: "center",
          color: colors.text.primary,
          backgroundColor: isScrolled
            ? "rgba(15, 23, 42, 0.88)"
            : "rgba(15, 23, 42, 0.35)",
          borderBottom: isScrolled
            ? `1px solid ${colors.border.primary}`
            : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(18px)" : "blur(8px)",
          WebkitBackdropFilter: isScrolled ? "blur(18px)" : "blur(8px)",
          transition:
            "background-color 250ms ease, border-color 250ms ease, backdrop-filter 250ms ease",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            maxWidth: layout.contentWidth,
            minHeight: `${NAVBAR_HEIGHT}px !important`,
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              lg: 4,
            },
          }}
        >
          <Button
            type="button"
            onClick={handleLogoClick}
            aria-label="Go to the home section"
            startIcon={
              <CodeRoundedIcon
                sx={{
                  color: colors.secondary.main,
                }}
              />
            }
            sx={{
              minWidth: "auto",
              mr: "auto",
              p: 0,
              color: colors.text.primary,
              fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                lg: "1.3rem",
              },
              fontWeight: 800,
              letterSpacing: "-0.03em",
              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: "transparent",
                color: colors.secondary.light,
              },

              "& .MuiButton-startIcon": {
                mr: 1,
              },
            }}
          >
            Aravinth
            <Box
              component="span"
              sx={{
                color: colors.primary.light,
              }}
            >
              .dev
            </Box>
          </Button>

          <Box
            component="nav"
            aria-label="Primary portfolio navigation"
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              alignItems: "center",
              gap: 0.25,
            }}
          >
            {navigationItems
              .filter(
                (item) =>
                  item.sectionId !== "resume" && item.sectionId !== "contact",
              )
              .map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <Button
                    key={item.sectionId}
                    type="button"
                    onClick={() => scrollToSection(item.sectionId)}
                    aria-current={isActive ? "page" : undefined}
                    sx={{
                      position: "relative",
                      minWidth: "auto",
                      px: 1.35,
                      py: 1,
                      color: isActive ? colors.text.primary : colors.text.muted,
                      fontSize: {
                        lg: "0.92rem",
                        xl: "0.96rem",
                      },

                      fontWeight: isActive ? 700 : 600,

                      "&::after": {
                        position: "absolute",
                        right: "12px",
                        bottom: "4px",
                        left: "12px",
                        height: "2px",
                        borderRadius: "999px",
                        content: '""',
                        background: `linear-gradient(
                          90deg,
                          ${colors.primary.main},
                          ${colors.secondary.main}
                        )`,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transition: "opacity 200ms ease, transform 200ms ease",
                      },

                      "&:hover": {
                        color: colors.text.primary,
                        backgroundColor: "rgba(148, 163, 184, 0.08)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
          </Box>

          <Button
            component="a"
            href="/resume/Aravinth_Baskaran_Resume.pdf"
            download="Aravinth_Baskaran_Resume.pdf"
            variant="outlined"
            sx={{
              display: {
                xs: "none",
                md: "inline-flex",
              },
              ml: {
                md: 1,
                lg: 1.5,
              },
              minHeight: "40px",
              px: 2,
              borderColor: "rgba(96, 165, 250, 0.5)",
              color: colors.primary.light,

              "&:hover": {
                borderColor: colors.primary.light,
                backgroundColor: "rgba(37, 99, 235, 0.1)",
              },
            }}
          >
            Resume
          </Button>

          <Button
            type="button"
            variant="contained"
            endIcon={<ArrowOutwardRoundedIcon />}
            onClick={() => scrollToSection("contact")}
            sx={{
              display: {
                xs: "none",
                md: "inline-flex",
              },
              ml: 1,
              minHeight: "40px",
              px: 2,
              color: colors.common.white,
              background: `linear-gradient(
                135deg,
                ${colors.primary.main},
                ${colors.secondary.dark}
              )`,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",

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
            Let's Talk
          </Button>

          <Tooltip title="Open navigation menu">
            <IconButton
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-navigation-drawer"
              sx={{
                display: {
                  xs: "inline-flex",
                  lg: "none",
                },
                ml: 1,
                width: 44,
                height: 44,
                color: colors.text.primary,
                border: `1px solid ${colors.border.primary}`,
                backgroundColor: "rgba(30, 41, 59, 0.5)",

                "&:hover": {
                  borderColor: colors.primary.light,
                  backgroundColor: "rgba(37, 99, 235, 0.12)",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer
        id="mobile-navigation-drawer"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: "min(86vw, 360px)",
                sm: "360px",
              },
              color: colors.text.primary,
              backgroundColor: "rgba(15, 23, 42, 0.98)",
              backgroundImage: "none",
              borderLeft: `1px solid ${colors.border.primary}`,
              backdropFilter: "blur(20px)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            minHeight: `${NAVBAR_HEIGHT}px`,
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            borderBottom: `1px solid ${colors.border.primary}`,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Aravinth
            <Box
              component="span"
              sx={{
                color: colors.primary.light,
              }}
            >
              .dev
            </Box>
          </Typography>

          <Tooltip title="Close navigation menu">
            <IconButton
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close navigation menu"
              sx={{
                width: 42,
                height: 42,
                color: colors.text.primary,
                border: `1px solid ${colors.border.primary}`,
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          component="nav"
          aria-label="Mobile portfolio navigation"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            px: 2,
            py: 3,
          }}
        >
          <List
            disablePadding
            sx={{
              display: "grid",
              gap: 0.75,
            }}
          >
            {navigationItems.map((item, index) => {
              const isActive = activeSection === item.sectionId;

              return (
                <ListItemButton
                  key={item.sectionId}
                  selected={isActive}
                  onClick={() => scrollToSection(item.sectionId)}
                  sx={{
                    minHeight: "52px",
                    border: "1px solid transparent",
                    borderRadius: "12px",
                    px: 2,
                    color: isActive
                      ? colors.text.primary
                      : colors.text.secondary,

                    "&.Mui-selected": {
                      borderColor: "rgba(96, 165, 250, 0.3)",
                      backgroundColor: "rgba(37, 99, 235, 0.14)",
                    },

                    "&.Mui-selected:hover": {
                      backgroundColor: "rgba(37, 99, 235, 0.2)",
                    },

                    "&:hover": {
                      backgroundColor: "rgba(148, 163, 184, 0.08)",
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: "28px",
                      mr: 1.5,
                      color: isActive
                        ? colors.secondary.light
                        : colors.text.muted,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>

                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: isActive ? 700 : 600,
                          fontSize: "0.98rem",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>

          <Button
            component="a"
            href="/resume/Aravinth_Baskaran_Resume.pdf"
            download="Aravinth_Baskaran_Resume.pdf"
            variant="outlined"
            startIcon={<DownloadRoundedIcon />}
            onClick={() => setIsDrawerOpen(false)}
            sx={{
              mt: 3,
              minHeight: "52px",
              px: 3,
              borderColor: "rgba(96, 165, 250, 0.35)",
              color: colors.primary.light,
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

          <Box sx={{ mt: "auto", pt: 4 }}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.muted,
              }}
            >
              React, TypeScript, .NET and AI
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
