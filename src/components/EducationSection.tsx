import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech Artificial Intelligence & Data Science",
    college: "P.S.R.R College of Engineering",
    university: "Anna University",
    score: "CGPA: 7.9",
    location: "Sivakasi",
    date: "Aug 2022 – May 2026",
  },
  {
    degree: "HSC",
    college: "VOC Government Higher Secondary School",
    score: "65%",
    location: "Kovilpatti",
    date: "Jun 2021 – May 2022",
  },
  {
    degree: "SSLC",
    college: "VOC Government Higher Secondary School",
    score: "61%",
    location: "Kovilpatti",
    date: "Jun 2019 – Mar 2020",
  },
];

const certifications = [
  { name: "Web Development Training", org: "Alpha Learning Lume", date: "March 2025" },
  { name: "UI Automation with Design Studios", org: null, date: "April 2024" },
  { name: "Getting Started with MongoDB Atlas", org: "MongoDB", date: "January 2024" },
  { name: "MongoDB CRUD Operations", org: "MongoDB", date: "January 2024" },
];

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
          <p className="text-sm tracking-widest uppercase text-primary mb-3">My Journey</p>
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
            <div className="space-y-5 ml-2 border-l-2 border-primary/20 pl-6">
              {education.map((ed, i) => (
                <div key={i} className="group glass rounded-xl p-5 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{ed.degree} — {ed.college}</h4>
                      {ed.university && (
                        <p className="text-sm text-muted-foreground">{ed.university}</p>
                      )}
                      <p className="text-xs text-primary font-medium">{ed.score}</p>
                      <p className="text-xs text-muted-foreground">{ed.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-accent font-medium whitespace-nowrap shrink-0 sm:mt-1">
                      <Calendar size={14} />
                      <span>{ed.date}</span>
                    </div>
                  </div>
                </div>
              ))}
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
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="group glass rounded-xl p-4 hover-lift flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {cert.name}{cert.org ? ` — ${cert.org}` : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-accent font-medium whitespace-nowrap shrink-0 ml-4 sm:ml-0">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Experience */}
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
              <h3 className="text-xl font-bold font-display text-foreground">
                Professional Experience
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-5">
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  MIS Executive & Data Analyst
                </h4>
                <p className="text-sm text-accent font-medium mt-1">
                  Mohan Power
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supporting First Energy Private Limited (Thermax Group)
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-accent font-medium">
                <Calendar size={14} />
                <span>6 July 2026 – Present</span>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Developing interactive Power BI dashboards for operational performance and equipment breakdown analysis.",
                "Analyzing operational data, creating visualizations and histograms, and identifying performance trends.",
                "Extracting data from SCADA systems and preparing Daily Generation Reports (DGR).",
                "Managing Excel datasets and preparing accurate MIS and analytical reports.",
                "Calculating clipping losses, monitoring performance indicators, and identifying operational inefficiencies.",
                "Preparing monthly PowerPoint presentations covering performance insights, operational activities, and site requirements.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Power BI",
                "Microsoft Excel",
                "Data Analysis",
                "Data Visualization",
                "MIS Reporting",
                "SCADA",
                "Dashboard Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
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
