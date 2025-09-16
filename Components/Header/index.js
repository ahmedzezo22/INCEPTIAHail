"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const targetDate = new Date("2025-12-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.wrapperHeader} id="home">
      <span> </span>
      <span> </span>
      <div className="container" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
        <Carousel autoplay autoplaySpeed={1500} arrows>
         
             <div className={styles.slide}>
            <div className={styles.doctorResearchContainer}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
                <Image
                  src="/mages/bannerDocImg.png"
                  alt={t("header.doctorResearchAlt")}
                  width={1920}
                  height={1080}
                  className={styles.doctorResearchImage}
                  style={{ objectFit: "cover", opacity: 0.4, width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              <Image
             src="/mages/InceptialLogo.png"
                alt={t("header.logoAlt")}
                width={220}
                height={100}
                className={styles.logo_img}
              />
            </div>
            <h6>{t("header.subtitle")}</h6>
            <h5>{t("header.title")}</h5>
            <div style={{ textAlign: "center", color: "#fff" }}>
              <h6 style={{ marginBottom: "20px" }}>
                {t("header.countdownTitle")}
              </h6>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.time}>
                  <p>{timeLeft.days}</p>
                  <span>{t("header.days")}</span>
                </div>
                <div className={styles.time}>
                  <p>{timeLeft.hours}</p>
                  <span>{t("header.hours")}</span>
                </div>
                <div className={styles.time}>
                  <p>{timeLeft.minutes}</p>
                  <span>{t("header.minutes")}</span>
                </div>
                <div className={styles.time}>
                  <p>{timeLeft.seconds}</p>
                  <span>{t("header.seconds")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.slide}>
            <Image
            src="/mages/InceptialLogo.png"

              alt={t("header.slideAlt")}
              width={800}
              height={400}
              className={styles.slideImage}
            />
          </div>
      
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
