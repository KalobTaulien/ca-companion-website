import { Headphones, Play, Users, Clock } from "lucide-react";

const SpeakerTapes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Listen & Learn
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Speaker Tapes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Hear stories of hope and recovery from C.A. members worldwide. Like podcasts, but filled with the experience, strength, and hope of the fellowship.
          </p>
        </div>

        {/* Audio player mockup */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl shadow-deep p-6 md:p-8 border border-border/50">
            {/* Now playing header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <Headphones className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Now Playing</p>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground truncate">A Journey of Hope</h3>
                <p className="text-sm text-muted-foreground">Speaker from Los Angeles, CA</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-primary rounded-full" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>12:34</span>
                <span>38:45</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-elegant transition-all hover:shadow-deep">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </button>
              <button className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                <Users className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="text-3xl font-heading font-bold text-primary mb-1">100+</div>
              <p className="text-sm text-muted-foreground">Speaker Recordings</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-heading font-bold text-primary mb-1">Global</div>
              <p className="text-sm text-muted-foreground">Stories from Worldwide</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-heading font-bold text-primary mb-1">24/7</div>
              <p className="text-sm text-muted-foreground">Listen Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerTapes;
