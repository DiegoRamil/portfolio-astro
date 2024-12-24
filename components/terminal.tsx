"use client";

import { useState, useEffect } from "react";
import React from "react";
import {
  handleClose,
  handleFullScreen,
  handleMinimize,
} from "@/functions/top_buttons";

interface TerminalProps {
  children: React.ReactNode;
}

const DELAY_COMPONENTS = 300;

export function Terminal({ children }: TerminalProps) {
  const [content, setContent] = useState<React.ReactNode[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < React.Children.count(children)) {
      const timer = setTimeout(() => {
        setContent((prev) => [
          ...prev,
          React.Children.toArray(children)[currentIndex],
        ]);
        setCurrentIndex((prev) => prev + 1);
      }, DELAY_COMPONENTS);
      return () => clearTimeout(timer);
    }
  }, [children, currentIndex]);

  return (
    <div className="p-4 bg-black text-green-500 min-h-screen">
      <div className="mb-4 flex items-center">
        <button
          className="w-3 h-3 rounded-full bg-red-500 mr-2"
          onClick={handleClose}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-yellow-500 mr-2"
          onClick={handleMinimize}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-green-500"
          onClick={handleFullScreen}
        ></button>
      </div>
      <div className="overflow-hidden">{content}</div>
      {currentIndex < React.Children.count(children) && (
        <div className="animate-pulse">_</div>
      )}
    </div>
  );
}
