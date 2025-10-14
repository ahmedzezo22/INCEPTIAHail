"use client";
import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HackathonTopics = () => {
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

  const cardContainer = {
    visible: {
      transition: {
        staggerChildren: 0.25, // 👈 يخلي الكروت تطلع ورا بعض
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
    { id: 1, key: "card1" },
    { id: 2, key: "card2" },
    { id: 3, key: "card3" },
  ];

  const tracks = [
    {
      id: 1,
      title: t("projectTracks.tracks.innovation.title"),
      desc: t("projectTracks.tracks.innovation.desc"),
    },
    {
      id: 2,
      title: t("projectTracks.tracks.preventive.title"),
      desc: t("projectTracks.tracks.preventive.desc"),
    },
    {
      id: 3,
      title: t("projectTracks.tracks.ai.title"),
      desc: t("projectTracks.tracks.ai.desc"),
    },
    {
      id: 4,
      title: t("projectTracks.tracks.digital.title"),
      desc: t("projectTracks.tracks.digital.desc"),
    },
    {
      id: 5,
      title: t("projectTracks.tracks.modern.title"),
      desc: t("projectTracks.tracks.modern.desc"),
    },
    {
      id: 6,
      title: t("projectTracks.tracks.genomics.title"),
      desc: t("projectTracks.tracks.genomics.desc"),
    },
  ];
  return (
    <div className={styles.wrapperHackathonTopics} id="topics" ref={ref}>
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
          {t("projectTracks.title")}
        </motion.h4>

        <motion.div
          className={styles.cards}
          variants={cardContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {tracks.map((track) => (
            <motion.div
              className={styles.card}
              key={track.id}
              variants={cardVariant}
            >
              <span>{track.id}</span>
              <h4>{track.title}</h4>

              <p>{track.desc}</p>
            </motion.div>
          ))}
          {/* {cards.map((card) => (
            <motion.div
              className={styles.card}
              key={card.id}
              variants={cardVariant}
            >
              <span>{card.id}</span>
              <h4>{t(`HackathonTopics.cards.${card.key}.title`)}</h4>

              <p>{t(`HackathonTopics.cards.${card.key}.challenges.title`)}</p>
              <ol>
                {t(`HackathonTopics.cards.${card.key}.challenges.items`, {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>

              <p>{t(`HackathonTopics.cards.${card.key}.tracks.title`)}</p>
              <ol>
                {t(`HackathonTopics.cards.${card.key}.tracks.items`, {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </div>
  );
};

export default HackathonTopics;
