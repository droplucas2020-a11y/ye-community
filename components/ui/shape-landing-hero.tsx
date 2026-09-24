"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type ShapeSettings = {
  rotate?: number;
  width?: number;
  height?: number;
  y?: number;
};

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  y = 15,
  gradient = "from-white/[0.08]",
}: ShapeSettings & {
  className?: string;
  delay?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, y, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full border-2 border-white/[0.15] bg-gradient-to-r to-transparent backdrop-blur-[2px]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
            gradient,
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function GeometricBackdrop({
  className,
  rotate = 12,
  width = 600,
  height = 140,
  y = 15,
}: ShapeSettings & { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d45ff]/[0.08] via-transparent to-[#d9ff43]/[0.06] blur-3xl" />

      <ElegantShape
        delay={0.3}
        width={width}
        height={height}
        rotate={rotate}
        y={y}
        gradient="from-[#5d45ff]/[0.2]"
        className="left-[-24%] top-[12%] md:left-[-10%] md:top-[16%]"
      />
      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        y={y}
        gradient="from-[#d9ff43]/[0.12]"
        className="right-[-28%] top-[68%] md:right-[-8%] md:top-[72%]"
      />
      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        y={y}
        gradient="from-violet-500/[0.16]"
        className="bottom-[6%] left-[4%] md:left-[9%]"
      />
      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        y={y}
        gradient="from-amber-300/[0.13]"
        className="right-[8%] top-[8%] md:right-[16%]"
      />
      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        y={y}
        gradient="from-cyan-400/[0.12]"
        className="left-[18%] top-[5%] md:left-[24%]"
      />
    </div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  rotate = 12,
  width = 600,
  height = 140,
  y = 15,
}: ShapeSettings & {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + index * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
      <GeometricBackdrop
        rotate={rotate}
        width={width}
        height={height}
        y={y}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-12"
          >
            <Circle className="size-2 fill-[#d9ff43]/80 text-[#d9ff43]/80" />
            <span className="text-sm tracking-wide text-white/60">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-white/90 to-[#d9ff43] bg-clip-text text-transparent">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-white/40 sm:text-lg md:text-xl"
          >
            Crafting exceptional digital experiences through innovative design
            and cutting-edge technology.
          </motion.p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </div>
  );
}

export { HeroGeometric };
export default HeroGeometric;
