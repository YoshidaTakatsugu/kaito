import { CoachStorySection } from "@/components/home/CoachStorySection";
import { ConversionFlowSection } from "@/components/home/ConversionFlowSection";
import { EmpathySection } from "@/components/home/EmpathySection";
import { FutureSection } from "@/components/home/FutureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogicSection } from "@/components/home/LogicSection";
import { ConceptSection } from "@/components/home/ConceptSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { UspSection } from "@/components/home/UspSection";
import { VoiceSection } from "@/components/home/VoiceSection";
import { MediaActivitySection } from "@/components/home/MediaActivitySection";

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
    </>
  );
}
