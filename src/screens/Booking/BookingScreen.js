import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./Booking.module.css";
import { Button, Input } from "antd";

const BookingScreen = () => {
  console.log("Boking");
  const [deadLineDate, setDeadlineDate] = useState("");
  const { photoType, setPhotoType } = useState("");

  const onDateChange = (event) => {
    console.log("triggered");
    setDeadlineDate(event.target.value);
    console.log(deadLineDate);
  };

  const onTypeChange = (e) => {
    console.log(e.target.value);
    setPhotoType(e.target.value);
  };

  useEffect(() => {
    console.log(PhotoType);
  }, [photoType]);

  return (
    <>
      <Header />

      <h2 className={styles.h2}>HOW TO BOOK A SHOOTING?</h2>
      <h3 className={styles.h3}>
        We need to know more about your business/brand.<br></br>We have prepared
        some basic questions. Please fill in the form below and we will get back
        <br></br>
        to you within 48 hours with a proposal and a quote for our photography
        services.
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.one}>
          <p className={styles.p}>Your full name?</p>
          <Input />
        </div>
        <div className={styles.two}>
          <p className={styles.p}>Your e-mail address?</p>
          <Input />
        </div>
        <div className={styles.three}>
          <p className={styles.p}>What is your brand about?</p>
          <Input />
        </div>
        <div className={styles.four}>
          <p className={styles.p}>Link to your website/social media?</p>
          <Input />
        </div>
        <div className={styles.five}>
          <p className={styles.p}>What type of photos do you need?</p>
          <Input
            onChange={onTypeChange}
            value={photoType}
            placeholder="creative/e-commerce"
          />
        </div>
        <div className={styles.six}>
          <p className={styles.p}>What is your deadline for project?</p>

          <input
            className={styles.date}
            value={deadLineDate}
            type="date"
            id="start"
            name="trip-start"
            onChange={onDateChange}
          ></input>
        </div>

        <div className={styles.seven}>
          <p className={styles.p}>How many photos do u need?</p>
          <Input />
        </div>
        <div className={styles.eight}>
          <p className={styles.p}>What ideas do you have in mind?</p>
          <Input />
        </div>
        <div className={styles.nine}>
          <p className={styles.p}>Where these photos will be used?</p>
          <Input />
        </div>
        <div className={styles.ten}>
          <p className={styles.p}>What is your budget for a shooting?</p>
          <Input placeholder="Minimum 1000$" />
        </div>
        <div className={styles.eleven}>
          <p className={styles.p}>
            Other specific information we need to know about your product brand?
          </p>
          <Input />
        </div>
      </div>

      <Button onClick={() => console.log("wow")} className={styles.btn}>
        Send!
      </Button>
    </>
  );
};

export default BookingScreen;
