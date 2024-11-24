import React from "react";

export default function StepCard({step}) {
  return (
    <div
      className={
        "p-4 bg-turquoise/50 backdrop-blur-sm border border-gunmetal dark:border-turquoise rounded-xl"
      }
    >
      <span
        className={
          "w-10 h-10 flex items-center justify-center bg-gunmetal text-xl text-white font-bold rounded-full"
        }
      >
        {step.id}
      </span>
      <h4 className={"text-xl font-semibold text-caribbean-current dark:text-white uppercase mt-2"}>
        {step.title}
      </h4>
      <p className={"text-slate-600 dark:text-slate-300 mt-1"}>
        {step.description}
      </p>
    </div>
  );
}
