"use client"
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqs = [
    {
        question: "What is this app about?",
        answer: "This app helps users track and improve their daily habits.",
    },
    {
        question: "How do I reset my password?",
        answer:
            "Click on 'Forgot Password' on the login screen and follow instructions.",
    },
    {
        question: "Can I use this app offline?",
        answer: "Yes, some features are available offline after the initial setup.",
    },
];

const Faqpage = () => {
    const [current, setCurrent] = useState(0)
    return <div className="acc-parent my-5">
        <h1 className="text-center mb-5">Accordion</h1>
        <div className="acc-wrapper max-w-2xl mx-auto">
            {
                faqs &&
                faqs.map((item, idx) => {
                    return <div className="w-full block" key={"acc" + idx}>
                        <button className="border-b-2 w-full text-left flex justify-between
                            p-2
                        "
                            onClick={() => {
                                idx === current ?
                                    setCurrent(null) :
                                    setCurrent(idx)
                            }}
                        >{item?.question}
                            {
                                current === idx ?
                                    <FaAngleUp />
                                    :
                                    <FaAngleDown />
                            }
                        </button>
                        {
                            current === idx &&
                            <div className="contentarea p-2 bg-amber-50">
                                <p>{
                                    item?.answer
                                }</p>
                            </div>
                        }

                    </div>
                })
            }
        </div>
    </div>
}
export default Faqpage