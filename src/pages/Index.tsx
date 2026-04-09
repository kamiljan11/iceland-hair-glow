import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TeamSection from "@/components/TeamSection";
import GiftCardSection from "@/components/GiftCardSection";
import BookingSection from "@/components/BookingSection";
import ProductsBar from "@/components/ProductsBar";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <BeforeAfterSection />
      <TeamSection />
      <GiftCardSection />
      <BookingSection />
      <ProductsBar />
      <AboutSection />
      <CtaSection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
