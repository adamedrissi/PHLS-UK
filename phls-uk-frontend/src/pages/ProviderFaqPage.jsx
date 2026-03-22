function ProviderFaqPage() {
  const faqs = [
    {
      question: "What is PHLS-UK for providers?",
      answer:
        "PHLS-UK helps providers present healthcare services online so patients can search, compare, and access appointment availability more easily.",
    },
    {
      question: "How do I register as a provider?",
      answer:
        "On the login and registration page, choose Register and then select the Provider option to create a provider account.",
    },
    {
      question: "Why do I need a clinic ID when registering?",
      answer:
        "The clinic ID connects your provider account to an existing clinic record in the platform.",
    },
    {
      question: "Can providers search the platform too?",
      answer:
        "Yes. Providers can still browse platform content, depending on the features available to their account role.",
    },
    {
      question: "Can providers book appointments?",
      answer:
        "No. Booking actions are intended for patient accounts. Provider accounts are designed for service and availability management.",
    },
    {
      question: "What should I do if my clinic information is incorrect?",
      answer:
        "If your linked clinic information is incorrect, you should contact platform support so the clinic data can be reviewed and updated.",
    },
    {
      question: "Can I use PHLS-UK in dark mode?",
      answer:
        "Yes. Providers can change the platform appearance from the Settings page.",
    },
    {
      question: "Where can I get help with provider access issues?",
      answer:
        "Use the support email shown in the footer for help with registration, access, or platform-related issues.",
    },
  ];

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Provider FAQs</h1>
          <p className="page-subtitle">
            Common questions for providers using PHLS-UK.
          </p>
        </section>

        <section
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            display: "grid",
            gap: "1rem",
          }}
        >
          {faqs.map((item, index) => (
            <article
              key={index}
              className="card"
              style={{ padding: "1.5rem", textAlign: "left" }}
            >
              <h3 style={{ marginBottom: "0.75rem" }}>{item.question}</h3>
              <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                {item.answer}
              </p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ProviderFaqPage;