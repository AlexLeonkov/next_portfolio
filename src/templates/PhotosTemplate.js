import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import styles from "./PhotosTemplate.module.css";

function photosRender({ images, header }) {
  return (
    <div>
      <Header />

      <h1 className={styles.mainTitle}>{header}</h1>

      <main>
        <div className={styles.container}>
          {images.map((image, index) => {
            return (
              <div key={index} className={styles.column}>
                <Image
                  priority={true}
                  src={image}
                  alt={index}
                  width={1000}
                  height={1000}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default photosRender;
