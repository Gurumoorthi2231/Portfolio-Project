import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-3">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text inline-block">
            Education & Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">Education</h3>
            </div>
            <div className="space-y-4 ml-2 border-l-2 border-primary/20 pl-6">
              <div>
                <h4 className="font-semibold text-foreground">B.Tech (AI & Data Science)</h4>
                <p className="text-sm text-muted-foreground">P.S.R.R College of Engineering (Anna University), Sivakasi</p>
                <span className="text-xs text-primary font-medium">CGPA: 7.9</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">HSC</h4>
                <p className="text-sm text-muted-foreground">VOC Govt. Higher Secondary School, Kovilpatti</p>
                <span className="text-xs text-primary font-medium">65%</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">SSLC</h4>
                <p className="text-sm text-muted-foreground">VOC Govt. Higher Secondary School, Kovilpatti</p>
                <span className="text-xs text-primary font-medium">61%</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Award size={22} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Web Development Training — Alpha Learning Lume",
                "UI Automation with Design Studios",
                "Getting Started with MongoDB Atlas — MongoDB, Inc.",
                "MongoDB CRUD Operations — MongoDB, Inc.",
              ].map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">Internship</h3>
            </div>
            <h4 className="font-semibold text-foreground mb-1">Web Development</h4>
            <p className="text-sm text-accent mb-3">Alpha Learning Lume, Kovilpatti, India</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Worked with SQL databases and backend logic
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Handled structured datasets and improved analytical skills
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
