"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

// ✅ framer-motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  // ✅ نراقب الهيدر نفسه
  const { ref, inView } = useInView({
    triggerOnce: false, // عشان يتكرر لما ترجعله تاني
    threshold: 0.2,
  });

  return (
    <div className={styles.wrapperHeader} id="home">
      <span></span>
      <span></span>

      {/* انيميشن الكونتينر كله */}
      <motion.div
        className="container"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.8 }} // صغير ونازل
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} // يطلع ويكبر
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Carousel autoplay autoplaySpeed={2000} arrows>
          {/* slide 1 */}
          <motion.div
            className={styles.slide}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <Image
                src="/mages/InceptiaHailLogo.png"
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
          </motion.div>

          {/* slide 2 */}
          <motion.div
            className={styles.slide}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.doctorResearchContainer}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              >
                <div className={styles.doctorResearchImageContainer}>
                  <Image
                    src="/mages/bannerDocImg.png"
                    alt={t("header.doctorResearchAlt")}
                    fill
                    className={styles.doctorResearchImage}
                    style={{ objectFit: "cover", opacity: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* slide 3 */}
          <motion.div
            className={styles.slide}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/mages/InceptiaHailLogo.png"
              alt={t("header.slideAlt")}
              width={800}
              height={400}
              className={styles.slideImage}
            />
          </motion.div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Header;
