import React from "react";
import styles from "./style.module.css";
import {
  FaLightbulb,
  FaProjectDiagram,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectObjectives = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapperProjectObjectives} id="objectives">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        <h4> {t("ProjectObjectives.title")} </h4>
        <div className={styles.wrapperCard}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaLightbulb />
            </div>
            <div>
              <h6> {t("ProjectObjectives.cards.card1.title")} </h6>
              <p>{t("ProjectObjectives.cards.card1.desc")}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaProjectDiagram />
            </div>
            <div>
              <h6> {t("ProjectObjectives.cards.card2.title")} </h6>
              <p>{t("ProjectObjectives.cards.card2.desc")}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaUserGraduate />
            </div>
            <div>
              <h6> {t("ProjectObjectives.cards.card3.title")} </h6>
              <p>{t("ProjectObjectives.cards.card3.desc")}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaAward />
            </div>
            <div>
              <h6> {t("ProjectObjectives.cards.card4.title")} </h6>
              <p>{t("ProjectObjectives.cards.card4.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectObjectives;
