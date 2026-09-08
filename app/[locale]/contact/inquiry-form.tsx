"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const t = useTranslations("contactPage");
  const [status, setStatus] = useState<Status>("idle");
  const [prefillJourney, setPrefillJourney] = useState("");

  // Read ?tour= / ?service= / ?program= on mount instead of via
  // useSearchParams, so this form renders immediately in the initial HTML
  // rather than needing a client-only Suspense boundary.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPrefillJourney(params.get("tour") ?? params.get("service") ?? params.get("program") ?? "");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-forest/20 bg-forest/5 p-6">
        <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-forest" />
        <div>
          <h3 className="font-display text-lg text-forest">{t("formSuccessTitle")}</h3>
          <p className="mt-1 text-sm text-ink/70">{t("formSuccessBody")}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("formName")} name="name" required />
        <Field label={t("formEmail")} name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("formPhone")} name="phone" />
        <Field
          label={t("formJourney")}
          name="journey"
          placeholder={t("formJourneyPlaceholder")}
          defaultValue={prefillJourney}
          key={prefillJourney}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("formDates")} name="dates" />
        <Field label={t("formGroupSize")} name="groupSize" type="number" min={1} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">{t("formMessage")}</label>
        <textarea
          name="message"
          rows={5}
          placeholder={t("formMessagePlaceholder")}
          className="w-full rounded-xl border border-ink/15 bg-sand-light px-3.5 py-2.5 text-sm outline-none placeholder:text-ink/40 focus:border-forest"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-clay">
          <AlertCircle size={15} /> {t("formErrorBody")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 rounded-full bg-ochre px-6 py-3 text-sm font-medium text-sand-light transition-colors hover:bg-ochre-light disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 size={15} className="animate-spin" />}
        {status === "submitting" ? t("formSubmitting") : t("formSubmit")}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        min={min}
        className="w-full rounded-xl border border-ink/15 bg-sand-light px-3.5 py-2.5 text-sm outline-none placeholder:text-ink/40 focus:border-forest"
      />
    </div>
  );
}
