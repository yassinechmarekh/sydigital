import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Mycheckbox({ label, id, ...params }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        className={
          "data-[state=checked]:bg-caribbean-current dark:data-[state=checked]:bg-turquoise"
        }
        onCheckedChange={(checked) => {
          if (params.onChange) params.onChange(checked);
        }}
        {...params}
      />
      <label
        htmlFor={id}
        className="text-gunmetal dark:text-white capitalize select-none"
      >
        {label}
      </label>
    </div>
  );
}
