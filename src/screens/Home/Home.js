import React from "react";
// import { Link } from "react-router-dom";
import Image from "next/image";
import img1 from "../../../public/images/horizont/img1_2.jpg";
import img2 from "../../../public/images/horizont/img2_4.jpg";
import img250 from "../../../public/images/horizont/img250_2.jpg";
import img251 from "../../../public/images/horizont/img251_2.jpg";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import { Form, Input } from "antd";

function HomeScreen() {
  const { photoType, setPhotoType } = useState("");

  const onTypeChange = (e) => {
    console.log(e.target.value);
    setPhotoType(e.target.value);
  };
  return (
    <>
      <Header />
      <Form>
        <Input
          onInput={onTypeChange}
          value={photoType}
          placeholder="creative/e-commerce"
        />
      </Form>

      <div className="home">Hello</div>
    </>
  );
}

export default HomeScreen;
