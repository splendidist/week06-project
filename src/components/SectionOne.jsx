import ImgButton from "./ImgButton";

export default function SectionOne() {
  return (
    <div className="section-1">
      <h2>upgrades</h2>
      <ImgButton src="./public/assets/pretzel.png" alt="pretzel" />
      <ImgButton src="./public/assets/coffee.png" alt="coffee" />
      <ImgButton src="./public/assets/bagels.png" alt="bagel" />
      <ImgButton src="./public/assets/egg.png" alt="bacon and eggs" />
      <ImgButton src="./public/assets/croissant.png" alt="croissant" />
      <ImgButton
        src="./public/assets/avocado-toast.png"
        alt="avocado on toast"
      />
    </div>
  );
}
