export const blogPost = {
  slug: "aws-certified-cloud-practitioner-guide",
  title: "AWS Certified Cloud Practitioner: Is It Worth It & How to Crush It in 1 Month",
  excerpt:
    "A comprehensive guide to the AWS Certified Cloud Practitioner certification, covering what it is, who should take it, pros & cons, and a detailed one-month study plan to help you pass with confidence.",
  date: "2025-11-14",
  readTime: "12 min read",
  tags: ["AWS", "Cloud", "Certification", "Career"],
  featured: true,
  thumbnail: "/blog/aws-certification.jpg",
}

export const content = (
  <>
    <section className="my-6 rounded-lg border-l-4 border-blue-600 bg-slate-50 p-4">
      <strong>TL;DR:</strong>
      <div className="mt-2 text-sm text-slate-700">
        The AWS Certified Cloud Practitioner (CLF-C02) is a foundational certification validating cloud literacy across
        concepts, security, services and pricing. It's low cost, widely recognized, and useful for non-technical and
        early-stage cloud professionals. Not deep enough for senior cloud architects. Follow the compact 1-month plan
        below and consider this recommended course:
        <div className="mt-3">
          <a
            href="https://external-teksystems.udemy.com/course/aws-certified-cloud-practitioner-new/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#0ea5a2] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#0d8f8c]"
          >
            Udemy: AWS Certified Cloud Practitioner
          </a>
        </div>
      </div>
    </section>

    <h2 className="mt-12 mb-6 text-3xl font-extrabold">Fast facts</h2>
    <ul>
      <li>
        <strong>Exam:</strong> AWS Certified Cloud Practitioner (CLF-C02)
      </li>
      <li>
        <strong>Format:</strong> Multiple choice / multiple response • ~90 minutes
      </li>
      <li>
        <strong>Domains:</strong> Cloud Concepts, Security & Compliance, Technology & Services, Billing/Pricing/Support
      </li>
      <li>
        <strong>Cost:</strong> Low relative to associate certs (USD 100 typical)
      </li>
      <li>
        <strong>Validity:</strong> 3 years
      </li>
    </ul>

    <h2 className="mt-12 mb-6 text-3xl font-extrabold">Who should take this?</h2>
    <ul>
      <li>Beginners to cloud who want validated foundation-level knowledge.</li>
      <li>Non-technical roles (PMs, sales, analysts) needing cloud literacy.</li>
      <li>Technical pros who want a broad AWS overview before specializing.</li>
    </ul>

    <h2 className="mt-12 mb-6 text-3xl font-extrabold">Pros & Cons (at a glance)</h2>
    <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <strong className="text-lg">Pros</strong>
        <ul className="mt-2">
          <li>Recognized AWS credential — good resume signal</li>
          <li>Low cost and accessible</li>
          <li>Teaches cloud concepts, security basics, pricing & support</li>
          <li>Great stepping stone to associate certs</li>
        </ul>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <strong className="text-lg">Cons</strong>
        <ul className="mt-2">
          <li>Shallow depth — not a substitute for hands-on experience</li>
          <li>Employers seeking deep engineers prioritize associate/professional certs</li>
          <li>Requires up-to-date study because AWS evolves</li>
        </ul>
      </div>
    </div>

    <h2 className="mt-12 mb-6 text-3xl font-extrabold">One-Month Study Plan (compact)</h2>
    <p className="mb-6 text-sm text-slate-600 italic">Target commitment: 40–60 hours over 4 weeks (~10–15 hrs/week).</p>

    <h3 className="mt-8 mb-4 text-2xl font-bold">Week 1 — Foundations & core services</h3>
    <ul>
      <li>Read the official exam guide (domains & weightings).</li>
      <li>Complete Cloud Concepts modules in the recommended Udemy course.</li>
      <li>Familiarize with core services: EC2, Lambda, S3, RDS, DynamoDB, VPC.</li>
      <li>Hands-on: create an S3 bucket, view IAM users, explore the console.</li>
    </ul>

    <h3 className="mt-8 mb-4 text-2xl font-bold">Week 2 — Security & architecture principles</h3>
    <ul>
      <li>Study Shared Responsibility Model, IAM, encryption, CloudTrail/CloudWatch basics.</li>
      <li>Review AWS Well-Architected Framework pillars.</li>
      <li>Hands-on: create IAM policies/roles, view logs.</li>
    </ul>

    <h3 className="mt-8 mb-4 text-2xl font-bold">Week 3 — Billing, pricing & practice questions</h3>
    <ul>
      <li>Learn pricing models: On-Demand, Reserved, Savings Plans; Cost Explorer basics.</li>
      <li>Do targeted practice questions on pricing and support plans.</li>
      <li>Build flashcards for service comparisons (EC2 vs Lambda, RDS vs DynamoDB).</li>
    </ul>

    <h3 className="mt-8 mb-4 text-2xl font-bold">Week 4 — Mocks & final polish</h3>
    <ul>
      <li>Take 2–3 full timed practice exams (90 minutes each).</li>
      <li>Review weak areas from mocks; revisit course videos or docs.</li>
      <li>Light final review and exam logistics check (ID, system check for online proctoring).</li>
    </ul>

    <h2 className="mt-12 mb-6 text-3xl font-extrabold">Recommended resources</h2>
    <ul>
      <li>
        <a
          href="https://external-teksystems.udemy.com/course/aws-certified-cloud-practitioner-new/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-[#0ea5a2] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#0d8f8c]"
        >
          AWS Certified Cloud Practitioner – Udemy course (recommended)
        </a>
      </li>
      <li>AWS official exam guide & SkillBuilder (search AWS Certification site)</li>
      <li>Practice exams & flashcards (TutorialsDojo, Whizlabs, or similar providers)</li>
      <li>AWS free tier account for hands-on exploration (create a single S3 bucket, IAM user, etc.)</li>
    </ul>

    <h2 className="mt-12 mb-6 text-3xl font-extrabold">Quick exam tips</h2>
    <ul>
      <li>Read each question carefully — AWS exams often test wording and use-case nuance.</li>
      <li>If unsure, eliminate wrong options, flag and return later.</li>
      <li>Hands-on tasks are few, but console familiarity helps retention.</li>
      <li>Sleep well before exam day — mental clarity beats cramming.</li>
    </ul>

    <footer className="mt-12 text-sm text-slate-600">
      <p>
        Summary: The AWS Certified Cloud Practitioner is an efficient, low-cost path to verified cloud literacy. Use a
        compact 4-week plan, practice often, and pair study with the recommended Udemy course to maximize passing odds.
      </p>
      <p className="mt-4">Published: Nov 18, 2025 • Good luck on your exam!</p>
    </footer>
  </>
)
