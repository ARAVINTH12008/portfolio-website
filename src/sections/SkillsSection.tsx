import { Box, Chip, Typography } from "@mui/material";

import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skillsData } from "../constants/skills";
import { colors } from "../theme";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: skillsData.frontend,
  },
  {
    title: "Backend Development",
    skills: skillsData.backend,
  },
  {
    title: "Cloud & DevOps",
    skills: skillsData.cloudDevOps,
  },
  {
    title: "Architecture & Engineering",
    skills: skillsData.architecture,
  },
  {
    title: "AI & Emerging Technologies",
    skills: skillsData.ai,
  },
];

const SkillsSection = () => {
  return (
    <SectionContainer id="skills">
      <SectionTitle
        title="Technical Skills"
        sectionId="skills"
        subtitle="Technologies, frameworks, tools, and engineering practices I use to build scalable modern applications."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 4,
        }}
      >
        {skillCategories.map((category) => (
          <Box
            key={category.title}
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
              variant="h5"
              sx={{
                mb: 3,
                color: colors.text.primary,
                fontWeight: 700,
              }}
            >
              {category.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.2,
              }}
            >
              {category.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    color: colors.primary.light,
                    border: `1px solid ${colors.primary.main}`,
                    background: "rgba(37,99,235,0.08)",
                    fontWeight: 600,
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default SkillsSection;
