import { EmpathySection } from "@/components/home/EmpathySection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FutureSection } from "@/components/home/FutureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MediaActivitySection } from "@/components/home/MediaActivitySection";
import { MailSeminarSection } from "@/components/home/MailSeminarSection";
import { ProfessionalPartnershipSection } from "@/components/home/ProfessionalPartnershipSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { UspSection } from "@/components/home/UspSection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <EmpathySection />
      <FutureSection />
      <UspSection />
      <MediaActivitySection />
      <ServicesSection />
      <MailSeminarSection />
      <FaqSection />
      <FinalCtaSection />
      <ProfessionalPartnershipSection />
    </div>
  );
}
