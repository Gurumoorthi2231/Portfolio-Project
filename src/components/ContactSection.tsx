import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-3">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text inline-block">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Mail size={24} />,
              label: "Email",
              value: "gguru27574@gmail.com",
              href: "mailto:gguru27574@gmail.com",
            },
            {
              icon: <Phone size={24} />,
              label: "Phone",
              value: "+91 89250 78135",
              href: "tel:+918925078135",
            },
            {
              icon: <MapPin size={24} />,
              label: "Location",
              value: "Tuticorin, India",
              href: "#",
            },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-lift block"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
