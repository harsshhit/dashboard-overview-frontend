import type * as React from "react";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <input
      type="checkbox"
      role="switch"
      className={`h-6 w-11 appearance-none rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 checked:bg-blue-600 ${className}`}
      {...props}
    />
  );
}
