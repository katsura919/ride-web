import HeroSection from "../components/ui/hero-section";
import FeaturesSection from "../components/ui/features-section";
import AboutSection from "../components/ui/about-section";
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/nav-bar";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-white relative text-gray-800">
      {/* Zigzag Lightning - Light Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
            repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
          `,
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">
        <NavBar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
