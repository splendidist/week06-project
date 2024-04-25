import ImgButton from "./ImgButton";

export default function SectionOne() {
  return (
    <div className="section-1">
      <h2>upgrades</h2>
      <ImgButton src="./src/assets/pretzel.png" alt="pretzel" />
      <ImgButton src="./src/assets/coffee.png" alt="coffee" />
      <ImgButton src="./src/assets/bagels.png" alt="bagel" />
      <ImgButton src="./src/assets/egg.png" alt="bacon and eggs" />
      <ImgButton src="./src/assets/croissant.png" alt="croissant" />
      <ImgButton src="./src/assets/avocado-toast.png" alt="avocado on toast" />
    </div>
  );
}
