import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqData = [
    {
      id: 1,
      question: "Do you run insurance?",
      answer: "Yes, we do accept insurance for our massage therapy services. We understand that health and wellness are important, and we want to make our services accessible to as many individuals as possible. We work with a variety of insurance providers to help cover the cost of therapeutic massage treatments. However, it's important to note that insurance coverage can vary, so we recommend checking with your insurance provider to confirm your specific coverage and any potential out-of-pocket expenses. Our team is also happy to assist you in navigating the insurance process and providing any necessary documentation for reimbursement. Feel free to contact us for more information or to discuss your individual needs.",
    },
    {
      id: 2,
      question: "Where are you located?",
      answer: "Our clinic is conveniently located in a private and comfortable home setting. To ensure the security and privacy of our therapists, we provide the exact location details via email the night before your scheduled appointment. If you have any specific concerns or questions about our location, feel free to reach out, and we'll be more than happy to assist you. We look forward to providing you with a relaxing and personalized experience at our clinic.",
    },
    {
      id: 3,
      question: "What can I do with Material Tailwind?",
      answer: "Absolutely! We offer both 30 and 90-minute massage sessions to cater to your individual preferences and scheduling needs. To arrange for a specific duration, kindly reach out to us directly to make your request. We understand that everyone has unique requirements, and we're here to accommodate your preferences for a tailored and enjoyable massage experience. Feel free to contact us, and we'll be happy to assist you in scheduling the perfect massage session for you.",
    },
    {
      id: 4,
      question: "Do you offer text or email reminders?",
      answer: "Yes, we provide both text and email reminders for your convenience. We understand the importance of keeping you informed and ensuring you don't miss your scheduled appointments. You can choose your preferred mode of communication, whether it's through text or email, and we'll make sure to send timely reminders leading up to your appointment. If you have a preference or need to update your contact information, feel free to let us know, and we'll be happy to accommodate your preferences.",
    },
  ];

  return (
    <div className="justify-center pb-20">
      <p className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </p>
      {faqData.map((item) => (
        <Accordion key={item.id} open={open === item.id} className="pl-20 pr-20">
          <AccordionHeader onClick={() => handleOpen(item.id)}>{item.question}</AccordionHeader>
          <AccordionBody className="text-md">{item.answer}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
