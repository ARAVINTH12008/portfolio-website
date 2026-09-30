import { Box, Button, Chip, Typography } from "@mui/material";
import type { Project } from "../../types/project";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import { colors } from "../../theme";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",

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
      <Box
        sx={{
          height: featured ? "220px" : "160px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: "linear-gradient(135deg,#1E293B,#0F172A)",
        }}
      >
        <Typography
          sx={{
            fontSize: featured ? "2rem" : "1.5rem",

            fontWeight: 800,

            color: colors.primary.light,

            textAlign: "center",
          }}
        >
          {project.title}
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Chip
          label={project.category}
          sx={{
            mb: 2,

            color: colors.secondary.light,

            border: `1px solid ${colors.secondary.main}`,

            background: "rgba(6,182,212,0.08)",
          }}
        />

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: colors.text.primary,
            fontWeight: 700,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            mb: 3,
            color: colors.text.secondary,
          }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
          }}
        >
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                color: colors.primary.light,

                border: `1px solid ${colors.primary.main}`,

                background: "rgba(37,99,235,0.08)",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {project.github && (
            <Button
              startIcon={<GitHubIcon />}
              component="a"
              href={project.github}
              target="_blank"
            >
              GitHub
            </Button>
          )}

          {project.live && (
            <Button
              startIcon={<LaunchIcon />}
              component="a"
              href={project.live}
              target="_blank"
            >
              Live Demo
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
