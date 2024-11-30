import TopPage from "@/components/Global/TopPage";
import React from "react";

export default function Policy() {
  const body = [
    {
      title: "1. Information We Collect",
      parag: [
        "We collect personal information only when you provide it voluntarily through our appointment form. This may include :",
      ],
      list: [
        "Personal Identification Information: Name, email address, phone number, company name (if applicable), and any other details you choose to provide when scheduling an appointment or making an inquiry.",
      ],
    },
    {
      title: "2.How We Use Your Information",
      parag: [
        "The information you provide is used solely for the purpose of :",
      ],
      list: [
        "Scheduling and confirming your appointment",
        "Communicating with you regarding your project or inquiry",
        "Providing you with the services or information you requested",
        "Sending a follow-up email after your appointment or inquiry (if necessary)",
      ],
    },
    {
      title: "3. How We Protect Your Information",
      parag: [
        "We take the security of your personal information seriously and implement appropriate measures to safeguard it. These include :",
      ],
      list: [
        "Storing your data securely and limiting access to authorized personnel only",
        "Using encrypted connections when transmitting sensitive information (such as your appointment details)",
      ],
    },
    {
      title: "4. Your Rights and Choices",
      parag: [
        "Since we only collect information you voluntarily provide, you have full control over the information you share with us. You may request to :",
      ],
      list: [
        "Access, modify, or delete any personal information you've provided",
        "Opt-out of further communications by contacting us directly or following any opt-out instructions in our emails",
      ],
    },
    {
      title: "5. Third-Party Links",
      parag: [
        "Our website may contain links to third-party websites. These sites have their own privacy policies, and we encourage you to review them before providing any personal information. We are not responsible for the content or privacy practices of these external sites.",
      ],
    },
    {
      title: "6. Changes to This Privacy Policy",
      parag: [
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We recommend reviewing this policy periodically to stay informed about how we are protecting your information.',
      ],
    },
    {
      title: "Contact Us",
      parag: [
        "If you have any questions or concerns about this Privacy Policy, or if you wish to access or modify the information you have shared with us, please contact us at:",
      ],
      list: [
        "SyDigital",
        "Address: Morocco, Casablanca",
        "Mail : sydigitalteam@gmail.com",
      ],
    },
  ];
  return (
    <>
      <TopPage page="Privacy Policy" />
      <div className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
        <div className="container">
          <h1
            className={
              "text-3xl text-gunmetal dark:text-white font-bold capitalize"
            }
          >
            Privacy Policy
          </h1>
          <p className={"parag mt-4"}>
            At SyDigital, we respect your privacy and are committed to
            protecting any personal information you provide to us. This Privacy
            Policy outlines how we handle your information when you use our
            website and interact with us, particularly through the appointment
            form.
          </p>
          <h4
            className={
              "my-3 text-xl text-caribbean-current dark:text-turquoise font-semibold capitalize"
            }
          >
            Updated November 27, 2024
          </h4>
          <p className={"parag"}>
            We are committed to safeguarding your privacy. We understand the
            importance of protecting your personal data and want you to feel
            confident while using our website. This Privacy Policy explains how
            we collect, use, and protect the information you provide when
            interacting with us, particularly through the appointment form on
            our website. We take your privacy seriously and ensure that any
            personal information you share with us is treated with the utmost
            care and security.
          </p>
          <p className={"parag mt-3"}>
            We do not collect or store sensitive personal information unless you
            voluntarily provide it to us through the appointment form or other
            communication channels. This policy applies to all interactions with
            our website and outlines the steps we take to protect your privacy
            and how we handle your data.
          </p>
          <div className={"mt-6"}>
            {body.map((item, index) => (
              <div key={index} className={"py-6 border-t border-slate-600"}>
                <h3
                  className={
                    "text-2xl font-semibold text-caribbean-current dark:text-white"
                  }
                >
                  {item.title}
                </h3>
                {item.parag.map((element, key) => (
                  <p key={key} className={"parag mt-3"}>
                    {element}
                  </p>
                ))}
                {item.list && (
                  <ul className={"parag mt-2 list-disc w-[95%] mx-auto"}>
                    {item.list.map((l, key) => (
                      <li key={key}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
