"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

interface Props {
  images: string[];
  startIndex?: number;
  children: React.ReactNode;
}

export default function ProjectLightbox({ images, startIndex = 0, children }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(startIndex);

  return (
    <>
      <div onClick={() => { setIndex(startIndex); setOpen(true); }} className="cursor-pointer">
        {children}
      </div>
      {open && (
        <Lightbox
          images={images}
          index={index}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
