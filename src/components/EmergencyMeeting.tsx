import { AlertCircle, Clock, Wifi } from "lucide-react";
import { Button } from "./ui/button";
import { Apple, Play } from "lucide-react";

const EmergencyMeeting = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-6">
              When You Need It Most
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Emergency Meeting Finder
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-8 font-body leading-relaxed">
              In moments of crisis, time matters. Our emergency meeting feature instantly finds the next available online meeting – just one tap away.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Next Closest Meeting</h4>
                  <p className="text-sm text-primary-foreground/75">Find the soonest meeting starting near you</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Online Availability</h4>
                  <p className="text-sm text-primary-foreground/75">Join immediately from wherever you are</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://apps.apple.com/us/app/c-a-meeting-finder/id6504262893" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-5 h-5" />
                  Get for iOS
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.caitcommittee.camobileappdemo" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5" />
                  Get for Android
                </a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary-foreground/10 rounded-full animate-pulse" />
              <div className="absolute inset-8 bg-primary-foreground/15 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-16 bg-primary-foreground/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: "1s" }}>
                <AlertCircle className="w-20 h-20 md:w-24 md:h-24 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyMeeting;
