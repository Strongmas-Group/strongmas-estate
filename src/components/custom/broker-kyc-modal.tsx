"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const GOLD = "#B8923E";

/** Dispatch this from any button to open the broker / realtor KYC modal. */
export const openBrokerKyc = () =>
  window.dispatchEvent(new CustomEvent("strongmas:broker-kyc"));

/* ── Form building blocks ── */

const FormGroup = ({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="mb-6 text-sm uppercase tracking-[0.3em]" style={{ color: GOLD }}>
      <span className="text-white/40">{letter}</span> · {title}
    </h3>
    <div className="grid gap-6 sm:grid-cols-2">{children}</div>
  </div>
);

const Field = ({
  name,
  label,
  type = "text",
  required = false,
  full = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  placeholder?: string;
}) => (
  <div className={full ? "sm:col-span-2" : undefined}>
    <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-white/60">
      {label}
      {required && " *"}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="mt-2 w-full border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white"
    />
  </div>
);

const TextArea = ({
  name,
  label,
  required = false,
}: {
  name: string;
  label: string;
  required?: boolean;
}) => (
  <div className="sm:col-span-2">
    <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-white/60">
      {label}
      {required && " *"}
    </label>
    <textarea
      id={name}
      name={name}
      rows={2}
      required={required}
      className="mt-2 w-full resize-none border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white"
    />
  </div>
);

const Select = ({
  name,
  label,
  options,
  required = false,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-white/60">
      {label}
      {required && " *"}
    </label>
    <select
      id={name}
      name={name}
      required={required}
      defaultValue=""
      className="mt-2 w-full border-b border-white/40 bg-transparent py-2 text-white outline-none focus:border-white [&>option]:bg-neutral-900"
    >
      <option value="" disabled>
        Select…
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const Declaration = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white/75">
    <input
      type="checkbox"
      name={name}
      value="Agreed"
      required
      className="mt-1 h-4 w-4 flex-shrink-0 accent-[#B8923E]"
    />
    {children}
  </label>
);

export default function BrokerKycModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Open on the shared event; close on Escape; lock body scroll while open.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("strongmas:broker-kyc", onOpen);
    return () => window.removeEventListener("strongmas:broker-kyc", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
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
      const res = await fetch("/api/broker-kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(grouped),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError("Sorry, something went wrong. Please try again or email hello@strongmasng.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/80 p-4 md:p-8"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Broker and realtor registration and KYC form"
    >
      <div
        className="relative w-full max-w-3xl border border-white/15 bg-[#0c0c0d] p-6 text-white sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="py-14 text-center">
            <div className="mx-auto mb-6 h-px w-12" style={{ background: GOLD }} />
            <h2 className="text-2xl font-light uppercase tracking-[0.2em]">Application received</h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/60">
              Thank you. Your registration has been submitted to the Strongmas onboarding team. Our
              compliance team will review your details and contact you regarding next steps.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-8 border border-white/40 px-10 py-3 text-xs uppercase tracking-[0.3em] transition-colors hover:border-white"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
                Strongmas Development
              </p>
              <h2 className="mt-3 text-2xl font-light uppercase tracking-[0.15em]">
                Broker / Realtor Registration &amp; KYC
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                For intending brokers, realtors, marketers, referral partners and independent sales
                consultants seeking to market or refer clients to Strongmas Development
                Limited projects. All information is treated as confidential and used
                solely for verification, compliance and onboarding.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <FormGroup letter="A" title="Personal Information">
                <Field name="Full Name" label="Full Name" required full />
                <Field name="Date of Birth" label="Date of Birth" type="date" required />
                <Select
                  name="Gender"
                  label="Gender"
                  options={["Male", "Female", "Prefer not to say"]}
                />
                <Field name="Nationality" label="Nationality" required />
                <Select
                  name="Marital Status"
                  label="Marital Status"
                  options={["Single", "Married", "Divorced", "Widowed", "Prefer not to say"]}
                />
                <TextArea name="Residential Address" label="Residential Address" required />
                <Field name="Phone Number" label="Phone Number" type="tel" required />
                <Field name="Email Address" label="Email Address" type="email" required />
              </FormGroup>

              <FormGroup letter="B" title="Business / Professional Information">
                <Field name="Business Name" label="Business Name (if applicable)" />
                <Field name="RC Number" label="RC Number (if registered)" />
                <Field name="Occupation / Profession" label="Occupation / Profession" required />
                <Field
                  name="Years of Experience in Real Estate"
                  label="Years of Experience"
                  type="number"
                />
                <Field
                  name="Current Company / Organization"
                  label="Current Company / Organization"
                />
                <Field name="Social Media Handles" label="Social Media Handles" />
                <TextArea name="Office Address" label="Office Address" />
              </FormGroup>

              <FormGroup letter="C" title="Identification & KYC">
                <Select
                  name="Means of Identification"
                  label="Means of Identification"
                  required
                  options={[
                    "International Passport",
                    "National ID Card",
                    "Driver's License",
                    "Permanent Voter's Card",
                  ]}
                />
                <Field name="ID Number" label="ID Number" required />
                <Field name="Date Issued" label="Date Issued" type="date" />
                <Field name="Expiry Date" label="Expiry Date" type="date" />
                <Field name="Bank Name" label="Bank Name" />
                <Field name="Account Name" label="Account Name" />
                <Field name="Account Number" label="Account Number" />
              </FormGroup>

              <FormGroup letter="D" title="Next of Kin Information">
                <Field name="Next of Kin Name" label="Name of Next of Kin" required />
                <Field name="Next of Kin Relationship" label="Relationship" required />
                <Field name="Next of Kin Phone Number" label="Phone Number" type="tel" required />
                <TextArea name="Next of Kin Address" label="Address" />
              </FormGroup>

              <FormGroup letter="E" title="Realtor Declaration">
                <div className="space-y-4 sm:col-span-2">
                  <Declaration name="Declaration: Information is accurate">
                    I hereby declare that the information provided in this form is true, accurate
                    and complete to the best of my knowledge.
                  </Declaration>
                  <Declaration name="Declaration: Agrees to policies">
                    I agree to comply with all policies, commission structures, ethical standards
                    and sales procedures of Strongmas Development Limited.
                  </Declaration>
                  <Declaration name="Declaration: Understands appointment terms">
                    I understand that completion of this form does not automatically confer
                    appointment or authorization to act on behalf of Strongmas Development
                    Limited unless expressly approved in writing by the Company, and
                    that commissions shall only be payable in accordance with executed broker
                    agreements and approved sales transactions.
                  </Declaration>
                </div>

                <Field
                  name="Signature of Applicant"
                  label="Signature (type your full name)"
                  required
                  placeholder="Your full name"
                />
                <Field name="Date" label="Date" type="date" required />
              </FormGroup>

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <div className="border-t border-white/10 pt-8">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-12 py-4 text-xs uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
                  style={{ background: GOLD }}
                >
                  {submitting ? "Submitting…" : "Submit Registration"}
                </button>
                <p className="mt-4 text-xs text-white/40">
                  Your details are sent securely to the Strongmas onboarding team and treated as
                  confidential.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
