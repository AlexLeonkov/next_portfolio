import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Image from "next/image";
import img1 from "../../public/images/horizont/img1_2.jpg";
import img2 from "../../public/images/horizont/img2_4.jpg";
import img250 from "../../public/images/horizont/img250_2.jpg";
import img251 from "../../public/images/horizont/img251_2.jpg";
import Link from "next/link";
import { useState } from "react";
import HomeMobileScreen from "../screens/Home/Home_mobile";
import HomeScreen from "../screens/Home/Home";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return isMobile ? <HomeMobileScreen /> : <HomeScreen />;
};

export default HomePage;
