import React from "react";
import Form from "./Form";
import StepCard from "./StepCard";

export default function Main() {
  const steps = [
    {
      id: 1,
      title: "Complete the Form",
      description: "Fill out the appointment form with your details and project requirements. We’ll review your information and get back to you shortly.",
    },
    {
      id: 2,
      title: "Our Team Will Contact You",
      description: "Once we receive your form, our expert team will reach out to you to discuss your project and answer any questions.",
    },
    {
      id: 3,
      title: "Relax and Let Us Handle the Rest",
      description: "After confirming the details, sit back and relax while we work on your project. We're here to make your vision a reality.",
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
