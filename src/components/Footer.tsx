import caLogo from "@/assets/ca-logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-tight px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={caLogo} alt="Cocaine Anonymous" className="w-12 h-12" />
              <div>
                <span className="font-heading font-bold text-lg">C.A. Companion</span>
                <p className="text-xs text-primary-foreground/70">By Cocaine Anonymous</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="https://ca.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              CA.org
            </a>
            <a 
              href="https://apps.apple.com/us/app/c-a-meeting-finder/id6504262893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.caitcommittee.camobileappdemo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Google Play
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>for recovery</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Cocaine Anonymous World Services, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
