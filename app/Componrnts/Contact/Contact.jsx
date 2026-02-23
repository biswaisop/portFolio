"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      await emailjs.sendForm(
        "service_2sgjnch",
        "template_i44wek3",
        formRef.current,
        {
          publicKey: "MewtqevsXxA7zoUya"
        }
      );

      formRef.current.reset();
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50 sm:p-8">
          <div className="mb-10">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-zinc-900 dark:text-zinc-100">
              Contact
            </h2>
            <p className="mt-3 text-[clamp(1rem,1.4vw,1.125rem)] text-zinc-600 max-w-2xl dark:text-zinc-300">
              Open to AI and backend engineering internships. Reach out directly
              for opportunities or collaboration.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60"
            >
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-zinc-600 dark:text-zinc-300">
                Name
                <input
                  type="text"
                  name="name"
                  required
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#1e3a8a] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </label>
                <label className="text-sm text-zinc-600 dark:text-zinc-300">
                Email
                <input
                  type="email"
                  name="email"
                  required
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#1e3a8a] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </label>
            </div>

              <label className="mt-4 block text-sm text-zinc-600 dark:text-zinc-300">
              Subject
              <input
                type="text"
                name="subject"
                required
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#1e3a8a] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              />
            </label>

              <label className="mt-4 block text-sm text-zinc-600 dark:text-zinc-300">
              Message
              <textarea
                name="message"
                rows={5}
                required
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#1e3a8a] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              />
            </label>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="mt-6 w-full rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1a347a] disabled:cursor-not-allowed disabled:opacity-70"
            >
              Send Message
            </button>

            {status.type !== "idle" && (
              <p
                className={`mt-4 text-sm ${
                  status.type === "success"
                    ? "text-emerald-600"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-zinc-500"
                }`}
              >
                {status.message}
              </p>
            )}
            </form>

            <div className="grid gap-4">
              {[
                {
                  label: "GitHub",
                  value: "github.com/biswaisop",
                  href: "https://github.com/biswaisop",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/biswadip-mandal-76b65222b",
                  href: "https://www.linkedin.com/in/biswadip-mandal-76b65222b/",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 text-sm text-zinc-600 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
