"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { getAssetPath } from "@/lib/utils";
import ScrollScene from "@/components/ui/ScrollScene";

export default function PhotographyGallery({ photographs }) {
  const dialog = useRef(null);
  const [current, setCurrent] = useState(0);
  if (!photographs.length) return null;
  const photo = photographs[current];

  function open(index) {
    setCurrent(index);
    dialog.current.showModal();
  }

  function step(offset) {
    setCurrent((index) => (index + offset + photographs.length) % photographs.length);
  }

  return (
    <section className="photography-gallery">
      <div className="site-wrap">
        <h2>Photography</h2>
        <div className="photo-grid">
          {photographs.map(({ src, alt, caption }, index) => (
            <ScrollScene className="photo-tile" key={src}><button type="button" onClick={() => open(index)} aria-label={`Enlarge photo: ${alt}`}>
              <Image data-parallax src={getAssetPath(src)} alt={alt} fill sizes="(max-width: 760px) 90vw, 45vw" />
              {caption && <span>{caption}</span>}
            </button></ScrollScene>
          ))}
        </div>
      </div>
      <dialog className="photo-lightbox" ref={dialog} aria-label="Photo viewer" data-lenis-prevent onKeyDown={(event) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}>
        <div className="lightbox-layout" onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}>
          <button type="button" aria-label="Close photo viewer" className="lightbox-close" onClick={() => dialog.current.close()}><X aria-hidden="true" /></button>
          <figure><Image src={getAssetPath(photo.src)} alt={photo.alt} fill sizes="90vw" />{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>
          {photographs.length > 1 && <div className="lightbox-actions"><button type="button" onClick={() => step(-1)}>Previous</button><button type="button" onClick={() => step(1)}>Next</button></div>}
        </div>
      </dialog>
    </section>
  );
}
