import { cn } from "@/lib/utils";
import * as React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-8 w-auto text-primary", className)}
    >
      <title>RespireVital Logo</title>
      <path d="M6 12H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2" />
      <path d="M18 12h2a2 2 0 0 0 2-2V8c0-1.1-.9-2-2-2h-2" />
      <path d="M12 18V6" />
      <path d="M12 18a6 6 0 0 0 6-6h0a6 6 0 0 0-6-6h0a6 6 0 0 0-6 6h0a6 6 0 0 0 6 6Z" />
    </svg>
  );
}
