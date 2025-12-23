import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import caLogo from "@/assets/ca-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container-tight section-padding flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <img
            src={caLogo}
            alt="Cocaine Anonymous - Hope, Faith, Courage"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in opacity-0 text-balance" style={{ animationDelay: "0.2s" }}>
          C.A. Companion
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-4 animate-fade-in opacity-0 font-body" style={{ animationDelay: "0.3s" }}>
          Your recovery journey, in the palm of your hand
        </p>

        {/* Main feature */}
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 animate-fade-in opacity-0 font-body" style={{ animationDelay: "0.4s" }}>
          Find a meeting anywhere in the world. <span className="font-semibold text-primary-foreground">Over 3,000 meetings</span> to choose from.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://apps.apple.com/us/app/c-a-meeting-finder/id6504262893"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Apple className="w-6 h-6" />
              Download for iOS
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a
              href="https://play.google.com/store/apps/details?id=com.caitcommittee.camobileappdemo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Play className="w-6 h-6" />
              Download for Android
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
