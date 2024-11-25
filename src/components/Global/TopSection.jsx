import React from "react";

export default function TopSection({subtitle, title, parag}) {
  return (
    <div className="flex flex-col items-center gap-y-2 text-center w-full lg:w-2/3 mx-auto">
      <h3 className={'sub-title'}>{subtitle}</h3>
      <h1 className={'title'}>{title}</h1>
      <p className={'parag mt-2'}>
        {parag}
      </p>
    </div>
  );
}
