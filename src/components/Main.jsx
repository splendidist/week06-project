import ImgButton from "./ImgButton";
import data from "./upgrades";
import accessories from "./accessories";
import { useState, useEffect, useRef } from "react";

export default function Main() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);
  const refCps = useRef(0);
  const refTotal = useRef(0);
  const refOldTotal = useRef(0);

  useEffect(() => {
    refCps.current = cps;
  }, [cps]);

  useEffect(() => {
    refTotal.current = cookies;
  }, [cookies]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      addCookie();
    }, 1000);

    const displayInterval = setInterval(() => {
      const diff = (refTotal.current - refOldTotal.current) / 4; //4 stops the cookie add function from lagging behind when you click the cookie
      refOldTotal.current += diff;
      setDisplayTotal(Math.floor(refOldTotal.current));
    }, 100);

    return () => {
      clearInterval(myInterval);
      clearInterval(displayInterval);
    };
  }, []);

  //click cookie function

  function addCookie() {
    setCookies((currentCookies) => {
      return currentCookies + refCps.current;
    });
  }

  //buy upgrade function

  const buyUpgrade = (value) => {
    setCps(cps + value);
  };

  return (
    <main>
      <div className="section-1">
        <h2>Upgrades</h2>
        {/* <img className="price-tag" src="/assets/price-tag.svg" /> */}
        {/* UPGRADES ARRAY */}
        {data.map((upgrade) => (
          <div
            key={upgrade.alt + upgrade.id}
            onClick={() => buyUpgrade(upgrade.inc)}
          >
            <ImgButton src={upgrade.src} alt={upgrade.alt} />
          </div>
        ))}
      </div>

      <div className="section-2">
        <img
          onClick={addCookie}
          className="cookie-img"
          src="./assets/cookie.png"
          alt="cookie"
        ></img>
        <p>{displayTotal}</p>
        <p>cookies per second: {cps}</p>
        <img
          className="user-cat"
          src="./assets/exotic-shorthair.png"
          alt="exotic shorthair cat"
        ></img>
        <div className="input-form">
          <input
            className="input-box"
            type="text"
            placeholder="Username"
            required
          />
          <input className="input-button" type="submit" />
        </div>
      </div>

      <div className="section-3">
        <h2>accessories</h2>
        {/* ACCESSORIES ARRAY */}
        {accessories.map((upgrade) => (
          <div
            key={upgrade.alt + upgrade.id}
            // onClick={() => buyUpgrade(upgrade.inc)}
          >
            <ImgButton src={upgrade.src} alt={upgrade.alt} />
          </div>
        ))}
      </div>
    </main>
  );
}
