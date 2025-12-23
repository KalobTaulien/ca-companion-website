import { Calendar, Award, TrendingUp } from "lucide-react";

const SobrietyCalculator = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-3xl shadow-deep p-8 border border-border/50 max-w-sm">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-sm text-muted-foreground mb-2 font-body uppercase tracking-wider">Your Journey</h3>
                  <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">365</div>
                  <p className="text-muted-foreground font-body">Days of Recovery</p>
                  
                  <div className="mt-6 pt-6 border-t border-border flex justify-around">
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-foreground">12</div>
                      <div className="text-xs text-muted-foreground">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-foreground">52</div>
                      <div className="text-xs text-muted-foreground">Weeks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-foreground">8,760</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl shadow-elegant flex items-center justify-center animate-float">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent rounded-xl shadow-elegant flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <TrendingUp className="w-7 h-7 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Track Your Progress
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Sobriety Date Calculator
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
              Celebrate every milestone on your recovery journey. Set your sobriety date and watch your progress grow – days, weeks, months, and years of hope and courage.
            </p>
            <ul className="space-y-4 text-muted-foreground font-body">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Track days, weeks, months, and years
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Milestone celebrations and reminders
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Personal motivation at your fingertips
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobrietyCalculator;
