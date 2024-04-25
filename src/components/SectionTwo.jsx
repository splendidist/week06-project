import { useState, useEffect } from "react";

export default function SectionTwo() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      addCookie();
    }, 1000 / cps);

    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addCookie() {
    setCookies((currentCookies) => {
      return currentCookies + 1;
    });
  }

  function buyUpgrade() {
    setCps(cps + 1);
  }

  return (
    <div className="section-2">
      <img
        onClick={addCookie}
        className="cookie-img"
        src="./public/assets/cookie.png"
        alt="cookie"
      ></img>
      <p>{cookies}</p>
      <p>cookies per second: {cps}</p>
      <button onClick={buyUpgrade}>upgrade</button>
      <img
        className="user-cat"
        src="./public/assets/exotic-shorthair.png"
        alt="exotic shorthair cat"
      ></img>
      <input></input>
    </div>
  );
}
