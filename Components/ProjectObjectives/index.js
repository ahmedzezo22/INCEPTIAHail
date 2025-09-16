"use client";
import React from "react";
import styles from "./style.module.css";
import {
  FaLightbulb,
  FaProjectDiagram,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectObjectives = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // ✅ نحدد اللغة

  // نراقب ظهور القسم
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Variants
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: isArabic ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.wrapperProjectObjectives} id="objectives" ref={ref}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        {/* ✅ العنوان */}
        <motion.h4
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t("ProjectObjectives.title")}
        </motion.h4>

        {/* ✅ الكروت */}
        <motion.div
          className={styles.wrapperCard}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.card} variants={cardVariants}>
            <div className={styles.icon}>
              <FaLightbulb />
            </div>
            <div>
              <h6>{t("ProjectObjectives.cards.card1.title")}</h6>
              <p>{t("ProjectObjectives.cards.card1.desc")}</p>
            </div>
          </motion.div>

          <motion.div className={styles.card} variants={cardVariants}>
            <div className={styles.icon}>
              <FaProjectDiagram />
            </div>
            <div>
              <h6>{t("ProjectObjectives.cards.card2.title")}</h6>
              <p>{t("ProjectObjectives.cards.card2.desc")}</p>
            </div>
          </motion.div>

          <motion.div className={styles.card} variants={cardVariants}>
            <div className={styles.icon}>
              <FaUserGraduate />
            </div>
            <div>
              <h6>{t("ProjectObjectives.cards.card3.title")}</h6>
              <p>{t("ProjectObjectives.cards.card3.desc")}</p>
            </div>
          </motion.div>

          <motion.div className={styles.card} variants={cardVariants}>
            <div className={styles.icon}>
              <FaAward />
            </div>
            <div>
              <h6>{t("ProjectObjectives.cards.card4.title")}</h6>
              <p>{t("ProjectObjectives.cards.card4.desc")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectObjectives;
