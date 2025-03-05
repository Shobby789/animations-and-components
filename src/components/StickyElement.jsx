import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex justify-end gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[950px] w-screen overflow-hidden bg-neutral-200"
    >
      {/* <span className="text-9xl font-bold text-white absolute -top-4 left-4 z-20">
        01
      </span> */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div
        className="absolute inset-0 bg-red-300 z-10 flex flex-col justify-start gap-y-48 px-10 lg:px-48 gap-5"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/man-woman-investigators-discussing-about-crime-clues-found-records-files-private-investigation-police-archive-room-full-racks-detectives-studying-forensic-evidence-handheld-shot_482257-59908.jpg?t=st=1725369044~exp=1725372644~hmac=f287a302ff88e002120f8f936c8f6869514cffb4241fd679d0993414b95a78f6&w=1060)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-white text-5xl font-bold">Courage</h2>
        <p className="text-xl text-white backdrop-blur-lg font-normal lg:w-1/2">
          Bravo Foxtrot LLC was founded in September 2023 by Brandon Puhlman and
          Frank Esposito in Canton, GA. Both Brandon and Frank, police officers
          at the Sandy Springs Police Department, brought their practical
          experience to the table. The initial concept stemmed from their desire
          to combat human trafficking and provide better tools for law
          enforcement officers on the ground. Inspired by the need to create
          intuitive and reliable technology, they aimed to develop solutions
          that would allow agencies and officers to communicate and share
          information more efficiently. Guided by their extensive experience in
          law enforcement, the founders' vision is to become a leading provider
          of innovative and effective solutions for the field.
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
