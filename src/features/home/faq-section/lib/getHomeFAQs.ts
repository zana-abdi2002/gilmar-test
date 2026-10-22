import { mockFAQ } from "../mock/faq";
import { FAQAccordion } from "../types";

export async function getHomeFAQs(): Promise<FAQAccordion[]> {
  return mockFAQ;
}
