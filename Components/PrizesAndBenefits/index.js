import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const PrizesAndBenefits = () => {
  const { t } = useTranslation();

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
    <div className={styles.wrapperPrizesAndBenefits} id="prizes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        <h4>{t("Prizes.title")}</h4>
        <p>{t("Prizes.desc")}</p>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h6>{card.title}</h6>
              <p>{card.prize}</p>
              <ul>
                {card.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizesAndBenefits;
