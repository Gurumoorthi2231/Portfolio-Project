import { motion } from "framer-motion";
import {
  Database,
  Code2,
  BarChart3,
  FileSpreadsheet,
  Globe,
  Paintbrush,
  Terminal,
  GitBranch,
} from "lucide-react";
import { type ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "SQL", icon: <Database size={28} />, category: "Database" },
  { name: "Python", icon: <Terminal size={28} />, category: "Programming" },
  { name: "Power BI", icon: <BarChart3 size={28} />, category: "Analytics" },
  { name: "Excel", icon: <FileSpreadsheet size={28} />, category: "Analytics" },
  { name: "HTML", icon: <Globe size={28} />, category: "Web" },
  { name: "CSS", icon: <Paintbrush size={28} />, category: "Web" },
  { name: "JavaScript", icon: <Code2 size={28} />, category: "Programming" },
  { name: "GitHub", icon: <GitBranch size={28} />, category: "Tools" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-3">
            What I Know
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text inline-block">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover-lift cursor-default group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
