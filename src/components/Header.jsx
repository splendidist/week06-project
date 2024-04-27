import Modal from "./Modal.jsx";

export default function Header() {
  const firstModalProps = {
    buttonText: "About Game",
    heading: "About Game",
    paragraph1:
      "Welcome to Catisserie, the purrfect blend of café culture and feline fun! 🐾",
    paragraph2:
      "Indulge your cravings for cookies and companionship in our whimsical world where every click brings you closer to cookie paradise. Meet your loyal feline friend, who's always ready to lend a paw in your quest for delicious delights. Whether you're a seasoned cookie connoisseur or just starting your journey, Catisserie offers a cozy retreat where you can relax, unwind, and immerse yourself in the delightful world of café culture.",
    paragraph3:
      "Customize your experience by naming your furry companion and watch as they eagerly join you on your cookie-clicking adventures. But there's more to Catisserie than just cookies and cats! Explore our charming café-themed upgrades, featuring an array of delectable treats and beverages to enhance your gaming experience. From piping hot lattes to mouthwatering pastries, each upgrade brings its own unique flair to your cozy corner of the internet. So, grab a cup of coffee, cozy up with your furry friend, and let the clicking begin! May your cookie jar overflow with sweetness.",
  };

  const secondModalProps = {
    buttonText: "How to Play",
    heading: "How to Play",
    paragraph1:
      "Click the Cookie: The heart of the game lies in clicking the cookie!",
    paragraph2:
      "Each click earns you cookies, which you can use to buy upgrades and enhance your gameplay experience.Name Your Cat: Give your adorable feline companion a name to make them truly yours. Your cat will accompany you throughout your cookie-clicking journey, providing moral support and endless cuteness. Buy Upgrades: Use your hard-earned cookies to purchase café-themed upgrades. These upgrades range from delicious food and drink items to enhancements that boost your cookie production. Keep an eye on your cookie count and invest wisely to maximize your progress.",
    paragraph3:
      "Share Your Success: Don't forget to share your cookie-clicking accomplishments with friends and fellow players. Compare cookie counts, exchange tips, and revel in the joy of collective cookie conquest. Have Fun: Above all, remember to have fun! Catisserie is designed to be a relaxing and enjoyable experience. Take your time, savor the moment, and let the soothing ambiance of the café world wash over you as you click your way to cookie glory.",
  };
  return (
    <div>
      <header>
        {/* {...} pass each key value as a prop */}
        <Modal {...firstModalProps} />
        <h1>catisserie</h1>
        <Modal {...secondModalProps} />
      </header>
    </div>
  );
}
