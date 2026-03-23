import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const texts = [
  {
    text: "Your Next Opportunity Starts Here",
  },
  {
    text: "●",
    bullet: true,
  },
  {
    text: "We are here for you",
  },
  {
    text: "●",
    bullet: true,
  },
  {
    text: "Your Next Opportunity Starts Here",
  },
  {
    text: "●",
    bullet: true,
  },
  {
    text: "We are here for you",
  },
  {
    text: "●",
    bullet: true,
  },
  {
    text: "Your Next Opportunity Starts Here",
  },
  {
    text: "●",
    bullet: true,
  },
  {
    text: "We are here for you",
  },
  {
    text: "●",
    bullet: true,
  },
];

const Text_animated = () => {
  const controls = useAnimation();
  const trackRef = useRef();

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    const SPEED = 40;
    const duration = trackWidth / SPEED;

    controls.start({
      x: [0, -trackWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-15 flex items-center justify-between bg-[#002325] overflow-hidden">
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...texts, ...texts, ...texts].map((item, index) => (
          <h1
            key={index}
            className={`text-md font-bold ${item.bullet ? "text-[#45DB61]" : "text-white"}`}
          >
            {item.text}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Text_animated;
