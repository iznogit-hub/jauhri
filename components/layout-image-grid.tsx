"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

const SkeletonOne = () => (
  <div>
    <p className="font-old-london font-bold md:text-4xl text-xl text-white">Grand Weddings</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Experience royal celebrations in our majestic banquet halls, tailored for perfection.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-old-london font-bold md:text-4xl text-xl text-white">Lush Green Lawns</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Sprawling outdoor spaces for vibrant Haldi ceremonies and starlit receptions.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-old-london font-bold md:text-4xl text-xl text-white">Exquisite Catering</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A premium culinary journey with international and traditional cuisines.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-old-london font-bold md:text-4xl text-xl text-white">Bespoke Decor</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Transforming visions into reality with dazzling floral and lighting designs.
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/WhatsApp Image 2026-04-05 at 1.43.01 PM.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/20260212_195610.jpg (1).jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/20260212_193339.jpg (1).jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/20260212_193509.jpg.jpeg",
  },
];

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[300px] md:min-h-[400px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden border border-border/50 bg-secondary/20",
              selected?.id === card.id
                ? "rounded-3xl cursor-pointer absolute inset-0 h-[80vh] w-[90vw] md:w-[70vw] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-card rounded-3xl h-full w-full"
                : "bg-card rounded-3xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed h-full w-full left-0 top-0 bg-black/80 z-10",
          selected?.id ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        animate={{ opacity: selected?.id ? 0.8 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card, isSelected }: { card: Card; isSelected: boolean }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn(
        "absolute inset-0 h-full w-full transition duration-500",
        isSelected ? "object-contain p-4" : "object-cover" // Contain when selected to see the WHOLE image
      )}
      alt="JFH Venue Image"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-3xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-10 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export function LayoutGridDemo() {
  return (
    <section className="min-h-screen py-20 w-full bg-background">
      <LayoutGrid cards={cards} />
    </section>
  );
}