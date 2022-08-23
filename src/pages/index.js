import React from "react";
// import { Link } from "react-router-dom";
import Image from "next/image";
import img1 from "../../public/images/horizont/img1_2.jpg";
import img2 from "../../public/images/horizont/img2_4.jpg";
import img250 from "../../public/images/horizont/img250_2.jpg";
import img251 from "../../public/images/horizont/img251_2.jpg";
import Link from 'next/link'
import { useState } from "react";

function Home() {
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
    <div className="home">
      <Image priority={true} src={img} layout="fill" />
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
      </ul>
    </div>
  );
}

export default Home;
