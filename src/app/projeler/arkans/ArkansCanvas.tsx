"use client";

import { useEffect } from "react";

export function ArkansCanvas() {
  useEffect(() => {
    document.documentElement.classList.add("arkans-canvas");
    return () => document.documentElement.classList.remove("arkans-canvas");
  }, []);

  return null;
}
