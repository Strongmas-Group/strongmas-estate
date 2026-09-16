"use client";

import Link from "next/link";
import { ClipboardList, BadgeCheck, CalendarCheck } from "lucide-react";
import BuyerRegistrationModal, { openRegister } from "@/components/custom/buyer-registration-modal";
import BrokerKycModal, { openBrokerKyc } from "@/components/custom/broker-kyc-modal";

const GOLD = "#B8923E";

const cardClass =
  "group flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.03] p-8 text-left transition hover:border-white/40 hover:bg-white/[0.06]";

/**
 * Homepage entry point to every form on the site. The Aurum buyer
 * registration opens the shared modal in place; the others are full pages.
 */
export default function FormsCta() {
  return (
    <section id="register" className="bg-[#0a0a0b] py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
            Get Started
          </p>
          <h2 className="mt-4 font-headline text-3xl font-light uppercase tracking-[0.1em] text-white md:text-4xl">
            Register Your Interest
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Whether you are buying, partnering or simply want to see a residence in person, start
            here.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Buyer registration, opens the Aurum modal without leaving the page */}
          <button type="button" onClick={openRegister} className={cardClass}>
            <ClipboardList className="h-7 w-7" style={{ color: GOLD }} />
            <h3 className="mt-6 text-lg text-white">Aurum Buyer Registration</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
              Priority access to available residences at Aurum, Lekki Phase 1, tell us your
              preferred residence, payment plan and timeline.
            </p>
            <span className="mt-6 text-[11px] tracking-[0.25em] uppercase text-white/70 group-hover:text-white">
              Register Interest →
            </span>
          </button>

          {/* Broker / realtor onboarding, opens the KYC modal in place */}
          <button type="button" onClick={openBrokerKyc} className={cardClass}>
            <BadgeCheck className="h-7 w-7" style={{ color: GOLD }} />
            <h3 className="mt-6 text-lg text-white">Broker &amp; Realtor Registration</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
              For brokers, realtors, marketers and referral partners who want to market or refer
              clients to Strongmas projects. Complete the KYC form to begin onboarding.
            </p>
            <span className="mt-6 text-[11px] tracking-[0.25em] uppercase text-white/70 group-hover:text-white">
              Complete KYC Form →
            </span>
          </button>

          {/* Inspection booking */}
          <Link href="/book-inspection" className={cardClass}>
            <CalendarCheck className="h-7 w-7" style={{ color: GOLD }} />
            <h3 className="mt-6 text-lg text-white">Book an Inspection</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
              Arrange a private site tour or a virtual walkthrough of any Strongmas Development
              project with our sales team.
            </p>
            <span className="mt-6 text-[11px] tracking-[0.25em] uppercase text-white/70 group-hover:text-white">
              Book a Visit →
            </span>
          </Link>
        </div>
      </div>

      <BuyerRegistrationModal />
      <BrokerKycModal />
    </section>
  );
}
