import { Input } from "@/components/ui/input";
import React from "react";

export default function ContactInput({placeholder, type}) {
  return (
    <>
      <Input type={type} placeholder={placeholder} className={"bg-transparent dark:bg-transparent text-white placeholder:text-slate-100 dark:placeholder:text-white focus-visible:placeholder:text-white dark:focus-visible:placeholder:text-turquoise border border-slate-100 dark:border-white focus:border-none focus-visible:ring-white focus-visible:ring-offset-0 dark:focus-visible:ring-turquoise"} />
    </>
  );
}