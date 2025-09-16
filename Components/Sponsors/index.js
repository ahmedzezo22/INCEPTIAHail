"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sponsors = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 يتكرر لو طلعت ونزلت تاني
    threshold: 0.2,
  });

  const sectionVariant = {
    hidden: { opacity: 0, y: 100 }, // 👈 يبدأ تحت
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const clientsData = [
    "/mages/Sponsors/algharib.webp",
    "/mages/Sponsors/almuhilib.webp",
    "/mages/Sponsors/alTawy.webp",
    "/mages/Sponsors/BEC.webp",
    "/mages/Sponsors/fawasil.webp",
    "/mages/Sponsors/Petrojet.webp",
    "/mages/Sponsors/Sarmex.webp",
    "/mages/Sponsors/shabat aljazira.webp",
  ];

  return (
    <motion.div
      className={styles.wrapperSponsors}
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <h4>{t("sponsors.title")}</h4>
        <div>
          <Marquee autoFill={true} loop={0} speed={30} gradient={true}>
            {clientsData.map((item, index) => (
              <div className={styles.wrapperImage} key={index}>
                <Image
                  src={item}
                  alt={`Image Hackathon ${item}`}
                  width={140}
                  height={140}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};

export default Sponsors;
