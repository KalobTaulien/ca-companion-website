import { Sun, BookOpen, Heart } from "lucide-react";

const DailyReflection = () => {
  return (
    <section className="section-padding bg-ca-cream">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Daily Inspiration
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              A Daily Reflection
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Start each day with wisdom and motivation. Our daily reflections offer thoughtful insights to guide your recovery journey, one day at a time.
            </p>

            {/* Features */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fresh Each Day</h4>
                  <p className="text-sm text-muted-foreground">New reflection every day to inspire your journey</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Thoughtful Content</h4>
                  <p className="text-sm text-muted-foreground">Curated wisdom from the C.A. fellowship</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">One Day at a Time</h4>
                  <p className="text-sm text-muted-foreground">Focus on today's journey toward recovery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual - Quote card */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <div className="bg-card rounded-3xl shadow-deep p-8 md:p-10 border border-border/50">
                <div className="text-6xl text-primary/20 font-heading leading-none mb-4">"</div>
                <blockquote className="text-xl md:text-2xl font-heading text-foreground mb-6 italic leading-relaxed">
                  We admitted we were powerless over cocaine and all other mind-altering substances – that our lives had become unmanageable.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold font-heading">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Step One</p>
                    <p className="text-xs text-muted-foreground">The beginning of the journey</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyReflection;
