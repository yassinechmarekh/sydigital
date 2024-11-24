import TopPage from "@/components/Global/TopPage";
import React from "react";

export default function Policy() {
  const body = [
    {
      title:
        "Our campaigns get your business in front of the right people at the right time to increase organic traffic and boost engagement.",
      parag: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed scelerisque quam justo, sed volutpat neque tempor porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat tellus id risus condimentum fringilla. Etiam maximus porttitor magna sit amet consectetur. Integer eget ante scelerisque tortor sodales aliquet. Integer in vestibulum leo, vitae tristique orci. Etiam tortor sem, porttitor at pellentesque sit amet, fringilla nec massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus orci.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.",
      ],
    },
    {
      title: "Security and Retention",
      parag: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed scelerisque quam justo, sed volutpat neque tempor porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat tellus id risus condimentum fringilla.",
      ],
    },
    {
      title: "Contact Us",
      parag: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed scelerisque quam justo, sed volutpat neque tempor porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat tellus id risus condimentum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl ligula.",
      ],
    },
  ];
  return (
    <>
      <TopPage page="Privacy Policy" />
      <div className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
        <div className="container">
          <h1 className={"text-3xl text-gunmetal dark:text-white font-bold capitalize"}>
            Privacy Policy
          </h1>
          <p className={"parag mt-4"}>
            For each project we establish relationships with partners who we
            know will help us create added value for your project. As well as
            bringing together the public and private sectors, we make
            sector-overarching links to gather knowledge and to learn from each
            other who we know will help us create added value for your project.
          </p>
          <h4
            className={"my-3 text-xl text-caribbean-current dark:text-turquoise font-semibold capitalize"}
          >
            Updated January 10, 2021
          </h4>
          <p className={"parag"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae
            ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi
            augue, ut sodales felis rhoncus bibendum. Fusce sagittis nibh orci,
            id vestibulum tortor aliquet ut. Vivamus maximus felis ac nisl
            luctus.
          </p>
          <p className={"parag mt-3"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae
            ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi
            augue.
          </p>
          <div className={"mt-6"}>
            {body.map((item, index) => (
              <div key={index} className={"py-6 border-t border-slate-600"}>
                <h3 className={"text-2xl font-semibold text-caribbean-current dark:text-white"}>
                  {item.title}
                </h3>
                {item.parag.map((element, key) => (
                  <p key={key} className={"parag mt-3"}>
                    {element}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
