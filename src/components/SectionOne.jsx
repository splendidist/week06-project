import ImgButton from "./ImgButton";

export default function SectionOne() {
  return (
    <div className="section-1">
      <h2>upgrades</h2>
      <ImgButton src="./assets/pretzel.png" alt="pretzel" />
      <ImgButton src="./assets/coffee.png" alt="coffee" />
      <ImgButton src="./assets/bagels.png" alt="bagel" />
      <ImgButton src="./assets/egg.png" alt="bacon and eggs" />
      <ImgButton src="./assets/croissant.png" alt="croissant" />
      <ImgButton src="./assets/avocado-toast.png" alt="avocado on toast" />
    </div>
  );
}
