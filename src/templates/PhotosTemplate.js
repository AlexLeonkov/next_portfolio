import React from "react";
import Image from "next/image";
import Header from "../components/Header";

function photosRender({ images, header }) {
  return (
    <div>
      <Header />

      <main>
        <div className="row">
          {images.map((image, index) => {
            return (
              <div key={index} className="column">
                <Image
                  priority={true}
                  src={image}
                  alt={index}
                  width={650}
                  height={650}
                />
              </div>
            );
          })}
        </div>

        <h1 className="main_title">{header}</h1>
      </main>
    </div>
  );
}

export default photosRender;
