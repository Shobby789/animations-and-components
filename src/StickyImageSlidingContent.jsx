import React from "react";

const StickyImageSlidingContent = () => {
  return (
    <div className="w-full min-h-screen relative flex">
      <div className="w-full lg:w-[50%] p-10">
        {cards.map((card, index) => {
          return (
            <div key={index} className="mb-12 flex flex-col gap-3">
              <h2 className="text-4xl">{card.title}</h2>
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>

      <img
        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
        className="w-full lg:w-[50%] sticky top-10 bottom-10 right-0 h-[70vh]"
      />
    </div>
  );
};

export default StickyImageSlidingContent;

export const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Founding and Early Days",
    id: 1,
    text: "Bravo Foxtrot LLC was founded in September 2023 by Brandon Puhlman and Frank Esposito in Canton, GA. Both Brandon and Frank, police officers at the Sandy Springs Police Department, brought their practical experience to the table. The initial concept stemmed from their desire to combat human trafficking and provide better tools for law enforcement officers on the ground. Inspired by the need to create intuitive and reliable technology, they aimed to develop solutions that would allow agencies and officers to communicate and share information more efficiently. Guided by their extensive experience in law enforcement, the founders' vision is to become a leading provider of innovative and effective solutions for the field.",
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "Initial Development",
    id: 2,
    text: "The journey began with a focus on tracking criminal activities through foot traffic and vehicles. Despite not being computer scientists or developers, Brandon and Frank identified a significant gap in the market that could make police work more efficient. Leveraging Brandon’s network, they connected with skilled individuals, including fellow veterans, who possessed the technical expertise to tackle these challenges.",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Key Milestones",
    id: 3,
    text: "A significant turning point came with the addition of Jenny Doyle, who wholeheartedly believed in their mission. Jenny’s financial investment and dedication of her time were instrumental in moving the project forward. She became a part-owner of Bravo Foxtrot LLC, further solidifying the team’s commitment to their vision.",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Growth and Expansion",
    id: 4,
    text: "With perseverance and diligence, Bravo Foxtrot LLC successfully developed the prototype for Route Scout. This tool represents the culmination of their efforts to provide law enforcement with advanced vehicle recognition and tracking software. Route Scout is designed to enhance situational awareness and predictive analysis, making it a versatile tool for addressing various types of criminal behavior.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Recent Developments",
    id: 5,
    text: "In addition to finalizing the prototype for Route Scout, Bravo Foxtrot has completed the wireframes for Make Cents, a financial crimes tool designed to identify fraud and money laundering. These developments mark significant milestones in the company's journey toward delivering innovative technology solutions for law enforcement.",
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Service-Disabled Veteran-Owned Business",
    id: 6,
    text: "Bravo Foxtrot LLC is proudly certified as a Service-Disabled Veteran-Owned business, demonstrating the founders' dedication to leveraging their military experience to support and enhance law enforcement capabilities.",
  },
];
