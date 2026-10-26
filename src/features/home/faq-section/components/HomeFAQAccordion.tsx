"use client";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AccordionSummary } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FAQAccordion } from "../types";

type Props = FAQAccordion;

function HomeFAQAccordion({ id, summary, details }: Props) {
  return (
    <div className="flex w-full max-w-155 grow flex-col items-end justify-between gap-4">
      <Accordion className="bg-navbar-surface border-navbar-border w-full overflow-hidden rounded-[20px] border shadow-lg ring-3 ring-white">
        <AccordionSummary
          expandIcon={<CustomDownwardIcon />}
          className="text-[0.75rem] font-extrabold sm:text-[0.875rem]"
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails className="text-muted-foreground text-[0.875rem] font-semibold">
          {details}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default HomeFAQAccordion;

// -------------------------------------

function CustomDownwardIcon() {
  return (
    <ArrowDownwardIcon className="bg-primary-gradient size-7.5 rounded-full text-white shadow-lg" />
  );
}
