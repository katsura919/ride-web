import HeroSection from "../components/ui/hero-section";
import FeaturesSectionDemo from "../components/features-section-demo-3";
import AboutSection from "../components/ui/about-section";
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/nav-bar";

export default function Landing() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">
        <NavBar />
        <main
          className="min-h-screen w-full relative flex flex-col items-center justify-start overflow-x-hidden"
        >
          <HeroSection />
          <FeaturesSectionDemo />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
