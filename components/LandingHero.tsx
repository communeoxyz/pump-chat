/**
 * File: /components/LandingHero.tsx
 *
 * 🎨 Premium Hero Section:
 * - Subtle gradient transition into Features section.
 * - Smooth, natural blending for a seamless experience.
 */

"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function LandingHero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* 🔹 Layer 1: Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient" />

      {/* 🔹 Layer 2: Soft Radial Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.9)_100%)]" />

      {/* 🔹 Hero Title (Responsive font sizes, break-words, subtle glow) */}
      <motion.h1
        className="
          relative z-10 
          text-4xl sm:text-5xl md:text-6xl 
          font-extrabold 
          leading-tight 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
          animate-text-glow 
          subtle-glow
          break-words
        "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to Kulture.Fun
      </motion.h1>

      {/* 🔹 Subtitle with a Soft Glow & Responsive Scale */}
      <motion.p
        className="relative z-10 mt-4 hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The Future of Token-Gated Communication.
        Safe, Engaging, and Tailored for You.
      </motion.p>

      {/* 🔹 Call to Action Button (Animated Gradient & Glow) */}
      <motion.div
        layoutId="hero-button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mt-6 flex justify-center w-full"
      >
        <Button
          href="/chat"
          variant="custom"
          size="lg"
          className="inline-flex button-primary"
        >
          Get Started
        </Button>
      </motion.div>

      {/* 🔹 Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}
