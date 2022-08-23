import React from "react";
import Image from "next/image";

import { drinksImages } from "../../../public/images/index";
//import Header from "../layout/header";
import PhotosTemplate from "../../templates/PhotosTemplate";
function drinks() {
  return (
    <PhotosTemplate images={drinksImages} header="Drinks Photography Berlin" />
  );
}

export default drinks;
