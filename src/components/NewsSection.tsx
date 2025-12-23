import { Newspaper, Calendar, Bell } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      category: "Convention",
      title: "World Service Convention 2025",
      description: "Join us for the annual gathering of C.A. members from around the globe.",
      date: "Coming Soon"
    },
    {
      category: "Update",
      title: "New Meeting Locations Added",
      description: "Over 200 new meetings added to the directory this month.",
      date: "This Week"
    },
    {
      category: "Fellowship",
      title: "Regional Events Calendar",
      description: "Check out upcoming events in your area.",
      date: "Ongoing"
    }
  ];

  return (
    <section className="section-padding gradient-subtle">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              C.A. News & Updates
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Stay informed about conventions, fellowship news, and important updates from Cocaine Anonymous. Never miss an opportunity to connect.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-card px-4 py-3 rounded-xl shadow-soft border border-border/50">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Convention Updates</span>
              </div>
              <div className="flex items-center gap-3 bg-card px-4 py-3 rounded-xl shadow-soft border border-border/50">
                <Bell className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Fellowship News</span>
              </div>
            </div>
          </div>

          {/* News cards */}
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Newspaper className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.category}</span>
                      <span className="text-xs text-muted-foreground">• {item.date}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
