"use client";

import { useId, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactSection({ standalone = false }) {
  const formRef = useRef(null);
  const id = useId();
  const [status, setStatus] = useState("idle");
  const Heading = standalone ? "h1" : "h2";

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const { serviceId, templateId, publicKey } = personalInfo.emailJs;
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="wrap section-split">
        <div className="section-intro">
          <Heading>Let&apos;s talk.</Heading>
          <p>Have a role, project, or question in mind? Send me a message.</p>
          <a className="email-link" href={`mailto:${personalInfo.links.email}`}>{personalInfo.links.email} <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div><label htmlFor={`${id}-name`}>Name</label><input id={`${id}-name`} name="name" autoComplete="name" required /></div>
            <div><label htmlFor={`${id}-email`}>Email</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required /></div>
          </div>
          <div><label htmlFor={`${id}-subject`}>Subject</label><input id={`${id}-subject`} name="subject" required /></div>
          <div><label htmlFor={`${id}-message`}>Message</label><textarea id={`${id}-message`} name="message" rows={5} required /></div>
          <button className="button button-primary" type="submit" disabled={status === "sending"}>Send message <ArrowUpRight size={17} aria-hidden="true" /></button>
          <div className="form-status" role="status" aria-atomic="true">
            {status === "sending" && "Sending your message…"}
            {status === "sent" && "Message sent. Thanks for getting in touch."}
            {status === "error" && <>Your message couldn&apos;t be sent. Try again or <a href={`mailto:${personalInfo.links.email}`}>email me directly</a>.</>}
          </div>
        </form>
      </div>
    </section>
  );
}
