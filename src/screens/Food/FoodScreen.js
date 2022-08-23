import React from "react";
import Image from "next/image";
import PhotosTemplate from "../../templates/PhotosTemplate";
import { foodImages } from "../../../public/images/index";
//import Header from "../layout/header";

function food() {
  return (
    <PhotosTemplate images={foodImages} header="Food Photography Berlin" />
  );
}

export default food;
