import React, { useState } from "react";
import "./Home.scss";

const faqs = [
    {
        question: "How do I verify my email?",
        answer:
            "Click the link in the verification email from verify@codepen.io (be sure to check your spam folder or other email tabs if it's not in your inbox). Or, send an email with the subject 'Verify' to verify@codepen.io from the email address you use for your CodePen account.",
        link: "https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2",
    },
    {
        question: "My Pen loads infinitely or crashes the browser.",
        answer:
            "It's likely an infinite loop in JavaScript that we could not catch. To fix, add ?turn_off_js=true to the end of the URL (on any page, like the Pen or Project editor, your Profile page, or the Dashboard) to temporarily turn off JavaScript.",
        link: "https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/",
    },
    {
        question: "How do I contact the creator of a Pen?",
        answer:
            "You can leave a comment on any public Pen. Click the 'Comments' link in the Pen editor view, or visit the Details page.",
        link: "https://blog.codepen.io/documentation/faq/how-do-i-contact-the-creator-of-a-pen/",
    },
    {
        question: "What version of [library] does CodePen use?",
        answer: "We have our current list of library versions here:",
        link: "https://codepen.io/versions",
    },
    {
        question: "What are forks?",
        answer:
            "A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.",
        link: "https://blog.codepen.io/documentation/features/forks/",
    },
];

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container msm-faq-section  d-none" id="faq">
            <div className="text-center mb-5">
                <h1 class="display-6 fw-bold text-white">Discover the Beauty of Every Moment</h1>
                <p class=" text-secondary fw-normal">Explore a gallery filled with energy, creativity, and breathtaking compositions.</p>
            </div>
            <div className="wrapper">
                {faqs.map((faq, index) => (
                    <div key={index} className="msm-accordion border-b py-2">
                        <div
                            className={`question cursor-pointer text-lg font-semibold ${activeIndex === index ? "text-blue-500" : "text-black"
                                }`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {faq.question}
                        </div>
                        <div
                            className="answercont overflow-hidden transition-max-height duration-300"
                            style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
                        >
                            <div className="answer text-gray-700 p-2">
                                {faq.answer}
                                {faq.link && (
                                    <>
                                        <br />
                                        <a href={faq.link} className="text-blue-600 underline">
                                            Learn more
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
