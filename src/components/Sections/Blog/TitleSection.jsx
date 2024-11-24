import React from "react";

export default function TitleSection({title}) {
  return (
    <>
      <h1 className={"py-2 text-3xl font-bold text-caribbean-current dark:text-white capitalize border-b border-caribbean-current dark:border-turquoise"}>
        {title}
      </h1>
    </>
  );
}
