import { Button } from "@/components/ui/button";
import { Apple, Play, Heart } from "lucide-react";
import caLogo from "@/assets/ca-logo.png";

const FinalCTA = () => {
  return (
    <section className="section-padding gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={caLogo}
              alt="Cocaine Anonymous"
              className="w-24 h-24 mx-auto"
            />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground mb-4 font-body max-w-xl mx-auto">
            Hope, Faith, and Courage – right in your pocket. Download C.A. Companion and take the first step toward a new life.
          </p>
          <p className="text-base text-muted-foreground/80 mb-10 font-body">
            Free to download. Free to use. Forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="xl" asChild>
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
            <Button variant="outline" size="xl" asChild>
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

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-body">Made with love by the C.A. Fellowship</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
