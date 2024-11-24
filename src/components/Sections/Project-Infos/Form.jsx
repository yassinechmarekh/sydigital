import MyInput from "@/components/Global/Form/MyInput";
import { FormDescription } from "@/components/ui/form";
import { useForm, FormProvider } from "react-hook-form";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import MyTextarea from "@/components/Global/Form/MyTextarea";
import AcceptOurCondition from "@/components/Global/AcceptOurCondition";

export default function Form() {
  const methods = useForm();
  const [socialInputs, setSocialInputs] = useState([
    { id: "facebook", placeholder: "Facebook" },
    { id: "instagram", placeholder: "Instagram" },
    { id: "youtube", placeholder: "Youtube" },
    { id: "linkedin", placeholder: "Linkedin" },
  ]);

  const addSocialInput = () => {
    setSocialInputs([
      ...socialInputs,
      { id: `social-${socialInputs.length + 1}`, placeholder: "" },
    ]);
  };
  return (
    <div className={"mt-10"}>
      <FormProvider {...methods}>
        <form className={"w-full lg:w-2/3 mx-auto flex flex-col gap-y-6"}>
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
            <Label htmlFor="old_website" className={"label"}>
              Old Website
            </Label>
            <MyInput
              placeholder="Your Old Website"
              type="text"
              id="old_website"
            />
            <FormDescription>If you have a old website.</FormDescription>
          </div>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="logo" className={"label"}>
              Upload your Logo
            </Label>
            <MyInput placeholder="Upload your Logo" type="file" id="logo" />
          </div>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="logo" className={"label"}>
              Upload your Images
            </Label>
            <MyInput
              placeholder="Upload your Logo"
              type="file"
              id="logo"
              multiple
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label className={"label"}>Social Links</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialInputs.map((input, index) => (
                <MyInput
                  key={input.id}
                  placeholder={input.placeholder}
                  type="url"
                  id={input.id}
                />
              ))}
              <div
                className={"text-gunmetal dark:text-white hover:text-caribbean-current dark:hover:text-turquoise cursor-pointer transition-colors"}
                onClick={addSocialInput}
              >
                <CiSquarePlus size={40} />
              </div>
            </div>
          </div>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="privacy_policy" className={"label"}>
              Privacy Policy
            </Label>
            <MyTextarea placeholder="Your Privacy Policy" id="privacy_policy" />
          </div>
          <AcceptOurCondition />
          <button type="submit" className={"main-btn text-base"}>
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
