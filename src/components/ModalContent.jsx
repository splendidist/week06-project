export default function ModalContent({ content, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">{content}</div>
      <button className="modal-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
