function PatientFaqPage() {
  const faqs = [
    {
      question: "What is PHLS-UK?",
      answer:
        "PHLS-UK is a private healthcare search and booking platform that helps patients compare providers, review available appointments, and access services more easily.",
    },
    {
      question: "Do I need an account to use PHLS-UK?",
      answer:
        "You can browse parts of the platform as a guest, but you need a patient account to book and manage appointments.",
    },
    {
      question: "How do I search for appointments?",
      answer:
        "Go to Search Bookings, then filter by city, specialty, maximum price, or preferred date to view available appointment slots.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Once logged in as a patient, select an available slot and choose the booking option shown on the appointment card.",
    },
    {
      question: "Can I cancel a booking?",
      answer:
        "Yes. Open Manage Bookings to view your current appointments and cancel eligible bookings.",
    },
    {
      question: "Can I compare insurance providers?",
      answer:
        "Yes. The Search Insurance page lets you browse and compare available medical insurance providers.",
    },
    {
      question: "Can I change the theme or language?",
      answer:
        "Yes. Visit the Settings page to switch between light and dark mode and choose your preferred language.",
    },
    {
      question: "Who can I contact for support?",
      answer:
        "You can use the contact email shown in the footer for general support and platform enquiries.",
    },
  ];

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Patient FAQs</h1>
          <p className="page-subtitle">
            Common questions for patients using PHLS-UK.
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

export default PatientFaqPage;