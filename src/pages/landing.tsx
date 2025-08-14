import HeroSection from "../components/ui/hero-section";
import FeaturesSectionDemo from "../components/features-section-demo-3";
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/nav-bar";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Black Basic Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.15) 1px, transparent 2px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
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
        </main>
        <Footer />
      </div>
    </div>
  );
}
