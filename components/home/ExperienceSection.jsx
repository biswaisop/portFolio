import AnimatedText from "@/components/ui/AnimatedText";
import { experience } from "@/lib/data";

const internship = experience.find(({ type }) => type === "Internship");

export default function ExperienceSection() {
  return (
    <section className="experience-layout" id="experience">
      <AnimatedText lines={["Experience"]} />
      <article className="experience-entry">
        <p className="experience-period">{internship.period} <span aria-hidden="true">·</span> {internship.duration}</p>
        <h3>{internship.role}</h3>
        <p className="experience-company">{internship.company}</p>
        <ul>{internship.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </article>
    </section>
  );
}

