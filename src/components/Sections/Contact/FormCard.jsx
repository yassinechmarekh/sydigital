import React from "react";
import ContactInput from "./Form/ContactInput";
import ContactTextarea from "./Form/ContactTextarea";

export default function FormCard() {
  return (
    <div
      className={
        "flex flex-col gap-y-4 py-8 px-6 bg-caribbean-current/60 dark:bg-caribbean-current/30 backdrop-blur-sm border border-caribbean-current dark:border-turquoise rounded-xl"
      }
    >
      <h3 className={"text-3xl text-white font-semibold capitalize"}>
        Get In Touch
      </h3>
      <p className={"text-slate-100 dark:text-slate-300"}>
        We’re here to help. Drop us a message, and we'll get back to you as soon
        as possible.
      </p>
      <form className={"flex flex-col gap-y-4"}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Fist Name" type="text" />
          </div>
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Email" type="email" />
          </div>
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Phone" type="tel" />
          </div>
        </div>
        <ContactTextarea placeholder="Message" />
        <button
          type="submit"
          className={
            "main-btn text-base bg-white dark:bg-turquoise text-caribbean-current dark:text-gunmetal"
          }
        >
          Send
        </button>
      </form>
    </div>
  );
}
