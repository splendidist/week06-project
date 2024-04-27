import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";

export default function Modal({
  buttonText,
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="modal-button" onClick={() => setShowModal(true)}>
        {buttonText}
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            // content={modalContent}
            heading={heading}
            paragraph1={paragraph1}
            paragraph2={paragraph2}
            paragraph3={paragraph3}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
