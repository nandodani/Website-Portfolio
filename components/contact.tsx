"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Braces,
  Github,
  Linkedin,
  Mail,
  MessageCircleCode,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="flex items-center space-x-3">
      <motion.div
        className="relative group flex items-center"
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <motion.div
          className="absolute -left-8 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none z-20"
          variants={{ rest: {}, hover: {} }}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 35, y: -5, rotate: -20 },
              hover: {
                opacity: 1,
                x: 25,
                y: -20,
                rotate: 0,
                transition: {
                  duration: 0.35,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              },
            }}
          >
            <Mail size={14} />
          </motion.div>

          <motion.div
            variants={{
              rest: { opacity: 0, x: 35, y: -5, rotate: 20 },
              hover: {
                opacity: 1,
                x: 43,
                y: -20,
                rotate: 0,
                transition: {
                  duration: 0.35,
                  delay: 0.05,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              },
            }}
          >
            <Send size={14} />
          </motion.div>
        </motion.div>

        <Link
          href="mailto:fernandodaniel.work@gmail.com"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          Email
        </Link>
      </motion.div>

      <span className="text-textDimmed">•</span>

      <motion.div
        className="relative group flex items-center"
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <motion.div
          className="absolute -left-8 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none z-20"
          variants={{ rest: {}, hover: {} }}
        >
          {/* MAIL ICON */}
          <motion.div
            variants={{
              rest: { opacity: 0, x: 35, y: -5, rotate: -20 },
              hover: {
                opacity: 1,
                x: 25,
                y: -20,
                rotate: 0,
                transition: {
                  duration: 0.35,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              },
            }}
          >
            <Linkedin size={14} />
          </motion.div>

          <motion.div
            variants={{
              rest: { opacity: 0, x: 35, y: -5, rotate: 20 },
              hover: {
                opacity: 1,
                x: 65,
                y: -20,
                rotate: 0,
                transition: {
                  duration: 0.35,
                  delay: 0.05,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              },
            }}
          >
            <MessageCircleCode size={14} />
          </motion.div>
        </motion.div>

        <Link
          href="https://www.linkedin.com/in/nandodani"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn
        </Link>
      </motion.div>

      <span className="text-textDimmed">•</span>

      <motion.div
        className="relative group flex items-center"
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <motion.div
          className="absolute -left-8 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none z-20"
          variants={{ rest: {}, hover: {} }}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 35, y: -5, rotate: -20 },
              hover: {
                opacity: 1,
                x: 25,
                y: -20,
                rotate: 0,
                transition: {
                  duration: 0.35,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              },
            }}
          >
            <Github size={14} />
          </motion.div>

          <motion.div
            variants={{
              rest: { opacity: 0, x: 35, y: -5, rotate: 20 },
              hover: {
                opacity: 1,
                x: 50,
                y: -20,
                rotate: 0,
                transition: {
                  duration: 0.35,
                  delay: 0.05,
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              },
            }}
          >
            <Braces size={14} />
          </motion.div>
        </motion.div>

        <Link
          href="https://github.com/nandodani"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </Link>
      </motion.div>
    </div>
  );
}
