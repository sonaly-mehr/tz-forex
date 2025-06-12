"use client";
import { useEffect } from "react";

export default function WindowDetector({ onMobileChange }) {
  useEffect(() => {
    const handler = () => onMobileChange(window.innerWidth < 992);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [onMobileChange]);

  return null;
}