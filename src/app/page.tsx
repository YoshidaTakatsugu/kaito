import { CoachStorySection } from "@/components/home/CoachStorySection";
import { ConversionFlowSection } from "@/components/home/ConversionFlowSection";
import { CycleSection } from "@/components/home/CycleSection";
import { EmpathySection } from "@/components/home/EmpathySection";
import { FutureSection } from "@/components/home/FutureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogicSection } from "@/components/home/LogicSection";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmpathySection />
      <FutureSection />
      <LogicSection />
      <CycleSection />
      <CoachStorySection />
      <ServicesSection />
      <ConversionFlowSection />
    </>
  );
}
