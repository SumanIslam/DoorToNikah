import * as React from "react";
import { v4 as uuidv4 } from 'uuid';

// data
import { faqData } from "./faq-data";

// style
import "../../styles/utils.scss";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Container from '@mui/material/Container';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const faqComponentOld = () => {
  const [expanded, setExpanded] = React.useState("panel");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const marginLeftRight = innerWidth > 1206 ? "mlr-7" : "mlr-0";
  return (
    <>
			<br />
			<Container className='mb-5'>
				<h4>সাধারণ প্রশ্ন ও উত্তর</h4>
				{faqData.map((item, index) => (
					<Accordion
            key={uuidv4()}
						expanded={expanded === `panel${item.id}`}
						onChange={handleChange(`panel${item.id}`)}
						index={index}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							{item.question}
						</AccordionSummary>
						<AccordionDetails>{item.answer}</AccordionDetails>
					</Accordion>
				))}
			</Container>
		</>
  );
};

export default faqComponentOld;