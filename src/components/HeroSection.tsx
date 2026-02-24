import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-hero.png";

const roles = ["Data Analyst", "Frontend Developer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Gurumoorthi B</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-10">
            I'm a{" "}
            <span className="text-accent font-semibold">
              {displayText}
            </span>
            <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">
              &nbsp;
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
            Aspiring Data Analyst & B.Tech AI/DS student with strong practical
            knowledge of SQL, Python, Excel, Power BI, and web technologies.
            Passionate about turning data into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg glass gradient-border font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
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
                alt="Gurumoorthi B"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
