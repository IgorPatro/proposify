import React from "react";

export const HeroSimpleCenteredIcon = () => {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-between rounded-md bg-gray-800 p-2">
      <div className="h-0.5 w-3 rounded-sm bg-gray-500" />
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="h-1 w-12 rounded-sm bg-gray-500" />
        <div className="h-0.5 w-10 rounded-sm bg-gray-500" />
      </div>
      <div className="flex gap-1">
        <div className="h-0.5 w-3 rounded-sm bg-gray-500" />
        <div className="h-0.5 w-3 rounded-sm bg-gray-500" />
        <div className="h-0.5 w-3 rounded-sm bg-gray-500" />
      </div>
    </div>
  );
};
