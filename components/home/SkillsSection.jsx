import { resumeSkills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="wrap section-split">
        <h2>Technical skills</h2>
        <dl className="skills-list">
          {resumeSkills.map(([label, items]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
