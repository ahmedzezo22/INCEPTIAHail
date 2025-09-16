import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const HackathonTopics = () => {
  const { t } = useTranslation();

  const cards = [
    { id: 1, key: "card1" },
    { id: 2, key: "card2" },
    { id: 3, key: "card3" },
  ];

  return (
    <div className={styles.wrapperHackathonTopics} id="topics">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        <h4>{t("HackathonTopics.title")}</h4>
        <div className={styles.cards}>
          {cards.map((card) => (
            <div className={styles.card} key={card.id}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonTopics;
