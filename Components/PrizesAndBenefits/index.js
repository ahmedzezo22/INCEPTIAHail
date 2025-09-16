"use client";
import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrizesAndBenefits = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 يتكرر مع كل دخول للفيو
    threshold: 0.2,
  });

  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  };

  const cardContainer = {
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, x: isArabic ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cards = [
    {
      title: t("Prizes.cards.card1.title"),
      prize: t("Prizes.cards.card1.prize"),
      benefits: [
        t("Prizes.cards.card1.benefits.benefit1"),
        t("Prizes.cards.card1.benefits.benefit2"),
        t("Prizes.cards.card1.benefits.benefit3"),
      ],
    },
    {
      title: t("Prizes.cards.card2.title"),
      prize: t("Prizes.cards.card2.prize"),
      benefits: [
        t("Prizes.cards.card2.benefits.benefit1"),
        t("Prizes.cards.card2.benefits.benefit2"),
      ],
    },
    {
      title: t("Prizes.cards.card3.title"),
      prize: t("Prizes.cards.card3.prize"),
      benefits: [
        t("Prizes.cards.card3.benefits.benefit1"),
        t("Prizes.cards.card3.benefits.benefit2"),
      ],
    },
  ];

  return (
    <div className={styles.wrapperPrizesAndBenefits} id="prizes" ref={ref}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        <motion.h4
          variants={titleVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t("Prizes.title")}
        </motion.h4>

        <motion.p
          variants={descVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t("Prizes.desc")}
        </motion.p>

        <motion.div
          className={styles.cards}
          variants={cardContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariant}
            >
              <h6>{card.title}</h6>
              <p>{card.prize}</p>
              <ul>
                {card.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrizesAndBenefits;
