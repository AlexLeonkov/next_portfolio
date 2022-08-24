import React from "react";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import about from "../../../public/images/about.jpg";

import styles from "./About.module.css";

const AboutScreen = () => {
  return (
    <>
      <section className={styles.about}>
        <Image
          className={styles.image}
          height={1351}
          width={1080}
          src={about}
          alt="about"
        />
        <div className={styles.content}>
          <p>
            Hey everyone , my name is Lena. I am a professional photographer.
            Originaly I am from Donetsk, Ukraine and recently I had to relocate.
            Now I am based in Berlin and wanna persuade my path. Photography is
            my passion, I have been in this sphere professionaly for 5 years
            now. that’s what motivates me to keep moving. I have worked with
            numerous top clients in restaurants industry (You can also check my
            portfolio) I would be glad to offer You my professional experience
            for interior/food/drinks photography. Feel free to contact me by
            filling out the form or direct via Instagram or email.
          </p>
          <a href="https://www.instagram.com/hhey.ellen/?igshid=YzAyZWRlMzg%3D"></a>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default AboutScreen;
