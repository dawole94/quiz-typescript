"use client"

import QuestionWindow from "@/components/QuestionWindow";
import WelcomeWindow from "@/components/WelcomeWindow";
import SummaryWindow from "@/components/SummaryWindow";
import Image from "next/image";
import { MyProvider } from "@/components/MyContext";
import { VisibilityProvider } from "@/components/VisibilityContext";
import { useVisibilityContext } from "@/components/VisibilityContext";

const MainContent = () => {
  const { isVisible } = useVisibilityContext();

  return isVisible ? <SummaryWindow /> : <QuestionWindow />;
};

export default function Home() {
  return (
    <>
      <img src="/background-landscape.webp" alt="background image" className="w-full h-screen object-fill"/>
      {/* <WelcomeWindow/> */}
      <VisibilityProvider>
        <MyProvider>
          <MainContent/>
        </MyProvider>
      </VisibilityProvider>
      
    </>
        
      
  );
}
