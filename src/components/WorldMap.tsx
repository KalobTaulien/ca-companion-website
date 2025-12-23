import { MapPin, Globe2, Users } from "lucide-react";

const WorldMap = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-foreground rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-tight relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-4">
            Global Fellowship
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Meetings Around the World
          </h2>
          <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto font-body">
            Explore our interactive world map showing all C.A. meetings globally. See the strength and reach of our fellowship.
          </p>
        </div>

        {/* Map visualization placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-primary-foreground/5 rounded-3xl border border-primary-foreground/10 flex items-center justify-center relative overflow-hidden">
            {/* Decorative globe */}
            <div className="relative">
              <Globe2 className="w-32 h-32 md:w-48 md:h-48 text-primary-foreground/30" />
              
              {/* Animated pins */}
              <div className="absolute top-4 left-8 w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
              <div className="absolute top-12 right-4 w-2 h-2 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
              <div className="absolute bottom-8 left-16 w-2.5 h-2.5 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
              <div className="absolute bottom-16 right-12 w-2 h-2 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: "0.9s" }} />
            </div>

            {/* Corner labels */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary-foreground/10 px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Live Map</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="text-3xl md:text-4xl font-heading font-bold mb-1">3,000+</div>
            <p className="text-primary-foreground/75">Meetings Worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <Globe2 className="w-7 h-7" />
            </div>
            <div className="text-3xl md:text-4xl font-heading font-bold mb-1">50+</div>
            <p className="text-primary-foreground/75">Countries</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>
            <div className="text-3xl md:text-4xl font-heading font-bold mb-1">24/7</div>
            <p className="text-primary-foreground/75">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
