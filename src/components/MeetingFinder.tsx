import { MapPin, Globe, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const MeetingFinder = () => {
  return (
    <section className="section-padding gradient-subtle">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Core Feature
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Find Meetings Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Access over 3,000 C.A. meetings across the globe. Whether you're at home or traveling, support is always within reach.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={MapPin}
            title="In-Person Meetings"
            description="Find local meetings near you with detailed location information, directions, and meeting times."
            delay={0.1}
          />
          <FeatureCard
            icon={Globe}
            title="500+ Online Meetings"
            description="Join online or hybrid meetings from anywhere. Perfect for those who can't attend in person."
            delay={0.2}
          />
          <FeatureCard
            icon={Users}
            title="3,000+ Meetings"
            description="Choose from thousands of meetings worldwide. Filter by day, time, format, and more."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default MeetingFinder;
