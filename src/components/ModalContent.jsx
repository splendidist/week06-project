export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>Welcome to Catisserie</div>
      <button className="modal-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
