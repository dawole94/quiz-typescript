import WelcomeWindow from "@/components/WelcomeWindow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <img src="/background-landscape.webp" alt="background image" className="w-full h-screen object-fill"/>
      <WelcomeWindow/>
    </>
        
      
  );
}
