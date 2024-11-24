import MyInput from "@/components/Global/Form/MyInput";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import MySelect from "@/components/Global/Form/MySelect";
import Mycheckbox from "@/components/Global/Form/Mycheckbox";
import MyTextarea from "@/components/Global/Form/MyTextarea";
import AcceptOurCondition from "@/components/Global/AcceptOurCondition";

export default function Form() {
  const plans = [
    "Basic Plan - $150",
    "Standard Plan - $250",
    "Premium Plan - $500",
  ];
  const pages = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Appointment",
    "Works",
    "FAQ's",
    "Privacy Policy",
  ];
  const [showInputOther, setShowInputOther] = useState(false);
  return (
    <div>
      <h2
        className={
          "py-2 text-2xl text-gunmetal dark:text-white relative after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-turquoise"
        }
      >
        Take the First Step to Success !
      </h2>
      <form className={"flex flex-col gap-y-6"}>
        <div className={"flex flex-col sm:flex-row gap-x-4 gap-y-6 mt-6"}>
          <div className="w-full sm:w-1/2 group flex flex-col gap-y-2">
            <Label htmlFor="name" className={"label"}>
              Name
            </Label>
            <MyInput placeholder="Your Name" type="text" id="name" />
          </div>
          <div className="w-full sm:w-1/2 group flex flex-col gap-y-2">
            <Label htmlFor="email" className={"label"}>
              Email
            </Label>
            <MyInput placeholder="Your Email" type="email" id="email" />
          </div>
        </div>
        <div className="group flex flex-col gap-y-2">
          <Label htmlFor="company_name" className={"label"}>
            Company Name
          </Label>
          <MyInput
            placeholder="Name of your Company"
            type="text"
            id="company_name"
          />
        </div>
        <div className="group flex flex-col gap-y-2">
          <Label htmlFor="plan" className={"label"}>
            choose the plan that's right for you
          </Label>
          <MySelect
            placeholder="Select the plan"
            selectItems={plans}
            id="plan"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <Label className={"label normal-case"}>
            What the pages/sections do you want to be in your website ?
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {pages.map((item, index) => (
              <Mycheckbox key={index} label={item} id={item} />
            ))}
            <Mycheckbox
              label="Other"
              id="other"
              onChange={(checked) => setShowInputOther(checked)}
            />
          </div>
          {showInputOther && (
            <MyInput
              placeholder="Ex: Team, Testimonials"
              type="text"
              id="other_pages"
            />
          )}
        </div>
        <div className="group flex flex-col gap-y-2">
          <Label htmlFor="message" className={"label"}>
            Message
          </Label>
          <MyTextarea placeholder="Your Message" id="message" />
        </div>
        <AcceptOurCondition />
        <button type="submit" className={"main-btn text-base"}>
          Submit
        </button>
      </form>
    </div>
  );
}
