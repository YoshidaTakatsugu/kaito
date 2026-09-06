import { CoachStorySection } from "@/components/home/CoachStorySection";
import { ConceptSection } from "@/components/home/ConceptSection";
import { ConversionFlowSection } from "@/components/home/ConversionFlowSection";
import { EmpathySection } from "@/components/home/EmpathySection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FutureSection } from "@/components/home/FutureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogicSection } from "@/components/home/LogicSection";
import { MediaActivitySection } from "@/components/home/MediaActivitySection";
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
      <LogicSection />
      <ConceptSection />
      <CoachStorySection />
      <UspSection />
      <VoiceSection />
      <MediaActivitySection />
      <ServicesSection />
      <ConversionFlowSection />
      <FaqSection />
      <FinalCtaSection />
      <ProfessionalPartnershipSection />
    </>
  );
}
