"use client";

import React, { useEffect, useState } from "react";

export default function UseScroll() {
  const [valueScroll, setValueScroll] = useState(0);
  const getScroll = () => {
    const scrollPosition = window.scrollY;
    setValueScroll(scrollPosition);
  };

  useEffect(() => {
    getScroll();
    window.addEventListener("scroll", getScroll);
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return { valueScroll };
}
