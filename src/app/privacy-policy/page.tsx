import type { Metadata } from "next";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import CldImage from "@/components/custom/cld-image";

export const metadata: Metadata = {
  title: "Privacy Policy | Strongmas Residence",
  description:
    "How Strongmas Residence and Development Limited collects, uses, and protects your personal information, and the choices you have over it.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "25 August 2026";

type Section = {
  heading: string;
  intro?: string;
  items?: { title: string; body: string }[];
  body?: string[];
};

const sections: Section[] = [
  {
    heading: "Information We Collect",
    intro: "We may collect the following types of information:",
    items: [
      {
        title: "Personal Information",
        body: "This includes your name, email address, and phone number you provide to us through our website or other communication channels.",
      },
      {
        title: "Property Information",
        body: "If you express interest in a property or use our services, we may collect property preferences, budget, and other related information.",
      },
      {
        title: "Website Usage Data",
        body: "We may collect non-personal information such as your IP address, browser type, operating system, referring URLs, and pages visited to improve our website's functionality and user experience.",
      },
    ],
    body: [
      "Our primary aim in collecting your information is to enable us to give you a seamless customer experience, to provide you with the information required about us, and to inform you about our products.",
    ],
  },
  {
    heading: "How We Use Your Information",
    intro: "We use your information for the following purposes:",
    items: [
      {
        title: "Communication",
        body: "We use your contact information to respond to your inquiries, provide updates, and share information about properties and services.",
      },
      {
        title: "Property Services",
        body: "If you express interest in a property, we may use your information to facilitate property showings, negotiations, and related services.",
      },
      {
        title: "Analytics",
        body: "We analyse non-personal data to improve our website's performance and understand user preferences.",
      },
      {
        title: "Marketing",
        body: "With your consent, we may send you promotional emails about properties and services we think you might be interested in.",
      },
    ],
  },
  {
    heading: "Data Sharing",
    body: ["We do not sell or rent your personal information to third parties."],
  },
  {
    heading: "Your Choices",
    body: [
      'You can opt out of receiving marketing emails by clicking the "unsubscribe" link in our emails.',
      "You can update or delete your personal information by contacting us directly.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We implement security measures to protect your information from unauthorized access, alteration, or disclosure.",
    ],
  },
  {
    heading: "Links to Third-Party Sites",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of those websites.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to this Privacy Policy",
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the "Last Updated" date will reflect the latest revision.',
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-neutral-900 text-white min-h-screen">
          {/* Hero */}
          <section className="relative h-[40vh] bg-black">
            <CldImage
              src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753027728/lpffnelemh8hfbr1b3ei.jpg"
              alt="Privacy Policy"
              width={1920}
              sizes="100vw"
              loading="eager"
              className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">OUR PRIVACY POLICY</h1>
              <p className="text-sm text-neutral-300 mt-2">
                <a href="/" className="underline hover:text-white">
                  Home
                </a>{" "}
                / Privacy Policy
              </p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Last Updated: {LAST_UPDATED}
            </p>

            <p className="mt-6 text-neutral-300 leading-relaxed">
              Strongmas Residence and Development Limited is committed to safeguarding your privacy.
              This Privacy Policy outlines the types of information we collect, how we use and
              protect it, and your rights regarding your personal information. By using our website
              and services, you consent to the practices described in this policy.
            </p>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold border-b border-neutral-700 pb-2">
                    {section.heading}
                  </h2>

                  {section.intro && <p className="mt-4 text-neutral-300">{section.intro}</p>}

                  {section.items && (
                    <div className="mt-6 space-y-6">
                      {section.items.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-lg border border-neutral-700 bg-neutral-800 p-5"
                        >
                          <h3 className="text-base font-medium text-white">{item.title}</h3>
                          <p className="mt-2 text-neutral-300 leading-relaxed">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-neutral-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section>
                <h2 className="text-2xl font-semibold border-b border-neutral-700 pb-2">
                  Contact Us
                </h2>
                <p className="mt-4 text-neutral-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a
                    href="tel:+2349010777777"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    +234 901 077 7777
                  </a>
                  .
                </p>
              </section>
            </div>

            <p className="mt-12 border-t border-neutral-700 pt-6 text-sm text-neutral-400">
              By using our website and services, you agree to the terms outlined in this Privacy
              Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
