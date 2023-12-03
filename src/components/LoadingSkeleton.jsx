import React from "react";

const LoadingSkeleton = () => {
  const skeletonElements = Array.from({ length: 16 }, (_, index) => (
    <div
      key={index}
      className="animate-pulse bg-slate-200 w-32 h-44 rounded-lg m-1"
    ></div>
  ));
  return (
    <div className="w-11/12 h-auto flex  justify-evenly flex-wrap">
      {skeletonElements}
    </div>
  );
};

export { LoadingSkeleton };
