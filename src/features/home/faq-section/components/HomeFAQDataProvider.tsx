import { getHomeFAQs } from "../lib/getHomeFAQs";
import HomeFAQAccordion from "./HomeFAQAccordion";

function HomeFAQDataProvider() {
  const FAQs = getHomeFAQs();

  return (
    <div className="flex flex-col gap-5">
      {FAQs.then((FAQs) =>
        FAQs.map((faq) => (
          <HomeFAQAccordion
            key={faq.id}
            id={faq.id}
            summary={faq.summary}
            details={faq.details}
          />
        )),
      )}
    </div>
  );
}

export default HomeFAQDataProvider;
