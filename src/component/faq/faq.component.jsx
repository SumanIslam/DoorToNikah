import * as React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// style
import "../../styles/utils.scss";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Container from "@mui/material/Container";
import { Divider, Typography } from "@mui/material";

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
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ color: "#522b79", fontSize: "0.9rem" }} />
    }
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

const FaqComponent = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  // const marginLeftRight = innerWidth > 1206 ? "mlr-7" : "mlr-0";
  return (
    <>
      <br />
      <Container className="mb-5">
        <h3>সাধারণ প্রশ্ন ও উত্তর</h3>
        <Accordion
          key={uuidv4()}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              বায়োডাটা জমা দিতে কত টাকা লাগে?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              আমরা এখন পর্যন্ত কারো কাছ থেকে টাকা নিচ্ছি না।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
              মুসলিমদের জন্য।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              বায়োডাটা তৈরি করার কোনো বিশেষ শর্ত আছে?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে নূন্যতম আবশ্যকতা নিম্নরূপ-
              <br />
              <br />
              <Typography
                sx={{
                  fontFamily: "SolaimanLipi",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                পুরুষ-
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                {" "}
                ১/ ৫ ওয়াক্ত নামাযী হতে হবে।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ২/ ওয়াজিব দাড়ি সুন্নতি পদ্ধতিতে বড় থাকতে হবে।{" "}
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৩/ টাখনুর উপর কাপড় পরতে হবে।{" "}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontFamily: "SolaimanLipi",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                নারী-{" "}
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ১/ ৫ ওয়াক্ত নামাযী হতে হবে।{" "}
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ২/ “নিকাব” সহ ফরজ পর্দানশীন হতে হবে।
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমার বায়োডাটা এপ্রুভ হয় নি কেন?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমরা বিভিন্ন কারণে বায়োডাটা এপ্রুভ করি না। তার মাঝে কয়েকটি কারণ
              উল্লেখ করা হলো।
              <br />
              <br />
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ১/ আপনি যদি অভিভাবককে না জানিয়ে আমাদের ওয়েবসাইটে বায়োডাটা জমা
                দেন।{" "}
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ২/ অভিভাবকের নাম্বারের ঘরে নিজের নাম্বার লিখে রাখেন।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৩/ ৫ ওয়াক্ত নামাযী না হোন।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৪/ ওয়াজিব দাঁড়ি সুন্নতি পদ্ধতীতে বড় না থাকে। (পুরুষদের জন্য)
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৫/ টাখনুর উপর কাপড় না পরেন। (পুরুষদের জন্য)
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৬/ নিকাব সহ ফরজ পর্দা/বোরকা না পরেন। (নারীদের জন্য)
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৭/ হিজাব পরেন কিন্ত নিকাব পরেন না। (নারীদের জন্য)
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৮/ বায়োডাটাতে কোনো মিথ্যা তথ্য দিয়ে থাকলে।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ৯/ প্রশ্নের উত্তর স্পষ্ট ভাবে না দিয়ে অন্য ভাবে দিলে। যেমনঃ শুধু
                “আলহামদুলিল্লাহ” বা “হুম” ইত্যাদি লিখেন অনেকেই, অথচ এটি দ্বারা
                হ্যাঁ/না স্পষ্টভাবে বোঝা যায় না ।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ১০/ দ্বীনদার মুসলিম না হয়ে থাকলে।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ১১/ কোনো গুরুত্বপূর্ণ প্রশ্নের উত্তর না দিয়ে ফাঁকা রেখে দিলে।
                যেমনঃ অনেকেই “কতৃপক্ষের জিজ্ঞাসা” উত্তর না দিয়েই পাবলিশ করেন।
              </Typography>
              <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
                ১২/ আলিয়া মাদ্রাসা শিক্ষিতদের জেনারেল সিলেক্ট করতে বলার পরেও কেউ
                যদি মাদ্রাসা সিলেক্ট করেন তাহলেও এপ্রুভ হয় না।
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              কিছু তথ্য সঠিকভাবে না দেয়ার কারণে আমার বায়োডাটা এপ্রুভ হয় নি, আমি
              কি আবার বায়োডাটা জমা দিতে পারবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              হ্যাঁ পারবেন। যে ঘরে ভুল তথ্য দেয়ার জন্য আপনার বায়োডাটা নট এপ্রুভ
              করা হয়েছে, সেই ঘরে সঠিক তথ্য দিয়ে Save Changes ক্লিক করে Publish
              Biodata করবেন তাহলে এপ্রুভ করা হবে ইন শা আল্লাহ। তবে উপরের
              প্রশ্নের উত্তরে উল্লিখিত বিশেষ শর্ত না থাকার কারণে যদি বায়োডাটা নট
              এপ্রুভ হয় তাহলে আর এপ্রুভ হবে না।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমি ৫ ওয়াক্ত নামাযী, কিন্ত আমি সুন্নতী দাঁড়ি রাখি নি, আমি বায়োডাটা
              আপলোড করতে পারবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              না, আপনি বায়োডাটা আপলোড করলে এপ্রুভ করা হবে না। যাদের ওয়াজিব দাড়ি
              আছে শুধুমাত্র তাদের বায়োডাটা এপ্রুভ করা হবে।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমি ৫ ওয়াক্ত নামাযী, আমি বোরকা ও হিজাব পরি তবে নিকাব করি না। আমি
              বায়োডাটা আপলোড করতে পারবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              না, আপনি বায়োডাটা আপলোড করলে এপ্রুভ করা হবে না। যারা নিকাব সহ
              বোরকা পরেন শুধুমাত্র তাদের বায়োডাটা এপ্রুভ করা হয়।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমার অভিভাবক আমার বিয়েতে রাজি নয়, আমি কি বায়োডাটা জমা দিতে পারবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              না। আপনি পাত্র/পাত্রী যেই হোন না কেন, আমাদের ওয়েবসাইটে বায়োডাটা
              তৈরি করতে হলে অবশ্যই অভিভাবকের অনুমতি নিয়ে জমা দিতে হবে। অন্যথায়
              বায়োডাটা এপ্রুভ করা হবে না।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমি একজন ছাত্র, আমার এখনো কোনো আয় নেই, আমি কি বায়োডাটা আপলোড করতে
              পারবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              হ্যাঁ, পারবেন। তবে অবশ্যই আপনার অভিভাবকের অনুমতি নিয়ে বায়োডাটা
              তৈরি করতে হবে।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            aria-controls="panel10d-content"
            id="panel10d-header"
          >
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              বায়োডাটা জমা দেয়ার পর বিয়ে হয়ে গেলে বা অন্য কারণে বায়োডাটা ডিলিট
              করতে পারবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              হ্যাঁ, আপনার যখন ইচ্ছা তখন বায়োডাটা ডিলিট করতে পারবেন। বায়োডাটা
              ডিলিট করতে ই-মেইল এর মাধ্যমে যোগাযোগ করুন।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            aria-controls="panel11d-content"
            id="panel11d-header"
          >
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              একজনের বায়োডাটা আরেকজন তৈরি করতে পারবে?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              আমাদের বায়োডাটা ফর্মে অনেক ব্যক্তিগত প্রশ্ন আছে, যেগুলোর উত্তর
              একমাত্র পাত্র-পাত্রী নিজেই ভাল জানেন। পরিবারের অন্য কেউ যদি ফর্মটি
              তৈরি করে দেন তাহলে সেই প্রশ্নগুলোর উত্তর বাহ্যিকভাবে সত্য হলেও
              কিছু ত্রুটি থেকে যাবে।{" "}
              <b>এজন্য যার বিয়ে তাকেই লিখতে হবে এমন শর্ত আবশ্যক করা হয়েছে।</b>{" "}
              তবে অনেকেই আছেন বাংলা টাইপ করতে জানেন না। এক্ষেত্রে বাংলা টাইপ
              করতে জানেন এমন একজনকে পাশে বসিয়ে উনি উত্তরগুলো বলে দিবেন, টাইপ
              জানা ব্যক্তি লিখে ফর্মটি তৈরি করবেন।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary
            aria-controls="panel12d-content"
            id="panel12d-header"
          >
            <Typography
              sx={{
                color: "#522b79",
                fontFamily: "SolaimanLipi",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              আমি বাংলা টাইপ করতে জানি না। আমি কিভাবে বায়োডাটা তৈরি করবো?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "SolaimanLipi", fontSize: "1rem" }}>
              এক্ষেত্রে বাংলা টাইপ করতে জানেন এমন একজনকে পাশে বসিয়ে আপনি
              উত্তরগুলো বলে দিবেন, টাইপ জানা ব্যক্তি লিখে ফর্মটি তৈরি করবেন।
              অবশ্যই উত্তরগুলো আপনার হতে হবে। নয়ত ত্রুটিযুক্ত উত্তর হবে, যা
              পাঠকের সাথে প্রতারণার শামিল ও ওয়েবসাইটের রুলস পরিপন্থী।
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default FaqComponent;
