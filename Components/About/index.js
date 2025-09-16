import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container" id="about">
      <div className={styles.wrapperAbout}>
        <div>
          <Image
            src="/mages/About/banner.jpg"
            alt="image logo nisbau"
            width={300}
            height={100}
            className={styles.logo_img}
          />
        </div>
        <div>
          <h4> {t("about.title")} </h4>
          <p>{t("about.desc")}</p>
          <div className={styles.wrapperBut}>
            <button className="butDefault"> {t("about.but")} </button>
          </div>
        </div>
        <span> </span>
        <span> </span>
      </div>
    </div>
  );
};

export default About;
