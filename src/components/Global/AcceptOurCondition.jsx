import React from "react";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";

export default function AcceptOurCondition() {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        className={
          "data-[state=unchecked]:bg-slate-600 dark:data-[state=unchecked]:bg-slate-400 data-[state=checked]:bg-caribbean-current dark:data-[state=checked]:bg-turquoise"
        }
      />
      <Label
        htmlFor="airplane-mode"
        className={"label text-slate-600 dark:text-slate-300"}
      >
        I agree to the{" "}
        <Link
          to='/privacy-policy'
          className={
            "text-gunmetal dark:text-white font-semibold hover:text-caribbean-current dark:hover:text-turquoise hover:underline transition-all duration-300 ease-in-out"
          }
        >
          Terms & Conditions
        </Link>{" "}
        of SyDigital.
      </Label>
    </div>
  );
}
