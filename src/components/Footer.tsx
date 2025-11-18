import { Linkedin, Instagram, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand/Logo Section */}
          <div>
            <div className="text-2xl font-[Syne] mb-2" style={{ color: '#B5CAA1' }}>
              Portfolio
            </div>
            <p className="text-sm text-zinc-500">
              Aspiring UX and Game Designer
            </p>
          </div>

          {/* Contact & Social Section */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <a 
              href="mailto:friskwu0119@gmail.com" 
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>friskwu0119@gmail.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="http://linkedin.com/in/frisk-wu-4a957728b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zinc-400" />
              </a>
              <a
                href="https://www.instagram.com/juny_ao?igsh=c3pudWVzNnBpazNx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-zinc-400" />
              </a>
              <a
                href="https://github.com/Junyaooooooo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}