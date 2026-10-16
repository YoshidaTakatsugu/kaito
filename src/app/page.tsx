import { CoachStorySection } from "@/components/home/CoachStorySection";
import { ConversionFlowSection } from "@/components/home/ConversionFlowSection";
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
import { VoiceSection } from "@/components/home/VoiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmpathySection />
      <FutureSection />
      <UspSection />
      <CoachStorySection />
      <VoiceSection />
      <MediaActivitySection />
      <ServicesSection />
      <ConversionFlowSection />
      <MailSeminarSection />
      <FaqSection />
      <FinalCtaSection />
      <ProfessionalPartnershipSection />
    </>
  );
}
