"use client";
import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TargetGroup = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 يتكرر مع كل دخول للفيو
    threshold: 0.2,
  });

  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2, // 👈 يخلي كل كارت يظهر ورا التاني
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.wrapperTargetGroup} id="target-group" ref={ref}>
      <div className="container">
        <motion.h4
          variants={titleVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t("TargetGroup.title")}
        </motion.h4>

        <motion.div
          className={styles.cards}
          variants={cardContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariant}>
            <h6>{t("TargetGroup.cards.card1.title")}</h6>
            <p>{t("TargetGroup.cards.card1.desc")}</p>
          </motion.div>

          <motion.div variants={cardVariant}>
            <h6>{t("TargetGroup.cards.card2.title")}</h6>
            <p>{t("TargetGroup.cards.card2.desc")}</p>
          </motion.div>

          <motion.div variants={cardVariant}>
            <h6>{t("TargetGroup.cards.card3.title")}</h6>
            <p>{t("TargetGroup.cards.card3.desc")}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TargetGroup;
