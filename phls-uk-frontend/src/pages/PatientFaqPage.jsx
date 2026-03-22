import { useTranslation } from "react-i18next";

function PatientFaqPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("patientFaq.q1.question"),
      answer: t("patientFaq.q1.answer"),
    },
    {
      question: t("patientFaq.q2.question"),
      answer: t("patientFaq.q2.answer"),
    },
    {
      question: t("patientFaq.q3.question"),
      answer: t("patientFaq.q3.answer"),
    },
    {
      question: t("patientFaq.q4.question"),
      answer: t("patientFaq.q4.answer"),
    },
    {
      question: t("patientFaq.q5.question"),
      answer: t("patientFaq.q5.answer"),
    },
    {
      question: t("patientFaq.q6.question"),
      answer: t("patientFaq.q6.answer"),
    },
    {
      question: t("patientFaq.q7.question"),
      answer: t("patientFaq.q7.answer"),
    },
    {
      question: t("patientFaq.q8.question"),
      answer: t("patientFaq.q8.answer"),
    },
  ];

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">{t("patientFaq.title")}</h1>
          <p className="page-subtitle">
            {t("patientFaq.subtitle")}
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