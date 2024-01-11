import { questions } from "../constants";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-xl mx-auto mt-14 max-sm:px-5">
      {questions.map((question, index) => (
        <div
          key={index}
          className="pb-4 mt-4 border-b-2 cursor-pointer border-slate-200"
          onClick={() => handleQuestionClick(index)}
        >
          <div className="flex justify-between items-center text-slate-500">
            <p className="basis-5/6 hover:text-[#FA5757]">
              {question.question}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              className={`transform ${
                openIndex === index
                  ? "rotate-180 transition-transform duration-300 ease-in-out"
                  : ""
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="mt-4 text-slate-400">{question.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
