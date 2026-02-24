import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GraduationCap, Award, Briefcase, Code, Mail, Phone, MapPin, Calendar, Printer } from "lucide-react";
import { useRef } from "react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal = ({ open, onOpenChange }: ResumeModalProps) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const content = printRef.current;
    if (!content) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html><head><title>Gurumoorthi B — Resume</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; padding: 40px; color: #1a1a1a; }
        h2 { font-size: 22px; margin-bottom: 4px; }
        h3 { font-size: 15px; margin: 18px 0 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
        p, li, span { font-size: 13px; line-height: 1.6; }
        .flex { display: flex; justify-content: space-between; }
        .badge { display: inline-block; background: #e8e8e8; padding: 2px 10px; border-radius: 12px; margin: 2px 4px 2px 0; font-size: 12px; }
        ul { padding-left: 18px; }
      </style></head><body>
      ${content.innerHTML}
      </body></html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-primary/20">
        <DialogHeader className="flex flex-row items-center justify-between pr-8">
          <DialogTitle className="text-2xl font-display gradient-text">Gurumoorthi B — Resume</DialogTitle>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Printer size={16} />
            Download PDF
          </button>
        </DialogHeader>

        <div ref={printRef} className="space-y-6 text-sm">
          {/* Contact */}
          <div className="flex flex-wrap gap-4 text-muted-foreground text-xs">
            <span className="flex items-center gap-1"><Mail size={12} /> gurumoorthi@example.com</span>
            <span className="flex items-center gap-1"><Phone size={12} /> +91-XXXXXXXXXX</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> Kovilpatti, India</span>
          </div>

          {/* Objective */}
          <div>
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-primary" /> Objective
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring Data Analyst & B.Tech AI/DS student with strong practical knowledge of SQL, Python, Excel, Power BI, and web technologies. Passionate about turning data into actionable insights.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
              <GraduationCap size={16} className="text-primary" /> Education
            </h3>
            <div className="space-y-3">
              {[
                { degree: "B.Tech AI & Data Science", college: "P.S.R.R College of Engineering", university: "Anna University", score: "CGPA: 7.9", date: "Aug 2022 – May 2026" },
                { degree: "HSC", college: "VOC Govt. Higher Secondary School", score: "65%", date: "Jun 2021 – May 2022" },
                { degree: "SSLC", college: "VOC Govt. Higher Secondary School", score: "61%", date: "Jun 2019 – Mar 2020" },
              ].map((ed, i) => (
                <div key={i} className="flex justify-between items-start gap-2 border-l-2 border-primary/20 pl-3">
                  <div>
                    <p className="font-semibold text-foreground">{ed.degree} — {ed.college}</p>
                    {ed.university && <p className="text-xs text-muted-foreground">{ed.university}</p>}
                    <p className="text-xs text-primary">{ed.score}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-accent whitespace-nowrap shrink-0">
                    <Calendar size={12} /> {ed.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-2">
              <Code size={16} className="text-primary" /> Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {["SQL", "Python", "Power BI", "Excel", "HTML", "CSS", "JavaScript", "GitHub"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-primary" /> Projects
            </h3>
            <div className="space-y-2 border-l-2 border-primary/20 pl-3">
              <div>
                <p className="font-semibold text-foreground">Bank Loan ID Generation</p>
                <p className="text-xs text-muted-foreground">Automated loan ID system using SQL and Python for efficient banking operations.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Air Traffic Flow Management</p>
                <p className="text-xs text-muted-foreground">Built a system to optimize airport traffic flow using data-driven scheduling algorithms.</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
              <Award size={16} className="text-accent" /> Certifications
            </h3>
            <div className="space-y-2">
              {[
                { name: "Web Development Training — Alpha Learning Lume", date: "March 2025" },
                { name: "UI Automation with Design Studios", date: "April 2024" },
                { name: "Getting Started with MongoDB Atlas — MongoDB", date: "January 2024" },
                { name: "MongoDB CRUD Operations — MongoDB", date: "January 2024" },
              ].map((cert, i) => (
                <div key={i} className="flex justify-between items-center gap-2">
                  <span className="text-muted-foreground">• {cert.name}</span>
                  <span className="flex items-center gap-1 text-xs text-accent whitespace-nowrap shrink-0">
                    <Calendar size={12} /> {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div>
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-primary" /> Internship
            </h3>
            <p className="font-semibold text-foreground">Web Development — Alpha Learning Lume, Kovilpatti</p>
            <ul className="text-xs text-muted-foreground mt-1 space-y-1">
              <li>• Worked with SQL databases and backend logic</li>
              <li>• Handled structured datasets and improved analytical skills</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
