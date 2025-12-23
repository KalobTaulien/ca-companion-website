import { Button } from "@/components/ui/button";
import { Apple, Play, Menu, X } from "lucide-react";
import caLogo from "@/assets/ca-logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-tight">
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={caLogo} alt="C.A." className="w-10 h-10 md:w-12 md:h-12" />
            <span className="font-heading font-bold text-lg md:text-xl text-foreground hidden sm:block">
              C.A. Companion
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <div className="flex items-center gap-2">
              <Button size="sm" asChild>
                <a href="https://apps.apple.com/us/app/c-a-meeting-finder/id6504262893" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-4 h-4" />
                  iOS
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.caitcommittee.camobileappdemo" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4" />
                  Android
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg px-4 py-6 space-y-4">
            <a 
              href="#features" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#resources" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button asChild>
                <a href="https://apps.apple.com/us/app/c-a-meeting-finder/id6504262893" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-4 h-4" />
                  Download for iOS
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.caitcommittee.camobileappdemo" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4" />
                  Download for Android
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
