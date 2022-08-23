import React from "react";
import Image from "next/image";

import { foodImages } from "../../../public/images/index";
//import Header from "../layout/header";

function food() {
  return (
    <PhotosTemplate images={foodsImages} header="Food Photography Berlin" />
  );
}

export default food;
