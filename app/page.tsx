"use client"

import QuestionWindow from "@/components/QuestionWindow";
import WelcomeWindow from "@/components/WelcomeWindow";
import SummaryWindow from "@/components/SummaryWindow";
import Image from "next/image";
import { MyProvider } from "@/components/MyContext";
import { VisibilityProvider } from "@/components/VisibilityContext";
import { useVisibilityContext } from "@/components/VisibilityContext";
import { useWWVisibilityContext, WWVisibilityProvider } from "@/components/WWVisibilityContext";

const MainContent = () => {
  const { isVisible } = useVisibilityContext();
  const {isWWVisible} = useWWVisibilityContext();
  
  if(isWWVisible) {
    return <WelcomeWindow/>
  } else return isVisible ? <SummaryWindow /> : <QuestionWindow />;
};

export default function Home() {
  return (
    <>
      <img src="/background-landscape.webp" alt="background image" className="w-full h-screen object-fill"/>
      {/* <WelcomeWindow/> */}
      <WWVisibilityProvider>
        <VisibilityProvider>
          <MyProvider>
            <MainContent/>
          </MyProvider>
        </VisibilityProvider>
      </WWVisibilityProvider>
      
      
    </>
        
      
  );
}
