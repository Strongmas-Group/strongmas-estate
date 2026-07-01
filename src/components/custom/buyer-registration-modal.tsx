"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const GOLD = "#B8923E";

/** Dispatch this from any button to open the buyer-registration modal. */
export const openRegister = () =>
  window.dispatchEvent(new CustomEvent("aurum:register"));

/* ── Form building blocks ── */
const FormGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="mb-6 text-sm tracking-[0.3em] uppercase" style={{ color: GOLD }}>
      {title}
    </h3>
    <div className="space-y-6">{children}</div>
  </div>
);

const Field = ({
  name,
  type = "text",
  required = false,
}: {
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="text-xs tracking-[0.2em] uppercase text-white/60">
      {name}
      {required && " *"}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="mt-2 w-full border-b border-white/40 bg-transparent py-2 outline-none focus:border-white"
    />
  </div>
);

const CheckGroup = ({
  label,
  name,
  options,
  single = false,
}: {
  label: string;
  name: string;
  options: string[];
  single?: boolean;
}) => (
  <div>
    <label className="text-xs tracking-[0.2em] uppercase text-white/60">{label}</label>
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {options.map((opt) => (
        <label key={opt} className="flex cursor-pointer items-center gap-3 text-sm text-white/80">
          <input
            type={single ? "radio" : "checkbox"}
            name={name}
            value={opt}
            className="h-4 w-4 flex-shrink-0 accent-[#B8923E]"
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default function BuyerRegistrationModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Open on the shared event; close on Escape; lock body scroll while open.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("aurum:register", onOpen);
    return () => window.removeEventListener("aurum:register", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const grouped: Record<string, string | string[]> = {};
    for (const [key, value] of data.entries()) {
      const v = String(value).trim();
      if (!v) continue;
      const existing = grouped[key];
      if (existing === undefined) grouped[key] = v;
      else if (Array.isArray(existing)) existing.push(v);
      else grouped[key] = [existing, v];
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(grouped),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError("Sorry, something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="aurum-modal-backdrop fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm md:p-8"
      onClick={() => setOpen(false)}
    >
      <div
        className="aurum-modal-panel relative my-auto w-full max-w-3xl border border-white/15 bg-[#0c0c0d]/95 p-6 text-white shadow-2xl md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-6 h-px w-16" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.12em]">
            <span className="font-bold">EXCLUSIVE</span>{" "}
            <span className="text-white/55">Buyer Registration</span>
          </h2>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-white/65 leading-relaxed">
          Thank you for your interest in Aurum by Strongmas Residence. Kindly complete this form to
          enjoy priority access to available residences and exclusive ownership opportunities.
        </p>

        {sent ? (
          <p className="mt-16 text-center text-lg text-white/80">
            Thank you — your registration has been received. Our team will be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-14">
            <FormGroup title="Personal Details">
              <div className="grid gap-6 md:grid-cols-2">
                <Field name="Full Name" required />
                <Field name="Company" />
                <Field name="Phone Number" type="tel" required />
                <Field name="Email Address" type="email" required />
              </div>
            </FormGroup>

            <FormGroup title="Purchase Interest">
              <CheckGroup
                label="Preferred Residence"
                name="Preferred Residence"
                options={["2-Bedroom Apartment", "3-Bedroom Penthouse"]}
              />
              <CheckGroup
                single
                label="Preferred Payment Plan"
                name="Preferred Payment Plan"
                options={[
                  "100% Outright Payment",
                  "40% Deposit + Flexible Instalments",
                  "20% Deposit + Flexible Instalments",
                  "Bespoke Payment Plan",
                ]}
              />
              <CheckGroup
                single
                label="Purchase Timeline"
                name="Purchase Timeline"
                options={["Reserve Today", "Within 14 Days", "Within 30 Days"]}
              />
              <CheckGroup
                single
                label="Next Step"
                name="Next Step"
                options={[
                  "Reserve My Preferred Residence",
                  "Schedule a Private Presentation",
                  "Schedule a Private Site Tour",
                  "Speak with the ED for Discount",
                ]}
              />
            </FormGroup>

            <FormGroup title="Additional Requirements">
              <CheckGroup
                single
                label="How did you hear about Aurum?"
                name="How did you hear about Aurum"
                options={[
                  "USH 101",
                  "Private Invitation",
                  "Existing Strongmas Client",
                  "Referral",
                  "Business Associate",
                  "Broker / Agent",
                  "Social Media",
                ]}
              />
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/60">Other</label>
                <input
                  name="How did you hear — Other"
                  className="mt-2 w-full border-b border-white/40 bg-transparent py-2 outline-none focus:border-white"
                />
              </div>
            </FormGroup>

            <FormGroup title="Priority Buyer Club">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-white/75">
                <input
                  type="checkbox"
                  name="Priority Buyer Club"
                  value="Yes"
                  className="mt-1 h-4 w-4 flex-shrink-0 accent-[#B8923E]"
                />
                I would like to receive priority access to new releases, exclusive pricing,
                investment opportunities and private Strongmas Residence events.
              </label>
            </FormGroup>

            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 text-xs tracking-[0.3em] uppercase text-black transition-opacity disabled:opacity-60"
              style={{ background: GOLD }}
            >
              {submitting ? "Submitting…" : "Submit Registration"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
