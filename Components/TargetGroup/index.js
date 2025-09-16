import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const TargetGroup = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapperTargetGroup} id="target-group">
      <div className="container">
        <h4> {t("TargetGroup.title")} </h4>
        <div className={styles.cards}>
          <div>
            <h6> {t("TargetGroup.cards.card1.title")} </h6>
            <p>{t("TargetGroup.cards.card1.desc")}</p>
          </div>
          <div>
            <h6> {t("TargetGroup.cards.card2.title")} </h6>
            <p>{t("TargetGroup.cards.card2.desc")}</p>
          </div>
          <div>
            <h6> {t("TargetGroup.cards.card3.title")} </h6>
            <p>{t("TargetGroup.cards.card3.desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetGroup;
