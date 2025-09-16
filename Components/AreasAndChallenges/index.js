import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { FaRobot, FaChalkboardTeacher, FaUsers, FaBrain } from "react-icons/fa";
import {
  MdLocalHospital,
  MdDataUsage,
  MdChildCare,
  MdWatch,
} from "react-icons/md";

const AreasAndChallenges = () => {
  const { t } = useTranslation();

  const icons = [
    FaRobot,
    FaChalkboardTeacher,
    FaUsers,
    FaBrain,
    MdLocalHospital,
    MdDataUsage,
    MdChildCare,
    MdWatch,
  ];

  const cards = [
    {
      title: t("Areas.cards.card1.title"),
      desc: t("Areas.cards.card1.desc"),
    },
    {
      title: t("Areas.cards.card2.title"),
      desc: t("Areas.cards.card2.desc"),
    },
    {
      title: t("Areas.cards.card3.title"),
      desc: t("Areas.cards.card3.desc"),
    },
    {
      title: t("Areas.cards.card4.title"),
      desc: t("Areas.cards.card4.desc"),
    },
    {
      title: t("Areas.cards.card5.title"),
      desc: t("Areas.cards.card5.desc"),
    },
    {
      title: t("Areas.cards.card6.title"),
      desc: t("Areas.cards.card6.desc"),
    },
    {
      title: t("Areas.cards.card7.title"),
      desc: t("Areas.cards.card7.desc"),
    },
    {
      title: t("Areas.cards.card8.title"),
      desc: t("Areas.cards.card8.desc"),
    },
  ];

  return (
    <div className={styles.wrapperAreasAndChallenges} id="areas">
      <div className="container">
        <h4>{t("Areas.title")}</h4>
        <p>{t("Areas.desc")}</p>
        <div className={styles.cards}>
          {cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div key={index}>
                <div className={styles.icon}>
                  <Icon size={18} color="var(--main-color)" />
                </div>
                <h6>{card.title}</h6>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AreasAndChallenges;
