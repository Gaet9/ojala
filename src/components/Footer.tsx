import { ExternalLink, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          {/* Secondary CTA */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Transform Your Thinking?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of readers who have already discovered these life-changing insights. Your journey starts with a single click.
            </p>
            <a 
              href="https://amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center group"
            >
              <span>Get Your Copy Now</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-6">Connect with the author</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved. Made with passion for knowledge and growth.
            </p>
            <div className="mt-4 flex justify-center gap-6 text-xs text-muted-foreground/70">
              <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;