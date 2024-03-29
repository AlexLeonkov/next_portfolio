import React from "react";
// import { Link } from "react-router-dom";
import Image from "next/image";
import img1 from "../../../public/images/vertical/img1_3.jpg";
import img2 from "../../../public/images/vertical/img2_5.jpg";
import img250 from "../../../public/images/vertical/img250_3.jpg";
import img251 from "../../../public/images/vertical/img251_3.jpg";
import Link from "next/link";
import { useState } from "react";

function HomeMobileScreen() {
  const [img, setImg] = useState(img1);

  const defaultMoveIn = (e) => {
    setImg(img1);
  };

  const foodMoveIn = (e) => {
    setImg(img2);
  };

  const drinksMoveIn = (e) => {
    setImg(img251);
  };

  const interiorMoveIn = (e) => {
    setImg(img250);
  };

  const moveOut = (e) => {
    setStyle({ backgroundImage: `url(${img1})` });
  };

  return (
    <div
      style={{
        maxhHeight: "100vh",
      }}
      className="home"
    >
      <Image priority={true} src={img} alt="img" layout="fill" />
      <ul className="home_list">
        <li onMouseOver={defaultMoveIn}>
          <Link href="about">About + Contact</Link>
        </li>
        <li onMouseOver={foodMoveIn}>
          <Link href="food">Food</Link>
        </li>
        <li onMouseOver={drinksMoveIn}>
          <Link href="drinks">Drinks</Link>
        </li>
        <li onMouseOver={interiorMoveIn}>
          <Link href="interior">Interior</Link>
        </li>
        <li>
          <Link href="product">Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeMobileScreen;
