"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  return (
    <div
      className="flex items-center justify-center relative py-20 px-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  isMobile,
  children,
}: {
  isMobile: boolean;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 100, 
        rotateX: 25, 
        scale: isMobile ? 0.7 : 0.9 
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        scale: 1 
      }}
      transition={{ 
        duration: 2.0, 
        delay: 2.09, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{
        // boxShadow:
        //   "0 0 #0000004d, 0 9px 20px #0000004a, 0 17px 17px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 35px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-0 border-[#6C6C6C] p-2 md:p-2 bg-[#222222] opacity-50 rounded-[30px] shadow-2xl z-50"
    >
      <div className="h-full w-full overflow-hidden rounded-3xl bg-gray-100 dark:bg-zinc-100 md:rounded-3xl py-0 md:p-0">
        {children}
      </div>
    </motion.div>
  );
};
