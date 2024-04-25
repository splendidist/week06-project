import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="modal-button" onClick={() => setShowModal(true)}>
        About
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
