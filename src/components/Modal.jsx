import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";

export default function Modal({ buttonText, modalContent }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="modal-button" onClick={() => setShowModal(true)}>
        {buttonText}
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            content={modalContent}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
