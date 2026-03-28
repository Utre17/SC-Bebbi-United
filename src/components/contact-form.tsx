"use client";

import { FormEvent, useState, useTransition } from "react";
import { contactDetails, teams } from "@/content/site-data";
import { Icon } from "@/components/icon";

type ContactFormProps = {
  variant?: "dark" | "light";
};

export function ContactForm({ variant = "dark" }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const isDark = variant === "dark";
  const inputClass = isDark
    ? "border-white/10 bg-white/10 text-white placeholder:text-white/35 focus:border-[#34d399]/50"
    : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#10b981]/50";

  const labelClass = isDark ? "text-white/70" : "text-slate-500";
  const statusClass =
    status?.type === "success"
      ? isDark
        ? "border-[#34d399]/30 bg-[#34d399]/10 text-[#b7f7da]"
        : "border-[#10b981]/20 bg-[#10b981]/10 text-[#065f46]"
      : isDark
        ? "border-red-400/30 bg-red-500/10 text-red-100"
        : "border-red-200 bg-red-50 text-red-700";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        const response = await fetch(contactDetails.formEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Die Anfrage konnte nicht gesendet werden.");
        }

        form.reset();
        setStatus({
          type: "success",
          message: "Danke. Die Anfrage wurde gesendet und wir melden uns so schnell wie möglich.",
        });
      } catch {
        setStatus({
          type: "error",
          message:
            "Das Formular konnte gerade nicht übermittelt werden. Bitte versuche es erneut oder schreibe direkt an info@scbebbiunited.ch.",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
            placeholder="Vor- und Nachname"
          />
        </div>
        <div>
          <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-email">
            E-Mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
            placeholder="dein@email.ch"
          />
        </div>
        <div>
          <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-phone">
            Telefon
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
            placeholder="079 123 45 67"
          />
        </div>
        <div>
          <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-age">
            Alter
          </label>
          <input
            id="contact-age"
            name="age"
            type="number"
            min="4"
            max="99"
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
            placeholder="z. B. 15"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-team">
            Team
          </label>
          <select
            id="contact-team"
            name="team"
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
            defaultValue=""
          >
            <option value="">Bitte wählen</option>
            {teams.map((team) => (
              <option key={team.slug} value={team.name}>
                {team.name}
              </option>
            ))}
            <option value="Andere">Andere</option>
          </select>
        </div>
        <div>
          <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-subject">
            Betreff
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
            placeholder="Probetraining / Frage"
          />
        </div>
      </div>

      <div>
        <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.22em] ${labelClass}`} htmlFor="contact-message">
          Nachricht
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${inputClass}`}
          placeholder="Deine Nachricht an uns..."
        />
      </div>

      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10b981] px-6 py-3 font-bold text-white transition-colors hover:bg-[#34d399] hover:text-[#02110b] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Wird gesendet..." : "Absenden"}
          <Icon name="send" className="h-4 w-4" />
        </button>
        <p className={`text-xs leading-5 ${isDark ? "text-white/60" : "text-slate-500"}`}>
          Mit dem Absenden stimmst du der Kontaktaufnahme zu. Wir melden uns so schnell wie möglich.
        </p>
      </div>

      {status ? (
        <div className={`rounded-2xl border px-4 py-3 text-sm ${statusClass}`} role="status" aria-live="polite">
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
