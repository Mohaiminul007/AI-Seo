"use client";
import Button from "./ui/Button";
import StarsBg from "@/assets/stars.png";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section
      className="h-[392px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{
        backgroundImage: `url(${StarsBg.src})`,
        backgroundRepeat: `repeat`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] "></div>
      {/* planet start */}
      <div
        className="absolute size-64 md:size-96
        rounded-full
        bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] 
        shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]
        rounded-borderfull  border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      ></div>
      {/* planet end */}

      {/* ring 1 start */}
      <motion.div
        style={{ 
          translateY:'-50%',
          translateX:'-50%',
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration:30,
        }}
        className="absolute size-[344px] md:size-[580px] rounded-full border opacity-20 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="absolute size-2  bg-white rounded-full "></div>
        </div>
      </motion.div>
      {/* ring 1 end */}

      {/* ring 2 start */}
      <div className="absolute size-[444px] md:size-[780px] rounded-full border opacity-20 border-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-dashed"></div>
      {/* ring 2 end */}
      {/* ring 3 start */}
      <div className="absolute size-[544px] md:size-[980px] rounded-full border opacity-20 border-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* ring 3 end */}

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="all-para max-w-xl">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist now</Button>
        </div>
      </div>
    </section>
  );
};
