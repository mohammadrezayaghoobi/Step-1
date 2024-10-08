import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const styleButton = { backgroundColor: "#7950f2", color: "#fff" };

  function handleNext() {
    step < messages.length && setStep((s) => s + 1);
  }
  function handlePrevious() {
    step > 1 && setStep((s) => s - 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, i) => (
              <StepNumber key={i} step={step} numStep={i} />
            ))}
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}.
          </p>

          <div className="buttons">
            <button style={styleButton} onClick={handlePrevious}>
              Previous
            </button>
            <button style={styleButton} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function StepNumber({ step, numStep }) {
  return <div className={step >= numStep + 1 && "active"}>{numStep + 1}</div>;
}
