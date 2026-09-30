import { Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { colors } from "../theme";
import { projectsData } from "../constants/projects";

const featuredProjects = projectsData.filter((project) => project.featured);

const additionalProjects = projectsData.filter((project) => !project.featured);

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <SectionTitle
        title="Projects Showcase"
        sectionId="projects"
        subtitle="Selected projects demonstrating frontend engineering, backend development, cloud technologies and AI learning."
      />

      {/* Featured Projects */}

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: colors.text.primary,
          fontWeight: 700,
        }}
      >
        Featured Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 4,
          mb: 8,
        }}
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </Box>

      {/* Additional Projects */}

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: colors.text.primary,
          fontWeight: 700,
        }}
      >
        Additional Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr",
          },
          gap: 4,
        }}
      >
        {additionalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </SectionContainer>
  );
};

export default ProjectsSection;
