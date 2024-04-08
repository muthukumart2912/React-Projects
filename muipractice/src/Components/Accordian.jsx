import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = () => {
  const [expanded, setExpand] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpand(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1"
          aria-label="panel-content1"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptas repellendus, id, ea corporis ad officiis distinctio
            consectetur dolorum quam laborum inventore beatae reprehenderit
            ullam. Accusantium veritatis quisquam libero voluptatem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2"
          aria-label="panel-content2"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptas repellendus, id, ea corporis ad officiis distinctio
            consectetur dolorum quam laborum inventore beatae reprehenderit
            ullam. Accusantium veritatis quisquam libero voluptatem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3"
          aria-label="panel-content3"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptas repellendus, id, ea corporis ad officiis distinctio
            consectetur dolorum quam laborum inventore beatae reprehenderit
            ullam. Accusantium veritatis quisquam libero voluptatem!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
