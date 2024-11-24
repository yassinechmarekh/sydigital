import React from "react";
import Form from "./Form";
import StepCard from "./StepCard";

export default function Main() {
  const steps = [
    {
      id: 1,
      title: "We'll ask key questions",
      description: "We are hyper-efficient at synthesizing your core needs.",
    },
    {
      id: 2,
      title: "We'll draft a proposal",
      description: "We can harness the expertise of our local + global team.",
    },
    {
      id: 3,
      title: "We'll present the plan",
      description: "We will show you how to turnideas into scalable action.",
    },
  ];
  return (
    <div className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <Form />
          </div>
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col gap-y-4">
              {steps.map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
