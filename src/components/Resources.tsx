import { FileText, BookMarked, List, Map } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Pamphlets",
      description: "Access C.A. literature and pamphlets right in the app. Learn about the program, the steps, and the fellowship."
    },
    {
      icon: List,
      title: "Meeting Formats",
      description: "Understand different meeting formats – speaker meetings, step studies, open meetings, and more."
    },
    {
      icon: Map,
      title: "World Map",
      description: "Visualize all C.A. meetings around the world on an interactive map. See the global fellowship community."
    },
    {
      icon: BookMarked,
      title: "C.A. Literature",
      description: "Essential readings and resources to support your recovery journey and understanding of the program."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Everything You Need
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Resources at Your Fingertips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            From pamphlets to meeting formats, everything you need to navigate your recovery journey is just a tap away.
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <FeatureCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
