export default function ImgButton({ src, alt }) {
  return (
    <button className="upgrade-img-div">
      <img className="upgrade-img" src={src} alt={alt}></img>
    </button>
  );
}
