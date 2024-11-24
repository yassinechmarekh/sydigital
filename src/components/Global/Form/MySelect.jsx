import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MySelect({ placeholder, selectItems }) {
  return (
    <>
      <Select>
        <SelectTrigger
          className={
            "bg-transparent dark:bg-transparent text-gunmetal dark:text-white placeholder:text-gunmetal dark:placeholder:text-white focus-visible:placeholder:text-caribbean-current dark:focus-visible:placeholder:text-turquoise border border-gunmetal dark:border-white focus:border-none focus-visible:ring-caribbean-current focus-visible:ring-offset-0 dark:focus-visible:ring-turquoise"
          }
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={"bg-blue-50 dark:bg-[#0e1b24]"}>
          {selectItems.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
