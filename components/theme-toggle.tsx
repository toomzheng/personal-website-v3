"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { PullStringToggle } from "./pull-string-toggle"

declare global {
  interface Window {
    startLightTransition: () => void;
    setTheme?: (theme: string) => void;
  }
}

export function ThemeToggle() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    window.setTheme = setTheme;
  }, [setTheme]);

  return <PullStringToggle />;
}
