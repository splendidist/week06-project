export default function ModalContent({
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  onClose,
}) {
  return (
    <div className="modal">
      {/* <div className="modal-content">{content}</div> */}
      <div className="modal-content">
        <h2>{heading}</h2>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
      </div>

      <button className="modal-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
