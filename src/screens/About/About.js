import React from "react";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import about from "../../../public/images/about.jpg";
import styles from "./About.module.css";
import en from "../../lang/en.json"
import de from "../../lang/de.json"


import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const AboutScreen = () => {
const {locale} = useRouter()
  return (
    <>
   <Navbar/>
      <section className={styles.about}>
        <Image
          className={styles.image}
          height={1351}
          width={1080}
          src={about}
          alt="about"
        />
        <div className={styles.content}>
        <p>{locale === "de" ? de.ABOUT_ME : en.ABOUT_ME}</p>
          
          <a href="https://www.instagram.com/hhey.ellen/?igshid=YzAyZWRlMzg%3D"></a>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default AboutScreen;
