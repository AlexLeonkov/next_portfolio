import React from "react";
import Image from "next/image";
import PhotosTemplate from "../../templates/PhotosTemplate";
import { interiorImages } from "../../../public/images/index";
//import Header from "../layout/header";

function InteriorScreen() {
  return (
    <PhotosTemplate
      images={interiorImages}
      header="Interior Photography Berlin"
    />
  );
}

export default InteriorScreen;
