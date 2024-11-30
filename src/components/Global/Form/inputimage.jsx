import { Input } from "@/components/ui/input";
import React from "react";

export default function Inputimage({ placeholder, type,onchange,id, ...params }) {
  return (
    <>
      <Input
        type={type}
   
        placeholder={placeholder}
        onChange={onchange}
        id={id}
        className={
          "bg-transparent dark:bg-transparent text-gunmetal dark:text-white placeholder:text-gunmetal dark:placeholder:text-white focus-visible:placeholder:text-caribbean-current dark:focus-visible:placeholder:text-turquoise border border-gunmetal dark:border-white focus:border-none focus-visible:ring-caribbean-current focus-visible:ring-offset-0 dark:focus-visible:ring-turquoise"
        }
        {...params}
      />
    </>
  );
}
