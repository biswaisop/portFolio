import React from "react";
import Image from "next/image";
import aboutImage from "./images/used.png";

const AboutSection = () => {
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={aboutImage} width={300} height={300} />
      </div>
    </section>
  );
};

export default AboutSection;
