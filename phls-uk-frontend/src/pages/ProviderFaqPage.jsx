import { useTranslation } from "react-i18next";

function ProviderFaqPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("providerFaq.q1.question"),
      answer: t("providerFaq.q1.answer"),
    },
    {
      question: t("providerFaq.q2.question"),
      answer: t("providerFaq.q2.answer"),
    },
    {
      question: t("providerFaq.q3.question"),
      answer: t("providerFaq.q3.answer"),
    },
    {
      question: t("providerFaq.q4.question"),
      answer: t("providerFaq.q4.answer"),
    },
    {
      question: t("providerFaq.q5.question"),
      answer: t("providerFaq.q5.answer"),
    },
    {
      question: t("providerFaq.q6.question"),
      answer: t("providerFaq.q6.answer"),
    },
    {
      question: t("providerFaq.q7.question"),
      answer: t("providerFaq.q7.answer"),
    },
    {
      question: t("providerFaq.q8.question"),
      answer: t("providerFaq.q8.answer"),
    },
  ];

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">{t("providerFaq.title")}</h1>
          <p className="page-subtitle">
            {t("providerFaq.subtitle")}
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