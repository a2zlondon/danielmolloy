import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for danielmolloy.com",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-10">
                Privacy Policy
              </h1>

              <div className="prose prose-lg max-w-none">
                <p>
                  At Daniel Molloy Design &amp; Technology, your privacy is important
                  to us. This Privacy Policy explains how we collect, use, and
                  protect your information when you use this website or book a
                  call via Calendly.
                </p>

                <h2>1. Information we collect</h2>
                <p>We may collect personal data when you:</p>
                <ul>
                  <li>Book a call using Calendly</li>
                  <li>Contact us by email</li>
                  <li>Submit information via any forms we may add to the site</li>
                </ul>

                <p>This may include (depending on what you provide):</p>
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Phone number</li>
                  <li>LinkedIn profile URL</li>
                  <li>Any other information you choose to share</li>
                </ul>

                <h2>2. How we use your data</h2>
                <p>We collect this information to:</p>
                <ul>
                  <li>Respond to your inquiry or interest in our services</li>
                  <li>
                    Provide information about our software, design, or consulting
                    services
                  </li>
                  <li>
                    Send occasional updates, case studies, or relevant offers
                    (you may opt out anytime)
                  </li>
                  <li>Improve our marketing and communication strategies</li>
                </ul>

                <p>
                  We do not sell your data or share it with third parties for
                  marketing purposes.
                </p>

                <h2>3. Third-party processors (Calendly)</h2>
                <p>
                  If you book a call, your information will be processed by
                  Calendly in order to schedule and manage the appointment. Please
                  review Calendly’s privacy policy for details on how they handle
                  personal data.
                </p>

                <h2>4. Data storage and security</h2>
                <p>
                  Your data is stored using secure, encrypted services and is
                  only accessible to authorized people. We comply with GDPR and
                  other applicable data protection regulations.
                </p>

                <h2>5. Your rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Request access to the data we hold about you</li>
                  <li>Correct or update your information</li>
                  <li>Withdraw consent or request deletion at any time</li>
                </ul>

                <p>
                  To exercise your rights, contact us at{" "}
                  <a href="mailto:connect@danielmolloy.com">
                    connect@danielmolloy.com
                  </a>
                  .
                </p>

                <h2>6. Data retention</h2>
                <p>
                  We retain personal data for up to 12 months unless you request
                  deletion sooner, or we are required to retain it longer to
                  comply with legal obligations.
                </p>

                <h2>7. Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your data, please contact:
                </p>
                <p>
                  Daniel Molloy Design &amp; Technology
                  <br />
                  Email:{" "}
                  <a href="mailto:connect@danielmolloy.com">
                    connect@danielmolloy.com
                  </a>
                  <br />
                  Website: <a href="https://danielmolloy.com">danielmolloy.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

