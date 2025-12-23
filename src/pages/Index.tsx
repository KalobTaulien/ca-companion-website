import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MeetingFinder from "@/components/MeetingFinder";
import EmergencyMeeting from "@/components/EmergencyMeeting";
import SobrietyCalculator from "@/components/SobrietyCalculator";
import DailyReflection from "@/components/DailyReflection";
import SpeakerTapes from "@/components/SpeakerTapes";
import NewsSection from "@/components/NewsSection";
import Resources from "@/components/Resources";
import WorldMap from "@/components/WorldMap";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <MeetingFinder />
        </div>
        <EmergencyMeeting />
        <SobrietyCalculator />
        <DailyReflection />
        <SpeakerTapes />
        <NewsSection />
        <div id="resources">
          <Resources />
        </div>
        <WorldMap />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
