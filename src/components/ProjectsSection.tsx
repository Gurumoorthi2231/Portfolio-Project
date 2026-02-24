import { motion } from "framer-motion";
import { ExternalLink, Landmark, Plane } from "lucide-react";

const projects = [
  {
    title: "Bank Loan ID Generation",
    subtitle: "Naan Mudhalvan",
    description:
      "Developed a system for generating unique Bank Loan IDs to organize and manage loan records efficiently. Built with SQL and data management best practices for banking systems.",
    icon: <Landmark size={32} />,
    tags: ["SQL", "Data Management", "Banking"],
  },
  {
    title: "Air Traffic Flow Management",
    subtitle: "Self Project",
    description:
      "An ATFM project focusing on optimizing air traffic flow within airspace, managing flight operations to prevent congestion and delays using data analysis techniques.",
    icon: <Plane size={32} />,
    tags: ["Python", "Data Analysis", "Optimization"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text inline-block">
            Key Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover-lift group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:glow-primary transition-shadow duration-300">
                {project.icon}
              </div>
              <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                {project.subtitle}
              </p>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors"
              >
                View Project <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
