"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MdiLightSwitchOff } from "./icons/light-switch-off";
import { MdiLightSwitch } from "./icons/light-switch-on";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const clickSounds = React.useRef<{
    on?: HTMLAudioElement;
    off?: HTMLAudioElement;
  }>({});
  const isDark = resolvedTheme === "dark";

  React.useEffect(() => {
    setMounted(true);
    clickSounds.current = {
      on: typeof Audio !== "undefined" ? new Audio("/light-switch-on.mp3") : undefined,
      off: typeof Audio !== "undefined" ? new Audio("/light-switch-off.mp3") : undefined,
    };
  }, []);

  const handleToggle = () => {
    const nextIsDark = !isDark;
    const sound = nextIsDark ? clickSounds.current.off : clickSounds.current.on;

    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }

    setTheme(nextIsDark ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={handleToggle}
      aria-label="Toggle theme"
      disabled={!mounted}
      className="cursor-pointer"
    >
      <AnimatePresence initial={false} mode="wait">
        {mounted && (
          <motion.span
            key={isDark ? "dark" : "light"}
            initial={{ rotateX: isDark ? -15 : 15, opacity: 0.6 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: isDark ? 15 : -15, opacity: 0.6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <MdiLightSwitchOff className="h-full w-full" />
            ) : (
              <MdiLightSwitch className="h-full w-full" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
