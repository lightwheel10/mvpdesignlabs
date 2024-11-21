'use client';

import { cn } from "@/lib/utils";

export const AnimatedGradient = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 -z-50 overflow-hidden", className)}>
      <div className="absolute h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-gradient" />
      <div className="absolute right-0 h-[50rem] w-[50rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 opacity-20 blur-3xl animate-gradient-slow" />
    </div>
  );
};
