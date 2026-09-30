import { Box, Typography } from "@mui/material";
import { colors } from "../../theme";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  sectionId?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  title,
  subtitle,
  sectionId,
  align = "left",
}: SectionTitleProps) => {
  return (
    <Box
      sx={{
        maxWidth: align === "center" ? "760px" : "720px",
        mx: align === "center" ? "auto" : 0,
        mb: {
          xs: 5,
          md: 7,
        },
        textAlign: align,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: 1.5,
          mb: 1.5,
        }}
      >
        <Box
          sx={{
            width: "32px",
            height: "2px",
            borderRadius: "999px",
            background: `linear-gradient(
              90deg,
              ${colors.primary.main},
              ${colors.secondary.main}
            )`,
          }}
        />

        <Typography
          component="span"
          sx={{
            color: colors.secondary.light,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Professional Portfolio
        </Typography>
      </Box>

      <Typography
        id={sectionId ? `${sectionId}-section-title` : undefined}
        component="h2"
        variant="h2"
        sx={{
          color: colors.text.primary,
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3rem",
          },
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: "680px",
            mx: align === "center" ? "auto" : 0,
            color: colors.text.secondary,
            fontSize: {
              xs: "1rem",
              md: "1.08rem",
            },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
