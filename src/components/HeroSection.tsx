
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-hero.png";
import ResumeModal from "@/components/ResumeModal";

const roles = [
  "MIS Executive",
  "Data Analyst",
  "Power BI Analyst",
  "Business Intelligence Analyst",
  "Asset Management Analyst",
];

const skills = [
  "Power BI",
  "SQL",
  "Python",
  "Advanced Excel",
  "Data Visualization",
  "MIS Reporting",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(
            role.slice(0, displayText.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(
            displayText.slice(0, -1)
          );
        } else {
          setIsDeleting(false);
          setCurrentRole(
            (prev) => (prev + 1) % roles.length
          );
        }
      }
    }, isDeleting ? 50 : displayText.length === role.length ? 1500 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Welcome to My Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">
              Gurumoorthi B
            </span>
          </h1>

          {/* Animated Roles */}
          <div className="text-xl sm:text-2xl text-muted-foreground mb-6 min-h-16 sm:min-h-10">
            I'm a{" "}
            <span className="text-accent font-semibold">
              {displayText}
            </span>
            <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">
              &nbsp;
            </span>
          </div>

          {/* Professional Summary */}
          <p className="text-muted-foreground max-w-xl mb-5 leading-relaxed mx-auto md:mx-0">
            B.Tech Artificial Intelligence & Data Science
            graduate currently working as an MIS Executive
            & Data Analyst at Mohan Power Infrastructure
            Private Limited, supporting operational reporting
            and performance analytics for renewable energy
            projects.
          </p>

          <p className="text-muted-foreground max-w-xl mb-6 leading-relaxed mx-auto md:mx-0">
            Hands-on experience in Power BI dashboard
            development, SCADA data analysis, inverter
            performance monitoring, clipping loss calculations,
            and daily generation reporting. Skilled in SQL,
            Python, Microsoft Excel, and data visualization.
            Passionate about transforming raw data into
            meaningful insights for better decision-making.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/40 font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass gradient-border font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Download size={18} />
              Download Resume
            </button>

          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative">

            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glow-primary gradient-border">
              <img
                src={profileImage}
                alt="Gurumoorthi B - Data Analyst"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110 pointer-events-none" />

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#skills"
        aria-label="Scroll to skills section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>

      <ResumeModal
        open={resumeOpen}
        onOpenChange={setResumeOpen}
      />
    </section>
  );
};

export default HeroSection;
